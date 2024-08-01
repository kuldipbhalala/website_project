import axios from 'axios'
import React, { useContext } from 'react'
import Star from '../Star';
import Mywebcontextcall from '../mywebcontext/Mywebcontext';
import { useNavigate } from 'react-router-dom';



function Home({ stars, reviews }) {
  const navigate = useNavigate();


  const { product, cartkey } = useContext(Mywebcontextcall)

  const handleclick = (key) => {
    cartkey(key)
    navigate("/Productpage");
  }



  return (

    <div>
      <div>
        <section className="slice slice-xl bg-cover bg-size--cover home-banner" data-offset-top="#header-main" style={{ backgroundImage: 'url(./assets/img/home-banner1.png)', backgroundPosition: 'center center' }}>
          <span className="mask bg-dark opacity-3" />
          <div className="container py-6">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="h1 text-white store-title">Home Accessories</h2>
                <p className="lead text-white mt-4 store-dcs">There is only that moment and the incredible certainty that <br />
                  everything under
                  the sun has been written by one hand only.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="store-promotions mt-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="mb-4">
                  <div className="icon text-primary">
                    <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0.0682266 19.3906L1.10038 25.4483C1.45754 27.5446 3.14915 29.1386 5.23101 29.3407L11.8012 29.9786C13.1792 30.1124 14.5439 29.6133 15.5227 28.6176L28.6411 15.2721C30.453 13.4289 30.453 10.4404 28.6411 8.5972L21.549 1.38242C19.7372 -0.460803 16.7996 -0.46081 14.9877 1.38242L1.35896 15.247C0.291959 16.3325 -0.189486 17.878 0.0682266 19.3906ZM5.52487 26.2084C4.83091 26.141 4.26704 25.6097 4.14799 24.9109L3.11584 18.8532C3.02993 18.349 3.19042 17.8338 3.54609 17.472L17.1748 3.60739C17.7788 2.99298 18.758 2.99298 19.3619 3.60739L26.454 10.8222C27.0579 11.4366 27.0579 12.4327 26.454 13.0471L13.3356 26.3926C13.0093 26.7245 12.5544 26.8909 12.0951 26.8463L5.52487 26.2084ZM10.1491 22.5544C10.7897 21.9027 10.7897 20.8461 10.1491 20.1945C9.5085 19.5428 8.4699 19.5428 7.82931 20.1945C7.18871 20.8461 7.18871 21.9027 7.82931 22.5544C8.4699 23.2061 9.5085 23.2061 10.1491 22.5544Z" className="svg-color" />
                    </svg>
                  </div>
                  <strong className="text-primary">Many promotions</strong>
                  <p className=" mt-2 mb-0 t-gray">From pixel-perfect icons and scalable vector graphics, to full user flows</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="mb-4">
                  <div className="icon text-primary">
                    <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M6.00226 12C4.00276 12 2.56312 10.08 3.12298 8.16L4.62761 3H9.00151V9C9.00151 10.6569 7.6587 12 6.00226 12ZM10.5011 12.9687C9.40199 14.2144 7.79385 15 6.00226 15C6.00223 15 6.00219 15 6.00215 15V21H15V15C13.2084 15 11.6003 14.2144 10.5011 12.9687ZM6.00215 24V27H15L15 24H6.00215ZM17.9992 27H23.9976V15C22.2061 15 20.598 14.2143 19.4989 12.9687C19.07 13.4547 18.5637 13.8707 17.9993 14.1973L17.9992 27ZM26.9969 14.2006C29.2831 12.8768 30.5664 10.0984 29.7563 7.32L28.1231 1.71905C27.826 0.700356 26.8925 0 25.8316 0H19.4989H10.5011H4.1684C3.10753 0 2.17395 0.700351 1.87691 1.71905L0.243707 7.32C-0.566425 10.0983 0.716807 12.8766 3.00291 14.2005V27C3.00291 28.6569 4.34572 30 6.00215 30H23.9976C25.6541 30 26.9969 28.6569 26.9969 27V14.2006ZM20.9985 9L20.9985 3H25.3724L26.877 8.16C27.4369 10.08 25.9972 12 23.9977 12C22.3413 12 20.9985 10.6569 20.9985 9ZM12.0008 3H17.9992V9C17.9992 10.6569 16.6564 12 15 12C13.3436 12 12.0008 10.6569 12.0008 9L12.0008 3Z" className="svg-color" />
                    </svg>
                  </div>
                  <strong className="text-primary">700+ Components</strong>
                  <p className=" mt-2 mb-0 t-gray">Nicely customized components that can be reused anytime and anywhere in your
                    project.</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="mb-4">
                  <div className="icon text-primary">
                    <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M15 0C6.71575 8.59049e-06 0 6.71573 0 15C0 23.2843 6.71574 30 15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0ZM15 3C21.6274 3 27 8.37258 27 15C27 21.6274 21.6274 27 15 27C8.37259 27 3 21.6274 3 15C3 8.37259 8.3726 3.00001 15 3ZM10.5 8.24998C9.25736 8.24998 8.25 9.25734 8.25 10.5C8.25 11.7426 9.25736 12.75 10.5 12.75C11.7426 12.75 12.75 11.7426 12.75 10.5C12.75 9.25734 11.7426 8.24998 10.5 8.24998ZM20.5607 11.5606L11.5607 20.5606C10.9749 21.1464 10.0251 21.1464 9.43935 20.5606C8.85356 19.9749 8.85356 19.0251 9.43935 18.4393L18.4394 9.43932C19.0251 8.85353 19.9749 8.85353 20.5607 9.43932C21.1465 10.0251 21.1465 10.9749 20.5607 11.5606ZM17.25 19.5C17.25 18.2573 18.2574 17.25 19.5 17.25C20.7427 17.25 21.75 18.2573 21.75 19.5C21.75 20.7426 20.7427 21.75 19.5 21.75C18.2574 21.75 17.25 20.7426 17.25 19.5Z" className="svg-color" />
                    </svg>
                  </div>
                  <strong className="text-primary">700+ Components</strong>
                  <p className=" mt-2 mb-0 t-gray">Nicely customized components that can be reused anytime and anywhere in your
                    project.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Products */}

        <section className="bestsellers-section">
          <div className="container">
            <div className="row">
              <div className="pr-title mb-4">
                <h3 className=" mt-4 store-title text-primary">Bestsellers</h3>
                <div className="p-tablist">
                  {/* <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="shopping-tab" data-toggle="tab" href="#p1" role="tab" aria-controls="start-shopping" aria-selected="true">Start shopping</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="electronic-tab" data-toggle="tab" href="#p2" role="tab" aria-controls="Electronic" aria-selected="true">Nature</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="software-tab" data-toggle="tab" href="#p3" role="tab" aria-controls="Software" aria-selected="true">Anime</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="notebooks-tab" data-toggle="tab" href="#p4" role="tab" aria-controls="Notebooks" aria-selected="true">Movie</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="phone-tab" data-toggle="tab" href="#p5" role="tab" aria-controls="Phones" aria-selected="true">Planets</a>
                    </li>
                  </ul> */}
                </div>
              </div>

              <div className="tab-content bestsellers-tabs" id="myTabContent">
                <div className="tab-pane fade show active" id="p1" role="tabpanel" aria-labelledby="shopping-tab">
                  <div className="col-lg-12">


                    <div className="row">

                      {
                        product?.data.slice(0, 8)?.map((items, key) => (

                          <div className="col-xl-3 col-lg-4 col-sm-6 product-box" key={key}>
                            <div className="card card-product">
                              <div className="card-image">
                                {

                                  <a href="#">
                                    <img alt="Image placeholder" src={items?.gallery?.[0]?.url} style={{ aspectRatio: 3 / 2, objectFit: 'contain', }} className="img-center img-fluid" />
                                  </a>

                                }
                              </div>
                              <div className="card-body pt-0">

                                {/* <span className="static-rating static-rating-sm">
                                  <Star stars={items.rating.rate} reviews={items.rating.rate} />
                                </span> */}


                                <h6 className='mt-3'><a className="t-black13" href="#">{items?.title?.slice(0, 20)}</a></h6>
                                <p className="text-sm">
                                  <span className="td-gray">desc:</span> {items?.desc}
                                </p>

                                <div className="product-price mt-3">
                                  <span className="card-price t-black15">₹{items?.price}</span>
                                  <button onClick={() => handleclick(items?._id)} type="button" className="action-item pcart-icon bg-primary" data-toggle="tooltip" data-original-title="Wishlist">
                                    <svg className="w-auto" height={21} viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path fillRule="evenodd" clipRule="evenodd" d="M4 8.5C4 9.05229 4.44772 9.5 5 9.5C5.55228 9.5 6 9.05229 6 8.5V6.5H10V8.5C10 9.05229 10.4477 9.5 11 9.5C11.5523 9.5 12 9.05229 12 8.5V6.5H14V15.5C14 17.1569 12.6569 18.5 11 18.5H5C3.34315 18.5 2 17.1569 2 15.5V6.5H4V8.5ZM6 4.5H10C10 3.39543 9.10457 2.5 8 2.5C6.89543 2.5 6 3.39543 6 4.5ZM12 4.5C12 2.29086 10.2091 0.5 8 0.5C5.79086 0.5 4 2.29086 4 4.5L1 4.5C0.447715 4.5 0 4.94772 0 5.5V15.5C0 18.2614 2.23858 20.5 5 20.5H11C13.7614 20.5 16 18.2614 16 15.5V5.5C16 4.94772 15.5523 4.5 15 4.5H12Z" fill="white" />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                              <div className="actions card-product-actions" data-animation-in="slideInLeft" data-animation-out="slideOutLeft">
                                <button type="button" className="action-item wishlist-icon bg-light-gray" data-toggle="tooltip" data-original-title="Wishlist">
                                  <svg width={12} height={11} viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.70646 10.427L6.25603 9.4384L6.81937 10.4179C6.4792 10.6451 6.04978 10.6486 5.70646 10.427ZM5.44985 2.5283C5.03654 2.22579 4.49658 1.94781 3.90781 1.94781C2.55758 1.94781 1.76506 3.01789 2.02923 4.48669C2.48153 7.00141 6.25603 9.4384 6.25603 9.4384C5.70646 10.427 5.70646 10.427 5.70646 10.427L5.70433 10.4256L5.70081 10.4233L5.68972 10.4161C5.68055 10.41 5.66786 10.4017 5.65186 10.391C5.61989 10.3698 5.57466 10.3394 5.51794 10.3004C5.40458 10.2225 5.24483 10.11 5.05285 9.96756C4.67036 9.6838 4.15267 9.27581 3.61645 8.78064C3.08325 8.28827 2.51135 7.69106 2.03439 7.02601C1.56413 6.37028 1.13673 5.58056 0.979433 4.70597C0.799952 3.70807 0.9613 2.71237 1.52714 1.94786C2.09662 1.17843 2.96361 0.79541 3.90781 0.79541C4.88287 0.79541 5.69338 1.29035 6.19621 1.68542C6.21646 1.70133 6.2364 1.71723 6.25603 1.7331C6.27567 1.71723 6.29561 1.70133 6.31586 1.68542C6.81869 1.29035 7.6292 0.79541 8.60426 0.79541C10.7136 0.79541 11.9304 2.90127 11.5234 4.75244C11.3367 5.60123 10.9043 6.3742 10.4331 7.02312C9.95537 7.68106 9.39076 8.27536 8.86539 8.76773C8.33737 9.26259 7.83062 9.67154 7.4567 9.95648C7.26908 10.0994 7.11325 10.2125 7.00278 10.2908C6.94751 10.3299 6.90347 10.3605 6.87237 10.3819C6.86449 10.3873 6.85744 10.3921 6.85124 10.3964C6.8452 10.4005 6.83997 10.404 6.83558 10.407L6.82483 10.4143L6.82143 10.4165L6.81937 10.4179C6.81937 10.4179 6.81937 10.4179 6.25603 9.4384C6.25603 9.4384 9.93416 6.98166 10.4828 4.48669C10.747 3.28541 9.95448 1.94781 8.60426 1.94781C8.01549 1.94781 7.47552 2.22579 7.06222 2.5283C6.5689 2.88938 6.25603 3.28541 6.25603 3.28541C6.25603 3.28541 5.94317 2.88938 5.44985 2.5283Z" className="svg-color" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>

                        ))
                      }

                    </div>

                  </div>
                </div>


              </div>




            </div>
          </div>
          <div className="row justify-content-center">
            <a href="#" className="btn btn-sm btn-primary rounded-pill btn-icon shadow hover-shadow-lg hover-translate-y-n3">
              <span className="btn-inner--text">Show more products</span>
              <span className="btn-inner--icon">
                <svg className="w-auto" height={21} viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4 8.5C4 9.05229 4.44772 9.5 5 9.5C5.55228 9.5 6 9.05229 6 8.5V6.5H10V8.5C10 9.05229 10.4477 9.5 11 9.5C11.5523 9.5 12 9.05229 12 8.5V6.5H14V15.5C14 17.1569 12.6569 18.5 11 18.5H5C3.34315 18.5 2 17.1569 2 15.5V6.5H4V8.5ZM6 4.5H10C10 3.39543 9.10457 2.5 8 2.5C6.89543 2.5 6 3.39543 6 4.5ZM12 4.5C12 2.29086 10.2091 0.5 8 0.5C5.79086 0.5 4 2.29086 4 4.5L1 4.5C0.447715 4.5 0 4.94772 0 5.5V15.5C0 18.2614 2.23858 20.5 5 20.5H11C13.7614 20.5 16 18.2614 16 15.5V5.5C16 4.94772 15.5523 4.5 15 4.5H12Z" fill="white" />
                </svg>
              </span>
            </a>
          </div>
        </section></div>
      <section className="slice slice-sm bg-cover bg-size--cove section-space" style={{ backgroundImage: 'url("./assets/img/pexels-cottonbro.png")', backgroundPosition: 'center center', backgroundSize: 'cover' }}>
        <div className="container py-6">
          <div className="row justify-content-center">
            <div className="col-sm-12 col-lg-12 col-xl-12 text-center">
              <div className="mb-5">
                <h1 className="text-white store-title">Always on your time <br /> and timezone</h1>
                <p className="lead text-white mt-2 store-dcs">There is only that moment and the incredible certainty that <br />
                  everything
                  under the sun has been written by one hand only.</p>
              </div>
              <form>
                <div className="form-group mb-0 form-subscribe">
                  <div className="input-group input-group-lg input-group-merge">
                    <input type="email" className="form-control bg-white form-control-flush rounded-pill" name="email" placeholder="Enter your email address" aria-label="Enter your email address" />
                    <div className="input-group-append ml-3">
                      <a href="#" className="btn btn-primary rounded-pill hover-translate-y-n3 btn-icon mr-sm-4 scroll-me">
                        <span className="btn-inner--text">Subscribe</span>
                        <span className="far fa-paper-plane" />
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>


    </div>


  )
}

export default Home