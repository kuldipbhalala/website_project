import React, { useContext, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import Mywebcontextcall from './mywebcontext/Mywebcontext';
import { IoCloseSharp } from "react-icons/io5";

function AddModel({ addshow, handleAddClose, onProductAdded, formData, setFormData }) {

  const { setRefresh, setSearchData } = useContext(Mywebcontextcall);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newGallery = files.map(file => ({
      url: URL.createObjectURL(file),
      file: file
    }));

    setFormData(prev => ({ ...prev, gallery: newGallery }));
  };


  const handleaddData = async () => {


    try {
      const data = new FormData();
      data.append('title', formData.title);
      data.append('desc', formData.desc);
      data.append('price', formData.price);
      formData?.gallery?.forEach((img) => {
        if (img.file) {
          data.append(`gallery`, img.file);
        }
      });

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
      setSearchData("")
      setRefresh(true);
    }
  };

  return (
    <div>
      <Modal show={addshow} onHide={handleAddClose}>
        {/* <Modal.Header  closeButton>
          <Modal.Title>New Product</Modal.Title>
        </Modal.Header> */}
        <div className='d-flex justify-content-between mx-4 my-4'>
          <h3>Add Product</h3>
          <span onClick={handleAddClose} style={{cursor:'pointer'}} ><IoCloseSharp size={24} /></span>

        </div>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formDesc">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                name="desc"
                value={formData.desc}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formImages">
              <Form.Label>Images</Form.Label>
              <Form.Control
                type="file"
                multiple
                onChange={handleImageChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleAddClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleaddData}>
            SaveChanges
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddModel