import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

const Mywebcontextcall = createContext();


export const Mywebcontext = ({ children }) => {
  const [searchData, setSearchData] = useState("")
  const [cartItems, setCartItems] = useState([]);
  const [product, setProduct] = useState()
  const [selectData, setSelectData] = useState()
  const [refresh, setRefresh] = useState(true);


  const baseURI = "https://student-project-tau.vercel.app/api/product"


  const cartkey = async (key) => {
    const productdata = await axios.get(`${baseURI}/singleproduct/${key}`)
    setSelectData(productdata?.data?.data)
  }

  useEffect(() => {
    refresh && axios.get(`${baseURI}/getallproduct?search=${searchData}`).then((response) => {
      setProduct(response.data);
      setRefresh(false)
    });
  }, [refresh]);


  useEffect(() => {
    const cartItems = localStorage.getItem('cartItems') || "[]";
    const storedItems = JSON.parse(cartItems);
    setCartItems(storedItems);
  }, []);



  return (
    <div>
      <Mywebcontextcall.Provider value={{ product, cartkey, selectData, setProduct, refresh, setRefresh,cartItems, setCartItems,searchData, setSearchData}}>
        {children}
      </Mywebcontextcall.Provider>
    </div>
  )
}

export default Mywebcontextcall