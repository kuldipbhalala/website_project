import React, { useContext, useEffect, useState } from 'react';
import { ModalForm } from './ModalForm';
import DeleteModel from './DeleteModel';
import axios from 'axios';
import AddModel from './AddModel';
import Headerpage from './Header/Headerpage';
import Mywebcontextcall from './mywebcontext/Mywebcontext';

export const Dashboard = () => {
  const {product,refresh, setRefresh}=useContext(Mywebcontextcall);
  const [show, setShow] = useState(false);
  const [dashboardGet, setDashboardGet] = useState();
  const [deleteshow, setDeleteshow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [addshow, setAddshow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setSelectedProduct(null);
  };

  const handleDashbordShow = () => setDeleteshow(true);
  const handleDashbordClose = () => setDeleteshow(false);

  const handleAddShow = () => setAddshow(true);
  const handleAddClose = () => setAddshow(false);

  const baseURI = "https://student-project-tau.vercel.app/api/product/updateproduct";
  const baseURIGet = "https://student-project-tau.vercel.app/api/product/getallproduct?search=";



  useEffect(() => {
    setDashboardGet(product)
  }, [product]);

  const handleEdit = (product) => {
    
    setSelectedProduct(product);
    handleShow();
  };

  const handleSaveEdit = (editedProduct) => {
    const formData = new FormData();
    formData.append('title', editedProduct.title);
    formData.append('desc', editedProduct.desc);
    formData.append('price', editedProduct.price);


    const existingImages = editedProduct.gallery.filter(img => !img.file);
    const images = ["https://res.cloudinary.com/de8e654d7/image/upload/v1722417511/studentProject/1722417511779_12804854_5059350.jpg"]
    console.log(images, "existingImagesexistingImagesexistingImagesexistingImages")


    editedProduct.gallery.forEach((img) => {
      if (img.file) {
        formData.append(`gallery`, img.file);
      }
    });

    axios.put(`${baseURI}/${editedProduct._id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((response) => {
        handleClose();
        setRefresh(true);
      })
      .catch(error => {
        console.error('Error while making PUT request:', error.response || error.message || error);
      });
  };

  const handleAdd = () => {
    handleAddShow();

  };

  const handleDelete = (id) => {
    setSelectedProduct(id);
    handleDashbordShow();
  };

  return (
    <>
      <button className="btn btn-primary m-1 me-2" onClick={handleAdd}>New Product Add</button>

      <div className="mt-5">
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Desc</th>
                <th scope="col">Price</th>
                <th scope="col">Images</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {dashboardGet?.data?.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{item._id}</th>
                  <td>{item?.title}</td>
                  <td>{item.desc}</td>
                  <td>{item.price}</td>
                  <td className='w-10'>
                    <img alt="Image placeholder" src={item?.gallery?.[0]?.url} style={{ aspectRatio: 3 / 2, objectFit: 'contain' }} className="img-center img-fluid" />
                  </td>
                  <td>
                    <button className="btn btn-primary m-1 me-2" onClick={() => handleEdit(item)}>Edit</button>
                    <button className="btn btn-danger" onClick={() => handleDelete(item?._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ModalForm
          Title="Title"
          Description="Description"
          Price="Price"
          Close="Close"
          EditItem="Edit Item"
          Images="Images"
          SaveChanges="Save Changes"
          show={show}
          handleClose={handleClose}
          handleSave={handleSaveEdit}
          product={selectedProduct}
        />

        {selectedProduct && <DeleteModel
          Close="No"
          EditItem="Confirm Delete"
          Title="Are you sure you want to Delete ?"
          SaveChanges="Yes"
          handleDashbordClose={handleDashbordClose}
          deleteshow={deleteshow}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          setDashboardGet={setDashboardGet}
        />}

        <AddModel
          EditItem="New Product"
          Title="Title"
          Description="Description"
          Price="Price"
          Close="Close"
          Images="Images"
          SaveChanges="Save Changes"
          addshow={addshow}
          handleAddClose={handleAddClose}
        />
      </div>
    </>
  );
};