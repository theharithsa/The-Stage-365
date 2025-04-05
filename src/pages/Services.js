import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../componets/Header';
import Footer from '../componets/Footer';
import serviceBgImage from '../assets/images/service-bg.png';

const Services = () => {
    return (
        <>
            <Helmet>
                <title>Services Page</title>
                <meta name="description" content="This is the description of my page." />
                <meta name="keywords" content="React, Page, Title, Description, Keywords" />
            </Helmet>
            <Header />
            <div className="breadcum" style={{ backgroundImage: `url(${serviceBgImage})`, overflow: 'hidden' }}>
                <div className="breadcum-content">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-10 px-3">
                            <h3>Transforming Visions into Unforgettable Events</h3>
                        </div>
                    </div>

                </div>
            </div>

            <section class="py-5 services">
                <div class="container">
                    <div class="services-box">
                        <div class="row">
                            <div class="col-md-12 text-center">
                                <h3>Event services we offer</h3>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                        


                            <div class="col-md-4 text-center mb-4">
                                <div class="crd">
                                    <img src={require("../assets/images/1.jpg")} className="img-fluid mb-2" />
                                    <h5>Corporate Galas and Conferences</h5>
                                    <p>Enhance your company image by organizing expertly prepared galas and conferences that
                                        capture the soul of your brand. We flawlessly combine expertise and creativity to make
                                        your business events compelling and unforgettable.
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-4 text-center mb-4">
                                <div class="crd">
                                    <img src={require("../assets/images/wedding.webp")} className="img-fluid mb-2" />
                                    <h5>Weddings and Celebrations </h5>
                                    <p>From huge weddings to intimate festivities, we add a touch of magic to every occasion.
                                        Our
                                        staff creates bespoke experiences that reflect the soul of your love story, making your
                                        big
                                        day really memorable.
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-4 text-center mb-4">
                                <div class="crd">
                                    <img src={require("../assets/images/sunburn-3.jpg")} className="img-fluid mb-2" />
                                    <h5> SOCIAL SOIREES <br /> AND PARTIES</h5>
                                    <p>Whether it's a milestone birthday, an anniversary, or a small gathering, we bring
                                        flair and
                                        innovation to every social occasion. Our goal is to create a lively and cheerful
                                        ambiance
                                        that reflects the essence of your celebration.</p>
                                </div>
                            </div>

                            <div class="col-md-4 text-center mb-4">
                                <div class="crd">
                                    <img src={require("../assets/images/4.jpg")} className="img-fluid mb-2" />
                                    <h5>Tech-Savvy Conferences and Seminars</h5>
                                    <p>Stay ahead of the competition with our technology-enabled conference planning. We
                                        combine
                                        innovation and efficiency to develop conferences and seminars that not only spread
                                        knowledge
                                        but also leave a lasting impact.
                                    </p>
                                </div>
                            </div>

                            <div class="col-md-4 text-center mb-4">
                                <div class="crd">
                                    <img src={require("../assets/images/5.jpg")} className="img-fluid mb-2" />
                                    <h5>Product Launches and Brand Activations</h5>
                                    <p>Launch your stuff with a bang! We specialize in delivering memorable product launches
                                        and
                                        brand activations that attract your target audience and make a lasting impression on
                                        your
                                        business.
                                    </p>
                                </div>
                            </div>

                            <div class="col-md-4 text-center">
                                <div class="crd">
                                    <img src={require("../assets/images/cultural.webp")} className="img-fluid mb-2" />
                                    <h5>Cultural and Community Events</h5>
                                    <p>Our expertise in cultural event planning allows us to celebrate diversity and
                                        community
                                        spirit. We recognize the value of preserving traditions and developing inclusive
                                        experiences
                                        that bring people together.</p>
                                </div>
                            </div>

                            <div class="col-md-4 text-center mb-4">
                                <div class="crd">
                                    <img src={require("../assets/images/7.jpg")} className="img-fluid mb-2" />
                                    <h5>Fashion Shows and Exhibitions </h5>
                                    <p>Our event management for fashion shows and exhibitions allows you to showcase your
                                        style and
                                        originality. We devote painstaking attention to aesthetics and logistics, resulting
                                        in a
                                        smooth and visually spectacular exhibition.
                                    </p>
                                </div>
                            </div>

                            <div class="col-md-4 text-center mb-4">
                                <div class="crd">
                                    <img src={require("../assets/images/8.jpg")} className="img-fluid mb-2" />
                                    <h5>Charity and Fundraising Events</h5>
                                    <p>Make a difference with effective charity and fundraising activities. We understand
                                        the
                                        particular dynamics of such occasions and can create an environment that inspires
                                        generosity
                                        and support for your good cause.
                                    </p>
                                </div>
                            </div>

                            <div class="col-md-4 text-center">
                                <div class="crd">
                                    <img src={require("../assets/images/9.jpg")} className="img-fluid mb-2" />
                                    <h5>Outdoor and Destination Events </h5>
                                    <p>Whether it's an outdoor excursion or a destination party, we have the experience to
                                        handle
                                        events in unusual locations. We manage the details, allowing you to focus on the
                                        beauty
                                        around you.
                                    </p>
                                </div>
                            </div>

                            <div class="col-md-4 text-center">
                                <div class="crd">
                                    <img src={require("../assets/images/10.jpg")} className="img-fluid mb-2" />
                                    <h5>Exclusive VIP Events </h5>
                                    <p>For individuals looking for an exclusive and elegant touch, our crew is skilled at
                                        organizing
                                        VIP parties. We recognize the value of privacy and individual attention in providing
                                        a
                                        genuinely premium experience.

                                    </p>
                                </div>
                            </div>

                            <div class="col-md-4 text-center">
                                <div class="crd">
                                    <img src={require("../assets/images/college.jpeg")} className="img-fluid mb-2" />
                                    <h5>
                                    College Fest and Celebrity Management
                                    </h5>
                                    <p> 
                                    Experience the buzz of campus life with our college fest management services, crafting unforgettable events from lively concerts to interactive workshops, tailored to your university's vibe. Meanwhile, in our celebrity management section, we bring stars to your stage with precision, handling every detail to ensure your event shines. Let us elevate your occasion, leaving attendees star-struck and memories that endure.

                                    </p>
                                </div>
                            </div>
                            <div class="col-md-4 text-center">
                                <div class="crd">
                                    <img src={require("../assets/images/audi-launch2.jpg")} className="img-fluid mb-2" />
                                    <h5>Movie and Audio Launches</h5>
                                    <p>Experience the thrill of premieres with our Movie and Audio Launches service. From red carpet extravaganzas to exclusive screenings, we specialize in crafting unforgettable moments that captivate audiences and elevate your brand. Let us handle every detail, ensuring your launch event shines in the spotlight, leaving a lasting impression on attendees and media alike. Trust us to make your cinematic and musical debuts truly unforgettable.
                                    </p>
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

export default Services;
