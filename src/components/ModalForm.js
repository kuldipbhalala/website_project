import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { IoCloseSharp } from 'react-icons/io5';

export const ModalForm = ({ show, handleClose, handleSave, product, Title, Description, Price, Close, EditItem, Images, SaveChanges }) => {
  const [editedProduct, setEditedProduct] = useState({
    title: '',
    desc: '',
    price: '',
    gallery: []
  });

  useEffect(() => {
    if (product) {
      setEditedProduct({
        ...product,
        gallery: product.gallery || []
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newGallery = files.map(file => ({
      url: URL.createObjectURL(file),
      file: file
    }));
   
    setEditedProduct(prev => ({ ...prev, gallery: newGallery }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(editedProduct);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      {/* <Modal.Header closeButton>
        <Modal.Title>{EditItem}</Modal.Title>
      </Modal.Header> */}
      <div className='d-flex justify-content-between mx-4 my-4'>
          <h3>{EditItem}</h3>
          <span onClick={handleClose} style={{cursor:'pointer'}} ><IoCloseSharp size={24} /></span>

        </div>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>{Title}</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={editedProduct.title}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>{Description}</Form.Label>
            <Form.Control
              as="textarea"
              name="desc"
              value={editedProduct.desc}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>{Price}</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={editedProduct.price}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>{Images}</Form.Label>
            <Form.Control
              type="file"
              multiple
              onChange={handleImageChange}
            />
          </Form.Group>

          {editedProduct.gallery.length > 0 && (
            <div className="mb-3">
              <h6>Current Images:</h6>
              <div className="d-flex flex-wrap">
                {editedProduct.gallery.map((img, index) => (
                  <img
                    key={index}
                    src={img.url}
                    alt={`Product image ${index + 1}`}
                    style={{ width: '100px', height: '100px', objectFit: 'cover', margin: '5px' }}
                  />
                ))}
              </div>
            </div>
          )}
          <Button variant="secondary" onClick={handleClose}>
            {Close}
          </Button>
          <Button variant="primary" type="submit">
            {SaveChanges}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};