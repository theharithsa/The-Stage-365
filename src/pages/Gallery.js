import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../componets/Header';
import Footer from '../componets/Footer';
import aboutBgImage from '../assets/images/about-bg.png';

export default function Gallery() {
  return (
    <>
        <Helmet>
            <title>Gallery Page</title>
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

        <section className="why py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 col-12">
                        <h3>Gallery</h3>
                    </div>
                    <div className="row ">
                        <div className="col-md-3 col-6 mb-4 px-1">
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
                                              
                        <div className="col-md-3 col-6 mb-4 px-1">
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

                        <div className="col-md-3 col-6 mb-4 px-1">
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
                        
                        <div className="col-md-3 col-6 mb-4 px-1">
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
                        
                        <div className="col-md-3 col-6 mb-4 px-1">
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
                        
                        <div className="col-md-3 col-6 mb-4 px-1">
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
                        
                        <div className="col-md-3 col-6 mb-4 px-1">
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
                        <div className="col-md-3 col-6 mb-4 px-1">
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
                        <div className="col-md-3 col-6 mb-4 px-1">
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
                        <div className="col-md-3 col-6 mb-4 px-1">
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
                        <div className="col-md-3 col-6 mb-4 px-1">
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
                        
                        <div className="col-md-3 col-6 mb-4 px-1">
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
                        <div className="col-md-3 col-6 mb-4 px-1">
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



                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>
  )
}
