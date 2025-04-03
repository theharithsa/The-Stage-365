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
    <footer className="py-5">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4 md-mb-0 mb-4">
            <h4>The Stage 365</h4>
           

            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                className="bi bi-geo-alt-fill me-2" viewBox="0 0 16 16">
                <path
                  d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
              </svg>
              level 14/15, Concorde block, UB City, Vittal Mallya Rd, KG Halli, D' Souza Layout, Ashok Nagar,
              Bengaluru, Karnataka 560001
            </p>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                className="bi bi-telephone-fill me-2" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
              </svg>
              Phone: 1234567890
            </p>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                className="bi bi-envelope-fill me-2" viewBox="0 0 16 16">
                <path
                  d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
              </svg>
              Email: abcd@gmail.com
            </p>
          </div>
          <div className="col-md-4 text-center md-mb-0 mb-4">
            <h5>Quick Links</h5>
            <ul className="quick-links">
              <li><Link to="/" className='text-decoration-none text-dark'>Home</Link></li>
              <li><Link to="/about" className='text-decoration-none text-dark'>About</Link></li>
              <li><Link to="/services" className='text-decoration-none text-dark'>Services</Link></li>
              <li><Link to="/career" className='text-decoration-none text-dark'>Career</Link></li>
              <li><Link to="/contact" className='text-decoration-none text-dark'>Contact</Link></li>
            </ul>
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
      </div>
    </footer>
  );
};

export default Footer;
