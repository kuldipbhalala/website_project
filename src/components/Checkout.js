import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Checkout() {

  const [checkout, setCheckout] = useState()

  console.log(checkout, "checkoutcheckoutcheckoutcheckout");

  const baseURI = 'https://fakestoreapi.com/products'

  useEffect(() => {
    axios.get(`${baseURI}`).then((response) => {
      setCheckout(response.data)
    })
  }, [])


  return (


    < div >
      <main>
        <section className="my-cart-section">
          <div className="container">
            {/* Shopping cart table */}
            <div className="row">
              <div className="pr-title mb-4">
                <h3 className=" mt-4 store-title text-primary">My Cart</h3>
                <div className="payment-step">
                  <a href="CartPage" className="btn btn-mycart">1 - My Cart</a>
                  <a href="Checkout" className="btn btn-mycart active">2 - Customer</a>
                  <a href="Mypayment" className="btn btn-mycart">3 - Payment</a>
                </div>
              </div>
            </div>
            <div className="row row-grid">
              <div className="col-xl-8 col-lg-7">
                <form>
                  {/* General */}
                  <div className="actions-toolbar py-2 mb-4">
                    <h5 className="mb-1 text-primary">Billing information</h5>
                    <p className="text-sm text-muted mb-0">Fill the form below so we can send you the order's invoice.</p>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-control-label">First name</label>
                        <input className="form-control" type="text" placeholder="Enter Your first name" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-control-label">Last name</label>
                        <input className="form-control" type="text" placeholder="Enter Your Last Name" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-control-label">Phone</label>
                        <input className="form-control" type="text" placeholder="48 695-456-504" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-control-label">Email</label>
                        <input className="form-control" type="text" placeholder="Enter Your Last Email Address" />
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="form-control-label">Address</label>
                        <input className="form-control" type="text" placeholder="Billing Address" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-control-label">Country</label>
                        <input className="form-control" type="text" placeholder="Billing Country" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-control-label">City</label>
                        <input className="form-control" type="text" placeholder="Billing City" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-control-label">Postal code</label>
                        <input className="form-control" type="text" placeholder="Billing Postal Code" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-control-label">Location</label>
                        <select className="form-control" data-toggle="select" title="City">
                          <option selected disabled>Select Location</option>
                          <option value={1}>Bucharest</option>
                          <option value={2}>Bacau</option>
                          <option value={3}>Cluj Napoca</option>
                          <option value={4}>Piatra Neamt</option>
                          <option value={5}>Sibiu</option>
                          <option value={6}>Timisoara</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="actions-toolbar py-2 mb-4 shop-title">
                    <div className="left-cart">
                      <h5 className="mb-1 text-primary">Shipping informations</h5>
                      <p className="text-sm text-muted mb-0">Fill the form below so we can send you the orders invoice.</p>
                    </div>
                    <a href="#" className="btn btn-sm btn-primary rounded-pill btn-icon shadow hover-shadow-lg hover-translate-y-n3">
                      <span className="btn-inner--text">Copy Address</span>
                    </a>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="form-control-label">Address</label>
                        <input className="form-control" type="text" placeholder="Shipping address" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-control-label">Country</label>
                        <input className="form-control" type="text" placeholder="Shipping Country" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-control-label">City</label>
                        <input className="form-control" type="text" placeholder="Shipping City" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-control-label">Postal code</label>
                        <input className="form-control" type="text" placeholder="Shipping Postal Code" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-right">
                    <a href="shop-landing.html" className="btn btn-link text-sm text-dark font-weight-bold">Return to shop</a>
                    <a href="#" className="btn btn-sm btn-primary rounded-pill btn-icon shadow hover-shadow-lg hover-translate-y-n3">
                      <span className="btn-inner--text">Next step</span>
                      <span className="btn-inner--icon">
                        <svg className="w-auto" height={21} viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M4 8.5C4 9.05229 4.44772 9.5 5 9.5C5.55228 9.5 6 9.05229 6 8.5V6.5H10V8.5C10 9.05229 10.4477 9.5 11 9.5C11.5523 9.5 12 9.05229 12 8.5V6.5H14V15.5C14 17.1569 12.6569 18.5 11 18.5H5C3.34315 18.5 2 17.1569 2 15.5V6.5H4V8.5ZM6 4.5H10C10 3.39543 9.10457 2.5 8 2.5C6.89543 2.5 6 3.39543 6 4.5ZM12 4.5C12 2.29086 10.2091 0.5 8 0.5C5.79086 0.5 4 2.29086 4 4.5L1 4.5C0.447715 4.5 0 4.94772 0 5.5V15.5C0 18.2614 2.23858 20.5 5 20.5H11C13.7614 20.5 16 18.2614 16 15.5V5.5C16 4.94772 15.5523 4.5 15 4.5H12Z" fill="white" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </form>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div data-toggle="sticky" data-sticky-offset={30}>
                  <div className="card" id="card-summary">
                    <div className="card-header b-0 py-3">
                      <div className="row align-items-center">
                        <h3 className="ml-3 store-title-medium text-primary">Summary</h3>
                      </div>
                    </div>
                    <div className="card-body">

                      {
                        checkout?.slice(10, 13).map((item, key) => {
                          return (

                            <div className="row">
                              <div className="col-9">
                                <div className="media align-items-center">
                                  <img alt="Image placeholder" className="mr-2" src={item.image} style={{ width: 42 }} />
                                  <div className="media-body">
                                    <div className="sum-title lh-100">
                                      <small className="font-weight-bold mb-0">{item.title.slice(0, 25)}</small>
                                    </div>
                                    <small className="text-muted s-dim">1 x ₹129.00 + ₹6.45 (SGST 5%) </small>
                                  </div>
                                </div>
                              </div>

                              <div className="col-3 text-right lh-100">
                                <small className="text-dark">Price</small>
                                <p className="text-dark s-rate t-black15"> ₹{item.price}</p>
                              </div>

                            </div>
                          )
                        })
                      }




                      <div className="row mt-2 pt-2 border-top">
                        <div className="col-7 text-right">
                          <small className="font-weight-bold">Subtotal (Before Tax):</small>
                        </div>
                        <div className="col-5 text-right">
                          <span className="text-sm font-weight-bold t-black15">₹12.90</span>
                        </div>
                      </div>
                      {/* Shipping */}
                      <div className="row mt-2 pt-2 border-top">
                        <div className="col-7 text-right">
                          <div className="media align-items-center">
                            <div className="media-body">
                              <div className="text-limit lh-100">
                                <small className="font-weight-bold mb-0">SGST</small>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-5 text-right">
                          <span className="text-sm font-weight-bold t-black15">₹6.85</span>
                        </div>
                      </div>
                      {/* Subtotal */}
                      <div className="row mt-2 pt-2 border-top">
                        <div className="col-7 text-right">
                          <small className="text-uppercase font-weight-bold ">Total:</small>
                        </div>
                        <div className="col-5 text-right">
                          <span className="text-sm font-weight-bold s-p-total">₹12.90</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div >

  )
}

export default Checkout