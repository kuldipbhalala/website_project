import React from 'react'
import { Link } from 'react-router-dom'

function Footerpage() {
  return (
    <div>
      <footer id="footer-main">
        <div className="container">
          <div className="row pt-md top-footer delimiter-top">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <a href="#">
                <img src="./assets/img/2image.jpg" alt="Footer logo" style={{ width: "240px" }} />
              </a>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6 ml-lg-auto mb-5 mb-lg-0">
              <h6 className="heading mb-3 text-primary" style={{ cursor: 'pointer' }}>
                <Link className="nav-link" id='navbar' to="/">My Store</Link></h6>
              {/* <ul className="list-unstyled f-list">
                <li><a className="t-gray" href="#">Home Pages</a></li>
                <li><a className="t-gray" href="#">Pricing</a></li>
                <li><a className="t-gray" href="#">Contact Us</a></li>
                <li><a className="t-gray" href="#">Team</a></li>
              </ul> */}
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6 mb-5 mb-lg-0">
              <h6 className="heading text-primary mb-3" style={{ cursor: 'pointer' }}> <Link className="nav-link" id='navbar' to="/dashboard">Dashboard</Link></h6>
              {/* <ul className="list-unstyled f-list">
                <li><a className="t-gray" href="#">Blog</a></li>
                <li><a className="t-gray" href="#">Help Center</a></li>
                <li><a className="t-gray" href="#">Sales Tools Catalog</a></li>
                <li><a className="t-gray" href="#">Academy</a></li>
              </ul> */}
            </div>
            {/* <div className="col-lg-2 col-md-3 col-sm-6 col-6 mb-5 mb-lg-0">
              <h6 className="heading text-primary mb-3">Company</h6>
              <ul className="list-unstyled f-list">
                <li><a className="t-gray" href="#">Terms and Policy</a></li>
                <li><a className="t-gray" href="#">About us</a></li>
                <li><a className="t-gray" href="#">Support</a></li>
                <li><a className="t-gray" href="#">About us</a></li>
              </ul>
            </div> */}
            {/* <div className="col-lg-2 col-md-3 col-sm-6 col-6 mb-5 mb-lg-0">
              <h6 className="heading text-primary mb-3">Company</h6>
              <ul className="list-unstyled f-list">
                <li><a className="t-gray" href="#">Terms and Policy</a></li>
                <li><a className="t-gray" href="#">About us</a></li>
                <li><a className="t-gray" href="#">Support</a></li>
                <li><a className="t-gray" href="#">About us</a></li>
              </ul>
            </div> */}
          </div>
          <div className="row align-items-center justify-content-md-between py-2 delimiter-top">
            <div className="col-md-6">
              <div className="copyright text-sm font-weight-bold text-center text-md-left">
                © 2021 My Store. All rights reserved
              </div>
            </div>
            <div className="col-md-6 footer-social">
              <ul className="nav justify-content-center justify-content-md-end mt-3 mt-md-0">
                <li className="nav-item d-flex align-items-center">
                  <p className="mb-0">Follow us on :</p>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" target="_blank">
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" target="_blank">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" target="_blank">
                    <i className="fab fa-dribbble " />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" target="_blank">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" target="_blank">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>

  )
}

export default Footerpage