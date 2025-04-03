import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../componets/Header';
import Footer from '../componets/Footer';
import careerBgImage from '../assets/images/career-bg.png';


const Career = () => {
  return (
    <>
        <Helmet>
            <title>Career Page</title>
            <meta name="description" content="This is the description of my page." />
            <meta name="keywords" content="React, Page, Title, Description, Keywords" />
        </Helmet>
      <Header />
      <div className="breadcum" style={{ backgroundImage: `url(${careerBgImage})` }}>
          <div className="breadcum-content">
              <div className="row justify-content-center align-items-center">
                  <div className="col-md-10 px-3">
                      <h3>Join Us and Craft Unforgettable Experiences</h3>
                  </div>
              </div>
              
          </div>
      </div>

      <section className="py-5 career">
          <div className="container">
              <div className="career-box">
                  <div className="row">
                      <div className="col-md-12 text-center">
                          <h3>Be a part of the team</h3>
                      </div>
                  </div>
                  <div className="row align-items-center">                
                      <div className="col-md-12 col-12 text-center mb-4">                    
                          <p>Join our dynamic team at The Stage 365, where passion meets precision in the world of event management. Explore exciting opportunities to contribute your creativity, dedication, and expertise, shaping unforgettable experiences for our clients. Elevate your career with us and be part of crafting extraordinary moments that last a lifetime.</p>
                      </div>
                      <div className="col-md-4 mb-4">
                          <div className="career-inner-box">
                              <h5>Sr.Graphic Designer</h5>
                              <p><i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;Bangalore</p>
                              <p><i className="fas fa-city"></i>&nbsp;&nbsp;Full Time</p>
                              <button className="career-button">View more</button>
                          </div>
                      </div>
                      <div className="col-md-4 mb-4">
                          <div className="career-inner-box">
                              <h5>Sr.Graphic Designer</h5>
                              <p><i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;Bangalore</p>
                              <p><i className="fas fa-city"></i>&nbsp;&nbsp;Full Time</p>
                              <button className="career-button">View more</button>
                          </div>
                      </div>
                      <div className="col-md-4 mb-4">
                          <div className="career-inner-box">
                              <h5>Sr.Graphic Designer</h5>
                              <p><i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;Bangalore</p>
                              <p><i className="fas fa-city"></i>&nbsp;&nbsp;Full Time</p>
                              <button className="career-button">View more</button>
                          </div>
                      </div>
                      <div className="col-md-4 mb-4">
                          <div className="career-inner-box">
                              <h5>Sr.Graphic Designer</h5>
                              <p><i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;Bangalore</p>
                              <p><i className="fas fa-city"></i>&nbsp;&nbsp;Full Time</p>
                              <button className="career-button">View more</button>
                          </div>
                      </div>
                      <div className="col-md-4 mb-4">
                          <div className="career-inner-box">
                              <h5>Sr.Graphic Designer</h5>
                              <p><i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;Bangalore</p>
                              <p><i className="fas fa-city"></i>&nbsp;&nbsp;Full Time</p>
                              <button className="career-button">View more</button>
                          </div>
                      </div>
                      <div className="col-md-4">
                          <div className="career-inner-box">
                              <h5>Sr.Graphic Designer</h5>
                              <p><i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;Bangalore</p>
                              <p><i className="fas fa-city"></i>&nbsp;&nbsp;Full Time</p>
                              <button className="career-button">View more</button>
                          </div>
                      </div>
                      
                  </div>
              </div>
              
          </div>
      </section>
      <Footer />
    </>
  );
};

export default Career;
