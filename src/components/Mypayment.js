import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Mypayment() {

  const [mypayment, setMypayment] = useState()

  console.log(mypayment, "mypaymentmypaymentmypaymentmypayment");

  const baseURI = 'https://fakestoreapi.com/products'

  useEffect(() => {
    axios.get(`${baseURI}`).then((response) => {
      setMypayment(response.data)
    })
  }, [])



  return (

    <div>

      <main>
        <section className="my-cart-section my-payment-box">
          <div className="container">
            {/* Shopping cart table */}
            <div className="row">
              <div className="pr-title mb-4">
                <h3 className=" mt-4 store-title text-primary">My Cart</h3>
                <div className="payment-step">
                  <a href="CartPage" className="btn btn-mycart">1 - My Cart</a>
                  <a href="Checkout" className="btn btn-mycart">2 - Customer</a>
                  <a href="Mypayment" className="btn btn-mycart active">3 - Payment</a>
                </div>
              </div>
            </div>
            <div className="row row-grid">
              <div className="col-xl-8 col-lg-7">
                <form>
                  <div className="card">
                    <div className="box-space box-primary">
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                          <div className="custom-control custom-checkbox">
                            <input type="radio" className="custom-control-input" name="radio-payment" id="radio-payment-cash" />
                            <label className="custom-control-label h6 mb-0 lh-180" htmlFor="radio-payment-cash">Cash On Delivery </label>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <p className="text-muted mt-2 mb-0 text-12">Cash on delivery is a type of transaction in which payment for a good is made at the time of delivery.</p>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-12 text-right">
                          <svg width={36} height={32} viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 3.36842C0 1.50809 1.61178 0 3.6 0H10.8H19.8H21.6H32.4C33.3941 0 34.2 0.754047 34.2 1.68421C34.2 2.61437 33.3941 3.36842 32.4 3.36842H30.6356L32.2299 10.8267C32.5193 11.0399 32.7757 11.296 32.9872 11.5891L35.3839 14.9114C35.7854 15.468 36 16.1243 36 16.7959V25.2632C36 27.1235 34.3882 28.6316 32.4 28.6316H31.7937C30.7826 30.6231 28.6132 32 26.1 32C23.5868 32 21.4174 30.6231 20.4063 28.6316H19.8H13.7937C12.7826 30.6231 10.6132 32 8.1 32C5.49228 32 3.25462 30.5176 2.2971 28.4042C0.952882 27.9157 0 26.6936 0 25.2632V3.36842ZM21.6 3.36842H26.9997C26.9998 3.47734 27.0113 3.58785 27.035 3.69872L28.4044 10.1053H21.6V3.36842ZM18 3.36842H10.8L10.7994 3.36842H3.6V15.1579H18V3.36842ZM18 18.5263H3.6V21.9798C4.74346 20.888 6.33718 20.2105 8.1 20.2105C11.2738 20.2105 13.8995 22.4065 14.3362 25.2632H18V18.5263ZM21.6 21.9798C22.7435 20.888 24.3372 20.2105 26.1 20.2105C29.2738 20.2105 31.8995 22.4065 32.3362 25.2632H32.4V16.7959L30.0033 13.4737H21.6V21.9798ZM23.4 26.1053C23.4 24.71 24.6088 23.5789 26.1 23.5789C27.5912 23.5789 28.8 24.71 28.8 26.1053C28.8 27.5005 27.5912 28.6316 26.1 28.6316C24.6088 28.6316 23.4 27.5005 23.4 26.1053ZM8.1 23.5789C6.60883 23.5789 5.4 24.71 5.4 26.1053C5.4 27.5005 6.60883 28.6316 8.1 28.6316C9.59117 28.6316 10.8 27.5005 10.8 26.1053C10.8 24.71 9.59117 23.5789 8.1 23.5789Z" className="svg-color" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="box-space">
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                          <div className="custom-control custom-checkbox">
                            <input type="radio" className="custom-control-input" name="radio-payment" id="radio-payment-card" />
                            <label className="custom-control-label h6 mb-0 lh-180" htmlFor="radio-payment-card">Credit Card (Strip)</label>
                          </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12">
                          <p className="text-muted mt-2 mb-0 text-12">Safe money transfer using your bank account. We support Mastercard, Visa, Maestro and Skrill.</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 text-right">
                          <img alt="Image placeholder" src="./assets/img/mastercard.png" width={40} className="mr-2" />
                          <img alt="Image placeholder" src="./assets/img/visa.png" width={40} className="mr-2" />
                          <img alt="Image placeholder" src="./assets/img/skrill.png" width={40} />
                        </div>
                      </div>
                      <div className="row align-items-center mt-3">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="form-group">
                            <label className="form-control-label t-gray font-600">Name on card</label>
                            <input className="form-control" type="text" placeholder="Rafał" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="form-group">
                            <label className="form-control-label t-gray font-600">Last Name on card</label>
                            <input className="form-control" type="text" placeholder="Enter Your Last Name" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="box-space">
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                          <div className="custom-control custom-checkbox">
                            <input type="radio" className="custom-control-input" name="radio-payment" id="radio-payment-Paypal" />
                            <label className="custom-control-label h6 mb-0 lh-180" htmlFor="radio-payment-Paypal">Paypal</label>
                          </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12">
                          <p className="text-muted mt-2 mb-0 text-12">Pay your order using the most known and secure platform for online money transfers. You will be redirected to PayPal to finish complete your purchase. </p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 text-right">
                          <img alt="Image placeholder" src="./assets/img/paypa.png" width={77} className="ml-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="box-space">
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                          <div className="custom-control custom-checkbox">
                            <input type="radio" className="custom-control-input" name="radio-payment" id="radio-payment-Whatsapp" />
                            <label className="custom-control-label h6 mb-0 lh-180" htmlFor="radio-payment-Whatsapp">Whatsapp</label>
                          </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12">
                          <p className="text-muted mt-2 mb-0 text-12">Click to chat. The click to chat feature lets customers click an URL in order to directly start a chat with another person or business via WhatsApp. ... QR code. As you know, having to add a phone number to
                            your contacts in order to start up a WhatsApp message can take a little while. ....</p>
                        </div>
                        <div className="col-md-3 col-md-3 col-sm-12 text-right">
                          <img alt="Image placeholder" src="./assets/img/whatsapp-logo.png" width={130} className="ml-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="box-space">
                      <div className="row align-items-center">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="form-control-label t-gray font-600">Name on card</label>
                            <input className="form-control input-primary" type="text" placeholder="Enter phone Number" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="box-space box-primary">
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                          <div className="custom-control custom-checkbox">
                            <input type="radio" className="custom-control-input" name="radio-payment" id="radio-payment-Direct" />
                            <label className="custom-control-label h6 mb-0 lh-180" htmlFor="radio-payment-Direct">Direct Bank Transfer</label>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                          <p className="text-muted mt-2 mb-0 text-12">Bank: UNITED COMMUNITY BANK Bank Account Number: 67265159299
                          </p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                          <p className="text-muted mt-2 mb-0 text-12">Routing Number: 71119865 IBAN: IN97350997896859414902082924</p>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-12 text-right">
                          <img alt="Image placeholder" src="./assets/img/direct-icon.png" width={36} className="ml-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-right">
                    <a href="shop-landing.html" className="btn btn-link text-primary text-sm text-dark font-weight-bold">Return to shop</a>
                    <a href="#" className="btn btn-sm btn-primary rounded-pill btn-icon shadow hover-shadow-lg hover-translate-y-n3">
                      <span className="btn-inner--text">Proceed to payment </span>
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
                      <div className="row">

                        {
                          mypayment?.slice(10, 13).map((item, key) => {
                            return (
                              <>
                                <div className="col-9 py-2" key={key} >
                                  <div className="media align-items-center">
                                    <img alt="Image placeholder" className="mr-2" src={item.image} style={{ width: 42 }} />
                                    <div className="media-body">
                                      <div className="sum-title lh-100">
                                        <small className="font-weight-bold mb-0" >{item.title.slice(0, 25)}</small>
                                      </div>
                                      <small className="text-muted s-dim">1 x ₹129.00 + ₹6.45 (SGST 5%) </small>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-3 text-right lh-100">
                                  <small className="text-dark">Price</small>
                                  <p className="text-dark s-rate t-black15">₹{item.price}</p>
                                </div>
                              </>
                            )
                          })
                        }


                      </div>

                      <div className="row mt-2 pt-2 border-top">
                        <div className="col-7 text-right">
                          <small className="font-weight-bold">Subtotal (Before Tax):</small>
                        </div>
                        <div className="col-5 text-right">
                          <span className="text-sm font-weight-bold t-black15">₹12.90</span>
                        </div>
                      </div>

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


                      <div className="row mt-2 pt-2 border-top">
                        <div className="col-7 text-right">
                          <small className="text-uppercase font-weight-bold ">Total:</small>
                        </div>
                        <div className="col-5 text-right">
                          <span className="text-sm font-weight-bold s-p-total">₹830.50</span>
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

    </div>

  )
}

export default Mypayment