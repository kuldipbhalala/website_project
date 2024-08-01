import React, { useContext, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import Mywebcontextcall from './mywebcontext/Mywebcontext';

function AddModel({ Title, Description, Price, Close, Images, SaveChanges, EditItem, addshow, handleAddClose, onProductAdded }) {
  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    price: '',
    images: null
  });
  const { product, refresh, setRefresh } = useContext(Mywebcontextcall);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'images' ? files[0] : value
    });
  };

  const handleaddData = async () => {


    try {
      const data = new FormData();
      data.append('title', formData.title);
      data.append('desc', formData.desc);
      data.append('price', formData.price);
      if (formData.images) {
        data.append('gallery', formData.images);
      }

      const response = await axios.post('https://student-project-tau.vercel.app/api/product/addproduct', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setFormData({
        title: '',
        desc: '',
        price: '',
        images: null
      });
      handleAddClose();

      console.log('Success:', response.data);

      onProductAdded(response.data);


    } catch (error) {
      console.error('Error:', error);
    }
    finally {
      setRefresh(true);
    }
  };

  return (
    <div>
      <Modal show={addshow} onHide={handleAddClose}>
        <Modal.Header closeButton>
          <Modal.Title>{EditItem}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitle">
              <Form.Label>{Title}</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formDesc">
              <Form.Label>{Description}</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                name="desc"
                value={formData.desc}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formPrice">
              <Form.Label>{Price}</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formImages">
              <Form.Label>{Images}</Form.Label>
              <Form.Control
                type="file"
                multiple
                name="images"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleAddClose}>
            {Close}
          </Button>
          <Button variant="primary" onClick={handleaddData}>
            {SaveChanges}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddModel