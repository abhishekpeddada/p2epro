import React from "react";
import './footer.css'

function Footer() {
  return (
<div className="my-5">
  <footer className="text-center text-lg-start footer">
    <div className="container">
      <section>
        <div className="row">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
          <img
            src="https://i.ibb.co/jTtVjwB/logo.png"
            alt="logo"
            border="0"
          />
            <p>
              P2e Pro NFT is a shared Liquid NFT market smart contract
            </p>
            <h4>Language</h4>
            <select name="languages" id="languages" className="lang">
                <option value="english">English</option>
                <option value="french">French</option>
                <option value="spanish">Spanish</option>
            </select>
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Market Place</h6>
            <p>
              <a>Profile</a>
            </p>
            <p>
              <a>Market Place</a>
            </p>
            <p>
              <a>Creators</a>
            </p>
            <p>
              <a>Activity</a>
            </p>
            <p>
              <a>Collections</a>
            </p>
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Company</h6>
            <p>Upload</p>
            <p>Connect Wallet</p>
            <p>Our Blog</p>
            <p>Item Details</p>
            <p>Contact US</p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Join Newsletter</h6>
            <div className="search-bar">
          <input
            type="text"
            placeholder="your mail"
            className="search-input"
          />
          <button className="subscribe-button">Subscribe</button>
        </div>
  <div className="social-icons">
  <a href="#"  title="facebook"> 
  <i class="fa-brands fa-github"></i>
  </a>
  <a href="#" title="twitter"> 
  <i class="fa-brands fa-instagram"></i>
  </a>
  <a href="#" title="instagram">  
  <i class="fa-brands fa-twitter"></i>
  </a>
  <a href="#" title="youtube">
  <i class="fa-brands fa-youtube"></i>
  </a>
  <a href="#" title="linkedin">
  <i class="fa-brands fa-discord"></i>
  </a>
</div>
          </div>
        </div>
      </section>
    </div>
  </footer>
</div>
  );
}

export default Footer;