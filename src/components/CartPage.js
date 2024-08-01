import React, { useContext, useEffect, useState } from 'react'
import Mywebcontextcall from './mywebcontext/Mywebcontext';

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const { selectData, product, cartkey } = useContext(Mywebcontextcall)
const [cartQuantity, setCartQuantity] = useState([])
  // const array = [
  //   { id: 1, quantity: 5 },
  //   { id: 2, quantity: 12 },
  //   { id: 3, quantity: 8 },
  //   { id: 4, quantity: 15 },
  //   { id: 5, quantity: 3 },
  //   { id: 6, quantity: 20 },
  //   { id: 7, quantity: 7 },
  //   { id: 8, quantity: 10 },
  //   { id: 9, quantity: 6 },
  //   { id: 10, quantity: 18 }
  // ];

  // const array2 = [
  //   { id: 1, quantity: 5 },
  //   { id: 2, quantity: 12 },
  //   { id: 8, quantity: 10 },
  //   { id: 9, quantity: 6 },
  //   { id: 10, quantity: 18 }
  // ];

  // // Create a set of ids from array2 for faster lookup
  // const array2Ids = new Set(array2.map(item => item.id));

  // // Filter array to keep only objects with ids present in array2
  // const result = array.filter(item => array2Ids.has(item.id));

  // console.log(result);


  useEffect(() => {
    const cartItems = localStorage.getItem('cartItems')|| "[]";
    const storedItems = JSON.parse(cartItems)
    setCartQuantity(storedItems)
    // Create a set of ids from array2 for faster lookup
    const productIds = new Set(storedItems?.map(item => item._id));
    // Filter array to keep only objects with ids present in array2
    const result = product?.data?.filter(item => productIds?.has(item._id));
    console.log(result,"result",productIds,"ff",localStorage.getItem('cartItems'))
    setCartItems(result);
  }, []);


// // Create a map of ids to age from array2 for faster lookup
// const array2Map = new Map(array2.map(item => [item.id, item.age]));

// // Filter array and add age from array2
// const result = array
//   .filter(item => array2Map.has(item.id))
//   .map(item => ({ ...item, age: array2Map.get(item.id) }));







  return (
    <div>
      <main>
        <section className="my-cart-section">
          <div className="container">
            <div className="row">
              <div className="pr-title mb-4">
                <h3 className="mt-4 store-title text-primary">My Cart</h3>
                <div className="payment-step">
                  <a href="CartPage" className="btn btn-mycart active">1 - My Cart</a>
                  <a href="Checkout" className="btn btn-mycart">2 - Customer</a>
                  <a href="Mypayment" className="btn btn-mycart">3 - Payment</a>
                </div>
              </div>
            </div>

            {cartItems?.map((item, index) =>{
              const quantity=cartQuantity?.find((data)=>data?._id===item?._id).quantity
              return(
              <div className="table-responsive my-cart" key={index}>
                <table className="table table-cards align-items-center">
                  <tbody className="list">
                    <tr className="alert">
                      <td>
                        {/* You might want to fetch the image from your product data */}
                        <img alt="Image placeholder" src={item?.gallery?.[0]?.url} className="" style={{ width: 66 }} />
                      </td>
                      <td scope="row">
                        <div className="media align-items-center">
                          <a className="text-dark c-list-title mb-0"> {item?.title}</a>
                        </div>
                      </td>
                      <td className="price">
                        <div className="media-body pl-3">
                          <span className="font-weight-bold mb-2 t-gray p-title">Quantity</span>
                          <div className="lh-100">
                            <span className="t-black15 p-price font-weight-bold mb-0">{quantity}</span>
                          </div>
                        </div>
                      </td>
                      {/* Add more td elements here for other item details */}
                      <td className="text-right">
                        <div className="actions ml-3">
                          <a href="#" className="action-item mr-2" data-dismiss="alert">
                            <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M17.7071 1.70711C18.0976 1.31658 18.0976 0.683417 17.7071 0.292893C17.3166 -0.0976311 16.6834 -0.0976311 16.2929 0.292893L9 7.58579L1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292894 0.292893C-0.0976295 0.683417 -0.0976295 1.31658 0.292894 1.70711L7.58579 9L0.292893 16.2929C-0.0976311 16.6834 -0.0976311 17.3166 0.292893 17.7071C0.683418 18.0976 1.31658 18.0976 1.70711 17.7071L9 10.4142L16.2929 17.7071C16.6834 18.0976 17.3166 18.0976 17.7071 17.7071C18.0976 17.3166 18.0976 16.6834 17.7071 16.2929L10.4142 9L17.7071 1.70711Z" fill="#AFAFAF" />
                            </svg>
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            
            )})}

            {/* Cart information */}
            <div className="card mt-2 bg-primary">
              {/* ... (rest of the code remains the same) ... */}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default CartPage