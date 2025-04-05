import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../componets/Header';
import Footer from '../componets/Footer';
import careerBgImage from '../assets/images/career-bg.png';



const Blogs = () => {
    return (
        <>
            <Helmet>
                <title>Blogs Page</title>
                <meta name="description" content="This is the description of my page." />
                <meta name="keywords" content="React, Page, Title, Description, Keywords" />
            </Helmet>
            <Header />
            <div className="breadcum" style={{ backgroundImage: `url(${careerBgImage})` }}>
                <div className="breadcum-content w-100 text-center">
                    <div className="row justify-content-center align-items-center w-100">
                        <div className="col-md-10 px-3">
                            <h3>Blogs</h3>
                        </div>
                    </div>

                </div>
            </div>


            <section class="blog py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-6 blogs pb-lg-0 pb-5">
                            <div class="blog-inner d-block mx-auto text-center">
                                <img src={require("../assets/images/Blog1.png")} className=" img-bor" alt="Description of the image" />
                                <div class="blog-content">
                                    <h4 className='blogContent'>10 Innovative Event Themes To Wow Your Guests
                                    </h4>
                                    <a href="/blog1" className='blog-redmor'>READ MORE</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 blogs ">
                            <div class="blog-inner d-block mx-auto text-center">
                                <img src={require("../assets/images/Blog2.png")} class=" img-bor" />
                                <div class="blog-content">
                                    <h4 className='blogContent'>Inside the Mind of an Event Planner: Insights into Creativity and Problem-Solving</h4>
                                    <a href="/blog2" className='blog-redmor'>READ MORE</a>
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

export default Blogs;
