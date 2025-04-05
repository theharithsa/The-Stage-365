import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery';

import Header from '../componets/Header';
import Footer from '../componets/Footer';

const Home = () => {

    useEffect(() => {
        const addZoomClass = (event) => {
            $(event.target).find('.owl-item').eq(0).addClass('zoomed active-center');
        };
        //const location = useLocation();
        const owl = $('#owl-gallery2');

        const slideNext = () => {
            owl.trigger('next.owl.carousel');
        };

        const slideInterval = setInterval(slideNext, 10000);

        owl.on('changed.owl.carousel', function (event) {
            $('.owl-item').removeClass('zoomed active-left active-center active-right active-second');

            const activeIndex = event.item.index;

            owl.find('.owl-item').eq(activeIndex).addClass('zoomed active-center');

            if (activeIndex > 0) {
                owl.find('.owl-item').eq(activeIndex - 1).addClass('zoomed active-left');
            }

            if (activeIndex < owl.find('.owl-item').length - 1) {
                owl.find('.owl-item').eq(activeIndex + 1).addClass('zoomed active-right');
            }

            if (activeIndex + 1 < owl.find('.owl-item').length) {
                owl.find('.owl-item').eq(activeIndex + 1).addClass('zoomed active-second');
            }
        });

        return () => {
            clearInterval(slideInterval);
        };
    }, []); // Empty dependency array ensures useEffect runs once on component mount

    return (
        <>
            <Helmet>
                <title>Home Page</title>
                <meta name="description" content="This is the description of my page." />
                <meta name="keywords" content="React, Page, Title, Description, Keywords" />
            </Helmet>
            <Header />
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">

                        <picture>
                            <source media="(min-width:768px)" srcset={require("../assets/images/Banner1.webp")} />
                            <source media="(max-width:768px)" srcset={require("../assets/images/slider1.png")} />
                            <img src={require("../assets/images/Banner1.webp")} alt="Flowers" style={{ width: '100%' }} />
                        </picture>


                    </div>
                    <div className="carousel-item">
                        <picture>
                            <source media="(min-width:768px)" srcset={require("../assets/images/Banner2.webp")} />
                            <source media="(max-width:768px)" srcset={require("../assets/images/slider2.png")} />
                            <img src={require("../assets/images/Banner2.webp")} alt="Flowers" style={{ width: '100%' }} />
                        </picture>

                    </div>
                    <div className="carousel-item">

                        <picture>
                            <source media="(min-width:768px)" srcset={require("../assets/images/Banner3.webp")} />
                            <source media="(max-width:768px)" srcset={require("../assets/images/slider3.png")} />
                            <img src={require("../assets/images/Banner3.webp")} alt="Flowers" style={{ width: '100%' }} />
                        </picture>

                        {/* <img
                            src={require("../assets/images/Banner3.webp")}
                            className="img-fluid"
                            alt=""
                            title=""
                            style={{ width: '100%' }}
                        /> */}
                    </div>
                </div>
                {/* Add carousel controls if necessary */}
                <div className="carousel-content d-md-block d-none">
                    <h3>
                        Celebrate Success:<br />Your One Stop For <br />Perfect Events!
                    </h3>
                    <Link to="/contact" className="button">Contact</Link>
                </div>
            </div>


            {/* About Section */}
            <section className="about py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-12" style={{ overflow: 'hidden' }}>
                            <video width="100%" height="450" autoPlay loop muted id="vid">
                                <source src={require("../assets/images/video.mp4")} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="col-md-6 col-12 px-md-5 px-4" style={{ zIndex: 1 }}>
                            <h4>Events Inspired By</h4>
                            <h3>Innovation</h3>
                            <p>Step into The Stage 365, where we redefine the essence of events by wholeheartedly committing to ensuring our clients feel like treasured guests at their own affairs. Encompassed within our distinctive pledge is the mantra, "Be a guest at your own," capturing the essence of our promise. Recognizing that the true enchantment of any gathering resides in the joy and presence of our clients, unburdened by the intricacies of planning, we take pride in fashioning an environment where they can unwind, breathe, and savor every moment.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experiences Section */}
            <section className="experiences cm-bg">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-12  px-md-5 px-4 pb-5">
                            <h3>Crafting Unforgettable Experiences</h3>
                            <p className='text-white'>Whether orchestrating intimate get-togethers or orchestrating grand celebrations, we revel in establishing a setting where our clients can fully immerse themselves in the experience.</p>
                        </div>
                        <div className="col-md-6 col-12 p-lg-5 p-4" style={{ background: '#F8EAD4' }}>
                            <div className="row">
                                <div className="col-md-6 col-6 mb-4">
                                    <img src={require("../assets/images/Layer_1.png")} className="img-fluid mb-2" />
                                    <h4>Expert Event Solutions</h4>
                                    <p>Crafting tailored experiences that leave a lasting impact.</p>
                                </div>
                                <div className="col-md-6 col-6 mb-4">
                                    <img src={require("../assets/images/Capa_1.png")} className="img-fluid mb-2" />
                                    <h4>Tailored Event Services</h4>
                                    <p>Customized solutions for your diverse needs, ensuring flawless execution.</p>
                                </div>
                                <div className="col-md-6 col-6 mb-0 md-mb-4">
                                    <img src={require("../assets/images/x31_.png")} className="img-fluid mb-2" />
                                    <h4>Proven Track Record</h4>
                                    <p>Delivering excellence in event management for Fortune 500 companies and industry leaders.</p>
                                </div>
                                <div className="col-md-6 col-6 mb-0 md-mb-4">
                                    <img src={require("../assets/images/Frame.png")} className="img-fluid mb-2" />
                                    <h4>Client-Centric Approach</h4>
                                    <p>Your vision is our priority—collaborating to turn ideas into unforgettable events.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Offer Section */}
            <section className="offer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 text-center">
                            <h5>What we offer</h5>
                            <h3>Our Great Services</h3>
                            <p className='d-none'>Lorem Ipsum is that it has a more-or-less normal distribution content making it look like readable English.</p>
                        </div>
                        <div className="col-md-8 text-center">
                            <div className="row justify-content-center">
                                <div className="col-md-3 col-12 pb-4">
                                    <div className="offerbox">
                                        <div className="iinerbox p-0 py-2">
                                            <img src={require("../assets/images/Icon.png")} className="img-fluid mb-2" />
                                            <h4>284</h4>
                                            <p>Weddings</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-12 pb-4">
                                    <div className="offerbox">
                                        <div className="iinerbox p-0 py-2">
                                            <img src={require("../assets/images/Icon-1.png")} className="img-fluid mb-2" />
                                            <h4>172</h4>
                                            <p>Birthdays</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-12 pb-4">
                                    <div className="offerbox">
                                        <div className="iinerbox p-0 py-2">
                                            <img src={require("../assets/images/Icon-2.png")} className="img-fluid mb-2" />
                                            <h4>76</h4>
                                            <p>Corporate Events</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-12 pb-4">
                                    <div className="offerbox">
                                        <div className="iinerbox p-0 py-2">
                                            <img src={require("../assets/images/Icon-2.png")} className="img-fluid mb-2" />
                                            <h4>130</h4>
                                            <p>Others</p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Event Section */}
            <section className="py-5 event">
                <div className="container-fluid px-lg-5 px-4">
                    <div className="row align-items-center event-top">
                        <div className="col-md-6">
                            <img src={require("../assets/images/EventManagemee.webp")} className="img-fluid mb-4 md-mb-0" />
                        </div>
                        <div className="col-md-6">
                            <div className="row align-items-center">
                                <div className="col-md-9 col-9">
                                    <h3> Event Management Services</h3>
                                </div>
                                <div className="col-md-3 col-3">
                                    <img src={require("../assets/images/Line 2.png")} className="img-fluid margin-right-33" />
                                </div>
                            </div>

                        </div>

                        <div className="col-md-6 mt-4 mt-md-5 d-none d-md-block">
                            <div className="row align-items-center">
                                <div className="col-md-3 col-3">
                                    <img src={require("../assets/images/Line 3.png")} className="img-fluid margin-left-33" />
                                </div>
                                <div className="col-md-9 col-9">
                                    <h3> Social Celebratins</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-4 mt-md-5">
                            <img src={require("../assets/images/SocialCelebration.webp")} className="img-fluid mb-4 md-mb-0" />
                        </div>
                        <div className="col-md-6 mt-4 mt-md-5 d-block d-md-none">
                            <div className="row align-items-center">
                                <div className="col-md-3 col-3">
                                    <img src={require("../assets/images/Line 3.png")} className="img-fluid margin-left-33" />
                                </div>
                                <div className="col-md-9 col-9">
                                    <h3> Social Celebratins</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 mt-4 mt-md-5">
                            <img src={require("../assets/images/CorporateCelebration.webp")} className="img-fluid mb-4 md-mb-0" />
                        </div>
                        <div className="col-md-6 mt-4 mt-md-5">
                            <div className="row align-items-center">
                                <div className="col-md-9 col-9">
                                    <h3> Corporate Celebration</h3>
                                </div>
                                <div className="col-md-3 col-3">
                                    <img src={require("../assets/images/Line 2.png")} className="img-fluid margin-right-33" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-5 services cm-bg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-12">
                            <h5>WE PLAN AND DELIVER</h5>
                            <h3>Event Services</h3>
                            <p className='text-white'>
                                Our process of understanding your objectives and building the
                                event step by step from there helps us provide for any requirement
                                you may have. Our end-to-end event services portfolio is updated
                                constantly to match global standards and deliver fresh and
                                engaging experiences for clients and attendees alike.
                            </p>
                        </div>
                        <div className="col-md-6 col-12">
                            <img src={require("../assets/images/EventService.webp")} className="img-fluid mb-4 md-mb-0" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 cm-bg"> </section>

            {/* Background Image Section */}
            <section className="bg-img py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <h3>"It's more than just having ideas; it's about bringing those ideas to life."</h3>
                            <Link to="/contact" className="button">Contact</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-5 gallery cm-bg">
                <div className="container-fluid">
                    <div className="gallery-heading">
                        <h5>Gallery</h5>
                        <h3>Glimpse of Work</h3>
                    </div>
                    <OwlCarousel
                        className="owl-carousel owl-theme"
                        id="owl-gallery2"
                        loop
                        margin={30}
                        autoplay
                        autoplayTimeout={10000}
                        autoplayHoverPause={false}
                        dots={false}
                        nav
                        navText={[
                            '<i class="fas fa-arrow-left"></i>',
                            '<i class="fas fa-arrow-right"></i>'
                        ]}
                        responsive={{
                            0: {
                                items: 1
                            },
                            768: {
                                items: 3
                            },
                            1024: {
                                items: 4
                            }
                        }}
                    >

                        <div className="item py-5 px-1 mt-5">
                            <a
                                data-fancybox="gallery-1"
                                href={require("../assets/images/sunburn-1.jpg")}
                                data-expand="-1"
                                className="lazy bg-white"
                            >
                                <img
                                    src={require("../assets/images/sunburn-1.jpg")}
                                    alt="Gallery Image" className="homeGallery"
                                />
                            </a>
                        </div>

                        <div className="item py-5 px-1 mt-5">
                            <a
                                data-fancybox="gallery-1"
                                href={require("../assets/images/sunburn-2.jpg")}
                                data-expand="-1"
                                className="lazy bg-white"
                            >
                                <img
                                    src={require("../assets/images/sunburn-2.jpg")}
                                    alt="Gallery Image" className="homeGallery"
                                />
                            </a>
                        </div>

                        <div className="item py-5 px-1 mt-5">
                            <a
                                data-fancybox="gallery-1"
                                href={require("../assets/images/sunburn-3.jpg")}
                                data-expand="-1"
                                className="lazy bg-white"
                            >
                                <img
                                    src={require("../assets/images/sunburn-3.jpg")}
                                    alt="Gallery Image" className="homeGallery"
                                />
                            </a>
                        </div>

                        <div className="item py-5 px-1 mt-5">
                            <a
                                data-fancybox="gallery-1"
                                href={require("../assets/images/sunburn-4.jpg")}
                                data-expand="-1"
                                className="lazy bg-white"
                            >
                                <img
                                    src={require("../assets/images/sunburn-4.jpg")}
                                    alt="Gallery Image" className="homeGallery"
                                />
                            </a>
                        </div>
                        <div className="item py-5 px-1 mt-5">
                            <a
                                data-fancybox="gallery-1"
                                href={require("../assets/images/college.jpeg")}
                                data-expand="-1"
                                className="lazy bg-white"
                            >
                                <img
                                    src={require("../assets/images/college.jpeg")}
                                    alt="Gallery Image" className="homeGallery"
                                />
                            </a>
                        </div>
                        <div className="item py-5 px-1 mt-5">
                            <a
                                data-fancybox="gallery-1"
                                href={require("../assets/images/Gallery1.webp")}
                                data-expand="-1"
                                className="lazy bg-white"
                            >
                                <img
                                    src={require("../assets/images/Gallery1.webp")}
                                    alt="Gallery Image" className="homeGallery"
                                />
                            </a>
                        </div>
                        <div className="item py-5 px-1 mt-5">
                            <a
                                data-fancybox="gallery-1"
                                href={require("../assets/images/Gallery2.webp")}
                                data-expand="-1"
                                className="lazy bg-white"
                            >
                                <img
                                    src={require("../assets/images/Gallery2.webp")}
                                    alt="Gallery Image" className="homeGallery"
                                />
                            </a>
                        </div>
                        <div className="item py-5 px-1 mt-5">
                            <a
                                data-fancybox="gallery-1"
                                href={require("../assets/images/Gallery3.webp")}
                                data-expand="-1"
                                className="lazy bg-white"
                            >
                                <img
                                    src={require("../assets/images/Gallery3.webp")}
                                    alt="Gallery Image" className="homeGallery"
                                />
                            </a>
                        </div>
                        <div className="item py-5 px-1 mt-5">
                            <a
                                data-fancybox="gallery-1"
                                href={require("../assets/images/Gallery4.webp")}
                                data-expand="-1"
                                className="lazy bg-white"
                            >
                                <img
                                    src={require("../assets/images/Gallery4.webp")}
                                    alt="Gallery Image" className="homeGallery"
                                />
                            </a>
                        </div>
                        <div className="item py-5 px-1 mt-5">
                            <a
                                data-fancybox="gallery-1"
                                href={require("../assets/images/Gallery5.webp")}
                                data-expand="-1"
                                className="lazy bg-white"
                            >
                                <img
                                    src={require("../assets/images/Gallery5.webp")}
                                    alt="Gallery Image" className="homeGallery"
                                />
                            </a>
                        </div>
                        <div className="item py-5 px-1 mt-5">
                            <a
                                data-fancybox="gallery-1"
                                href={require("../assets/images/audi-launch2.jpg")}
                                data-expand="-1"
                                className="lazy bg-white"
                            >
                                <img
                                    src={require("../assets/images/audi-launch2.jpg")}
                                    alt="Gallery Image" className="homeGallery"
                                />
                            </a>
                        </div>
                        <div className="item py-5 px-1 mt-5">
                            <a
                                data-fancybox="gallery-1"
                                href={require("../assets/images/Gallery6.webp")}
                                data-expand="-1"
                                className="lazy bg-white"
                            >
                                <img
                                    src={require("../assets/images/Gallery6.webp")}
                                    alt="Gallery Image" className="homeGallery"
                                />
                            </a>
                        </div>
                        <div className="item py-5 px-1 mt-5">
                            <a
                                data-fancybox="gallery-1"
                                href={require("../assets/images/Gallery7.webp")}
                                data-expand="-1"
                                className="lazy bg-white"
                            >
                                <img
                                    src={require("../assets/images/Gallery7.webp")}
                                    alt="Gallery Image" className="homeGallery"
                                />
                            </a>
                        </div>

                        <div className="item py-5 px-1 mt-5">
                            <a
                                data-fancybox="gallery-1"
                                href={require("../assets/images/audi-launch.jpg")}
                                data-expand="-1"
                                className="lazy bg-white"
                            >
                                <img
                                    src={require("../assets/images/audi-launch.jpg")}
                                    alt="Gallery Image" className="homeGallery"
                                />
                            </a>
                        </div>

                    </OwlCarousel>
                </div>

            </section>

            {/* Testimonial Section */}
            <section className="testimonial py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <h6>YouTube</h6>
                            <h3>Virtual Glimpse of Our Work
                            </h3>
                        </div>
                        <div className="col-md-12 pt-5">
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/tk3pK7KX5bU?si=P7l5_y1590dMTr1v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
                        <div className="col-md-8">
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
                                    <img src={require("../assets/images/Photo.png")} className="rounded-circle d-none" />
                                    <h5 className="mt-3">Zaiba Khanum</h5>
                                </div>
                                <div className="item">
                                    <p className="mb-3 mt-5">Stage365 conducts events in a grand manner and the teamwork is wonderful. Very professional team that exhibits good attitude towards vendors and clients.</p>
                                    <img src={require("../assets/images/Photo.png")} className="rounded-circle  d-none" />
                                    <h5 className="mt-3">Pushpa M S</h5>
                                </div>

                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>

            {/* Planners Section */}
            <section class="planners py-5 d-none">
                <div class="container">
                    <div class="row justify-content-center text-center">
                        <div class="col-md-12">
                            <h3>Meet the Planners</h3>
                        </div>
                        <div class="col-md-4 md-mb-0 mb-4">
                            <img src={require("../assets/images/Arun.png")} className="img-fluid mb-4" />
                            <h4>Arun A R</h4>
                            <span>Director and Co-founder</span>
                        </div>

                        <div class="col-md-4">
                            <img src={require("../assets/images/Lavanya.png")} className="img-fluid mb-4" />
                            <h4>Lavanya</h4>
                            <span>Director and Co-founder</span>
                        </div>

                    </div>
                </div>
            </section>

            {/* Clients Section */}
            <section className="py-5 clients cm-bg d-none">
                <div className="container">
                    <div className="row text-center align-items-center">
                        <div className="col-md-12">
                            <h3>Clients</h3>
                        </div>
                    </div>
                    <div className="row row-cols-md-5 row row-cols-3 mb-5">
                        <div className="col">
                            <img src={require("../assets/images/lakmesalon 1.png")} className="img-fluid" />
                        </div>
                        <div className="col">
                            <img src={require("../assets/images/prestigegroup 1.png")} className="img-fluid" />
                        </div>
                        <div className="col">
                            <img src={require("../assets/images/sleepwell 1.png")} className="img-fluid md-mb-0 mb-4" />
                        </div>
                        <div className="col">
                            <img src={require("../assets/images/caratlane 1.png")} className="img-fluid" />
                        </div>
                        <div className="col">
                            <img src={require("../assets/images/tatahousing 1.png")} className="img-fluid" />
                        </div>

                    </div>

                    <div className="row row-cols-md-3 row row-cols-1 mb-5">
                        <div className="col logo-top md-mb-0 mb-4">
                            <img src={require("../assets/images/prestigegroup 1.png")} className="img-fluid" />
                        </div>
                        <div className="col">
                            <h4>We are the event Architects</h4>
                        </div>
                        <div className="col logo-bottom">
                            <img src={require("../assets/images/sleepwell 1.png")} className="img-fluid" />
                        </div>
                    </div>

                    <div className="row row-cols-md-5 row row-cols-3">
                        <div className="col">
                            <img src={require("../assets/images/lakmesalon 1.png")} className="img-fluid" />
                        </div>
                        <div className="col">
                            <img src={require("../assets/images/prestigegroup 1.png")} className="img-fluid" />
                        </div>
                        <div className="col">
                            <img src={require("../assets/images/sleepwell 1.png")} className="img-fluid md-mb-0 mb-4" />
                        </div>
                        <div className="col">
                            <img src={require("../assets/images/caratlane 1.png")} className="img-fluid" />
                        </div>
                        <div className="col">
                            <img src={require("../assets/images/tatahousing 1.png")} className="img-fluid" />
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Home;