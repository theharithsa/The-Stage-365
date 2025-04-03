import OwlCarousel from 'react-owl-carousel';
import { Helmet } from 'react-helmet';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Header from '../componets/Header';
import Footer from '../componets/Footer';
import aboutBgImage from '../assets/images/about-bg.png';



const About = () => {
    return (
        <>
            <Helmet>
                <title>About Page</title>
                <meta name="description" content="This is the description of my page." />
                <meta name="keywords" content="React, Page, Title, Description, Keywords" />
            </Helmet>
            <Header />
            <div className="breadcum" style={{ backgroundImage: `url(${aboutBgImage})` }} >
                <div className="about-breadcum-content d-md-block d-none">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <h3>" Crafting Moments, Creating Memories: Your Event, Our Expertise!"</h3>
                        </div>
                    </div>
                </div>
            </div>

            <section className="about-us">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-12 px-lg-5 px-4">
                            <p>The Stage 365, established in 2005 as Rudraksha Events and rebranded in 2017, distinguishes itself with the commitment to redefine the event experience. Embracing the mantra "Be a guest at your own," we aim to make clients feel like cherished guests, allowing them to revel in the joy of their events without the burden of planning details. Having successfully executed 662 events, including 284 weddings, 172 birthdays, and 76 corporate events, The Stage 365 envisions unbounded growth and a legacy as pioneers in event excellence. Our vision encompasses unprecedented growth, crafting unforgettable experiences, and becoming trailblazers in event innovation, all rooted in sustainable quality. Join The Stage 365 on a journey where passion meets purpose to redefine the landscape of event management, creating extraordinary moments where the ordinary transforms effortlessly.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="why py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-12">
                            <h3>Why work with us?</h3>
                        </div>
                        <div className="row ">
                            <div className="col-md-3 col-6 mb-4 px-1">
                                <div className="why-box">
                                    <img src={require("../assets/images/why-1.png")} className="img-fluid mb-2 d-block mx-auto" />
                                    <h4>EXPERIENCE AND EXPERTISE</h4>
                                    <p>Crafting unforgettable events with seasoned mastery.</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-6 mb-4 px-1">
                                <div className="why-box">
                                    <img src={require("../assets/images/why-2.png")} className="img-fluid mb-2 d-block mx-auto" />
                                    <h4>VENDOR NETWORK</h4>
                                    <p>Unlocking a world of possibilities through our extensive partner network</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-6 mb-4 px-1">
                                <div className="why-box">
                                    <img src={require("../assets/images/why-3.png")} className="img-fluid mb-2 d-block mx-auto" />
                                    <h4>COST EFFECTIVENESS</h4>
                                    <p>Delivering excellence without compromising your budget.</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-6 mb-4 px-1">
                                <div className="why-box">
                                    <img src={require("../assets/images/why-4.png")} className="img-fluid mb-2 d-block mx-auto" />
                                    <h4>TRANSPARENCY</h4>
                                    <p>Open and clear communication, ensuring your vision is our shared reality.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className='py-5 why bg-black'>
                <div className="container">
                    <div className="row justify-content-center">
                        <h3>Our Team</h3>
                    </div>
                    <div className="row text-center ms-md-0 text-dark">
                        <div className="col-md-6">
                            <div className="bg-white py-3">
                                <img src={require("../assets/images/person.png")} alt="" className="py-2 w-50" />
                                <h5 className="fw-bold text-black mt-3">Lorem Ipsum</h5>
                                <p className='text-black'>Cheif Executive Officer</p>
                                <p className="px-2 text-black">Vikas brings with him a rich experience of over 18 years
                                    from premier global institutions like Deutsche Bank, Standard Chartered Bank, ANZ Grindlays
                                    Bank and Ogilvy & Mather Advertising, covering a range of function including...
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="bg-white py-3">
                                <img src={require("../assets/images/person.png")} alt="" className="py-2 w-50" />
                                <h5 className="fw-bold text-black mt-3">Lorem Ipsum</h5>
                                <p className='text-black'>Director-Sales&Marketing</p>
                                <p className="px-2  text-black">Pradeep has over 13 years of work experience from
                                    premier global institutions including Standard Chartered Bank & Dell India. In his last
                                    assignment with Dell, he was Director & General Manager - SME business...
                                </p>
                            </div>
                        </div>            
                    </div>
                </div>
            </section>

            <section className="pt-5 planer">
                <div className="container-fluid px-0">
                    <div className="row align-items-center">
                        <h5>How it started</h5>
                        <h3>Meet the Director And Founder</h3>
                    </div>
                    <div className="planer-box">
                        <div className="row align-items-center mb-4 px-lg-5 px-4 text-center">
                            <div className="col-md-6 d-md-block d-none">
                                <img src={require("../assets/images/planer1.png")} className="img-fluid" />
                            </div>
                            <div className="col-md-6">
                                <p>
                                    Meet Arun A R, the Director and Co-founder of The Stage 365, an ambitious MBA graduate from Karnataka. In 2005, he sparked the inception of The Stage 365 as a college side project, and today, it stands as a testament to his entrepreneurial prowess. Arun's journey, rooted in academia, seamlessly integrates with his passion for creating unforgettable experiences in the realm of event management. The Stage 365 is not just a company; it's Arun's legacy of excellence, creativity, and enduring client relationships. Join us in the visionary world of Arun A R, where every event unfolds as a chapter in the narrative of exceptional celebration.</p>
                            </div>
                            <div className="col-md-6 d-md-none d-block">
                                <img src={require("../assets/images/planer1.png")} className="img-fluid" />
                            </div>
                        </div>
                        <div className="row align-items-center mb-4 px-lg-5 px-4 text-center">
                            <div className="col-md-6">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                            </div>
                            <div className="col-md-6">
                                <img src={require("../assets/images/planer2.png")} className="img-fluid" />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            {/* Testimonial Section */}
            <section className="testimonial py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <h6>Testimonial</h6>
                            <h3>What our clients says</h3>
                        </div>
                        <div className="col-md-8 px-0">
                            <OwlCarousel
                                className="owl-carousel owl-theme"
                                id="otestimonialCarouselwl2"
                                loop
                                margin={10}
                                autoplay
                                autoplayTimeout={3000}
                                autoplayHoverPause={false}
                                dots={false}
                                nav={true}
                                navText={[
                                    '<i class="fas fa-chevron-left"></i>',
                                    '<i class="fas fa-chevron-right"></i>'
                                ]}
                                responsive={{
                                    0: {
                                        items: 1
                                    },
                                    600: {
                                        items: 1
                                    },
                                    1000: {
                                        items: 1
                                    }
                                }}
                            >
                                <div className="item">
                            <p className="mb-3 mt-5">I had great experience with the stage 365  the team was professional, organized, and highly efficient.</p>
                            <img src={require("../assets/images/Photo.png")} className="rounded-circle" />
                            <h5 className="mt-3">Zaiba Khanum</h5>
                        </div>
                        <div className="item">
                            <p className="mb-3 mt-5">Stage365 conducts events in a grand manner and the teamwork is wonderful. Very professional team that exhibits good attitude towards vendors and clients.</p>
                            <img src={require("../assets/images/Photo.png")} className="rounded-circle" />
                            <h5 className="mt-3">Pushpa M S</h5>
                        </div> 

                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default About;
