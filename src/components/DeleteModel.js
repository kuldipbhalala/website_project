import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Mywebcontextcall from './mywebcontext/Mywebcontext';

const DeleteModel = ({
  Title,
  Close,
  SaveChanges,
  deleteshow,
  handleDashbordClose,
  EditItem,
  selectedProduct,
  setSelectedProduct,
  setDashboardGet
}) => {

  const {product,refresh, setRefresh}=useContext(Mywebcontextcall);

  const baseURI = `https://student-project-tau.vercel.app/api/product/deleteproduct/${selectedProduct}`;
  const baseURIget = `https://student-project-tau.vercel.app/api/product/getallproduct`;


  const handleclick = async () => {
    try {

      await axios.delete(baseURI);
      
      console.log("Delete request successful");

      const response = await axios.get(baseURIget);
      console.log("Fetched updated data");

      setDashboardGet(response.data);

      setSelectedProduct(null);
      handleDashbordClose();
    } catch (error) {
      console.error("An error occurred:", error.response?.data || error.message);

    }
    finally{
      setRefresh(true);
    }
  };



  return (
    <Modal show={deleteshow} onHide={handleDashbordClose}>
      <Modal.Header closeButton>
        <Modal.Title>{EditItem}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='text-center'>{Title}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleDashbordClose}>
          {Close}
        </Button>
        <Button variant="danger" onClick={handleclick}>
          {SaveChanges}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModel;