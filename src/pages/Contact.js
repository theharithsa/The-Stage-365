import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useContactForm from '../componets/useContactForm'; // Import the custom hook  

import Header from '../componets/Header';
import Footer from '../componets/Footer';
import videoSrc from "../assets/images/video.mp4";

const Contact = () => {
  const { handleSubmit, register, reset } = useForm();
  const { submitMessage, submitForm } = useContactForm('c_btn1'); // Use the custom hook

  const onSubmit = (formData) => {
    submitForm(formData, reset);
  };
  return (
    <>
    <Helmet>
        <title>Contact Page</title>
        <meta name="description" content="This is the description of my page." />
        <meta name="keywords" content="React, Page, Title, Description, Keywords" />
    </Helmet>
      <Header />
      <div className="breadcum pt-5" style={{ backgroundColor: 'rgb(0, 0, 0)', height: '85vh', overflow: 'hidden' }}>
        <div className="row justify-content-center" style={{backgroundColor: '#000'}}>
          <div className="col-md-10 mt-5">
            <video width="100%" height="400" autoPlay loop muted id="vid">
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <section className="contact py-5" style={{ marginTop: '40px' }}>
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h3 style={{color:'#d4bb86'}}>Work with us</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-12 mb-4 md-mb-0">
              <div className="contact-info-box">
                <h5>Contact Information</h5>
                <p className='mt-3 d-none'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                <p className='mt-3'><i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp; Level 15, Concorde block, UB city, Vittal Mallya Road, Bengaluru-560001</p>
                <p><i className="fas fa-envelope"></i>&nbsp;&nbsp;  contact@thestage365.com</p>
                <p><i className="fas fa-phone-alt"></i>&nbsp;&nbsp; 9606133309</p>

                <ul className="contact-social">
                  <li><Link to="#" target="_blank"><img src={require("../assets/images/insta.png")} className="img-fluid" alt="Instagram" /></Link></li>
                  <li><Link to="#" target="_blank"><img src={require("../assets/images/facebook.png")} className="img-fluid" alt="Facebook" /></Link></li>
                  <li><Link to="#" target="_blank"><img src={require("../assets/images/twitter.png")} className="img-fluid" alt="Twitter" /></Link></li>
                  <li><Link to="#" target="_blank"><img src={require("../assets/images/pintsrt.png")} className="img-fluid" alt="Pinterest" /></Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="contact-form-box">
                <h5>MAIL US</h5>
                <h4 style={{color:'#d4bb86'}}>Have a Question?</h4>
                {/* Display the response message */}
                {submitMessage && (
                  <div style={{ textAlign: 'left' }}>
                    <p>{submitMessage}</p>
                  </div>            
                )}
                <form id="footer-form" className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                  <div className="row mb-3">
                    <div className="col-md-6 col-sm-12 md-mb-0 mb-2">
                      <input {...register('name')} className="form-control" placeholder="Name" type="text" />
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <input {...register('email')} className="form-control" placeholder="Email" type="text" />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-3">
                      <select {...register('ccode')} className="form-control md-mb-0 mb-2">
                        <option value="+91">91</option>
                      </select>
                    </div>
                    <div className="col-md-9">
                      <input {...register('phone')} className="form-control" placeholder="Phone" type="text" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <textarea {...register('message')} className="form-control" placeholder="Message" rows="3"></textarea>
                    </div>
                  </div>
                  <button id="c_btn1" className="button mt-3" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
