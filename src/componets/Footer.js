import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { useForm } from 'react-hook-form';
import useContactForm from '../componets/useContactForm'; // Import the custom hook  

const Footer = () => {

  const { handleSubmit, register, reset } = useForm();
  const { submitMessage, submitForm } = useContactForm('f_btn1'); // Use the custom hook

  const onSubmit = (formData) => {
    submitForm(formData, reset);
  };

  return (
    <footer className="pt-5">
      <div className="container">
        <div className="row text-center align-items-center border-top pt-4 border-dark">
          <div className="col-md-4 md-mb-0 mb-4">
            <img src={require("../assets/images/footer-logo.png")} className="img-fluid" alt="Logo" />
          </div>
          <div className="col-md-4 text-center md-mb-0 mb-4">
            <p>
              Level 15, Concorde block, UB city, Vittal Mallya Road, Bengaluru-560001
            </p>
            <p className='conta-det'>
              Phone:<a href="tel:+91 9606133309">+91 9606133309</a> 
            </p>
            <p className='conta-det'>
              Email: <a href="mailto: contact@thestage365.com"> contact@thestage365.com </a>
            </p>
            <ul className="social">
              <li>
                <Link href="#" target="_blank">
                  <i className="fab fa-facebook"></i>
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank">
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank">
                  <i className="fab fa-linkedin"></i>
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank">
                  <i className="fab fa-instagram"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            {/* Display the response message */}
            {submitMessage && (
              <div style={{ textAlign: 'left' }}>
                <p>{submitMessage}</p>
              </div>
            )}
            <form
              id="footer-form"
              style={{ paddingBottom: '15px' }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="row mb-2">
                <div className="col-md-6 col-sm-12 md-mb-0 mb-2">
                  <input
                    {...register('name')}
                    className="form-control"
                    id="fname"
                    name="name"
                    placeholder="Name"
                    type="text"
                  />
                </div>
                <div className="col-md-6 col-sm-12">
                  <input
                    {...register('email')}
                    className="form-control"
                    id="lname"
                    name="email"
                    placeholder="Email"
                    type="text"
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-md-3">
                  <select
                    {...register('ccode')}
                    name="ccode"
                    placeholder="contrycode"
                    className="form-control md-mb-0 mb-2"
                  >
                    <option value="+91">91</option>
                    <option value="+92">92</option>
                  </select>
                </div>

                <div className="col-md-9">
                  <input
                    {...register('phone')}
                    className="form-control"
                    name="phone"
                    placeholder="Phone"
                    type="text"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <textarea
                    {...register('message')}
                    className="form-control"
                    placeholder="Message"
                    rows="3"
                    name="message"
                  ></textarea>
                </div>
              </div>
              <button
                id="f_btn1"
                className="footer-button d-flex mx-auto mt-3"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className='row mt-3 py-3 border-top border-dark'>
          <div className='col-md-8'>
            <ul className="quick-links d-flex mb-0">
              <li><Link to="/" className='text-decoration-none text-dark pr-3'>Home</Link></li>
              <li><Link to="/about" className='text-decoration-none text-dark'>About</Link></li>
              <li><Link to="/services" className='text-decoration-none text-dark'>Services</Link></li>
              <li><Link to="/career" className='text-decoration-none text-dark'>Career</Link></li>
              <li><Link to="/blog" className='text-decoration-none text-dark'>Blog</Link></li>
              <li><Link to="/contact" className='text-decoration-none text-dark'>Contact</Link></li>
            </ul>
          </div>
          <div className='col-md-4 text-center'>
            <p className='mb-0'>Copyright © 2024 • IM Solutions</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
