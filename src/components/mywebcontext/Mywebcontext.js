import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

const Mywebcontextcall = createContext();


export const Mywebcontext = ({ children }) => {

  const [product, setProduct] = useState()
  const [selectData, setSelectData] = useState()
  const [refresh, setRefresh] = useState(true);


  const baseURI = "https://student-project-tau.vercel.app/api/product"


  const cartkey = async(key) => {
    const productdata =await axios.get(`${baseURI}/singleproduct/${key}`)
    setSelectData(productdata?.data?.data)

  }

  useEffect(() => {
    refresh && axios.get(`${baseURI}/getallproduct?search=`).then((response) => {
      setProduct(response.data);
      setRefresh(false)
    });
  }, [refresh]);





  return (
    <div>
      <Mywebcontextcall.Provider value={{ product, cartkey, selectData, setProduct, refresh, setRefresh }}>
        {children}
      </Mywebcontextcall.Provider>
    </div>
  )
}

export default Mywebcontextcall