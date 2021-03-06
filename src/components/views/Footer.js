import React from 'react';

export default () => {
  return(
    <footer className="section footer-classic context-dark bg-image">
        <div className="container">
          <div className="row row-30 footer-row">
            <div className="col-md-4 col-xl-5">
              <div className="pr-xl-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p className="rights"><span>©  </span><span className="copyright-year">2018</span><span> </span><span>. </span><span>All Rights Reserved.</span></p>
              </div>
            </div>
            <div className="col-md-4">
              <h5>Contacts</h5>
              <dl className="contact-list">
                <dt>Address:</dt>
                <dd>Kolkata, West Bengal, India</dd>
              </dl>
              <dl className="contact-list">
                <dt>email:</dt>
                <dd><a href="mailto:#">info@example.com</a></dd>
              </dl>
              <dl className="contact-list">
                <dt>phones:</dt>
                <dd><a href="tel:#">+91 99999999</a> <span>or</span> <a href="tel:#">+91 11111111</a>
                </dd>
              </dl>
            </div>
            <div className="col-md-4 col-xl-3">
              <h5>Links</h5>
              <ul className="nav-list">
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contacts</a></li>
                <li><a href="#">Pricing</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
  );
}