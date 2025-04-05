import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../componets/Header';
import Footer from '../componets/Footer';
import careerBgImage from '../assets/images/career-bg.png';
import '../assets/css/style.css';

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
                        <div className="col-md-10 px-3 w-100" >
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
                        <div className="row align-items-center d-flex justify-content-center">
                            <div className="col-md-12 col-12 text-center mb-4">
                                <p>Join our dynamic team at The Stage 365, where passion meets precision in the world of event management. Explore exciting opportunities to contribute your creativity, dedication, and expertise, shaping unforgettable experiences for our clients. Elevate your career with us and be part of crafting extraordinary moments that last a lifetime.</p>
                            </div>
                            
                            <div className="col-md-4 mb-4">
                                <div className="career-inner-box">
                                    <h5>Event Marketing Specialist</h5>
                                    <p><i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;Bangalore</p>
                                    <p><i className="fas fa-city"></i>&nbsp;&nbsp;Full Time</p>
                                    <button className="career-button" data-bs-toggle="modal" href="#marketing">View more</button>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="career-inner-box">
                                    <h5>Venue Operations Manager</h5>
                                    <p><i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;Bangalore</p>
                                    <p><i className="fas fa-city"></i>&nbsp;&nbsp;Full Time</p>
                                    <button className="career-button" data-bs-toggle="modal" href="#operations">View more</button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            <div className="modal fade" id="coordinator" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title fs-1" id="exampleModalToggleLabel">Event Coordinator</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='row'>
                                <div className='col-md-9'>
                                    <h5 className='h5'>Job Description:</h5>
                                    <p>Collaborate with clients to understand their event requirements, objectives, and preferences.<br />Develop detailed event plans, including timelines, budgets, and resource requirements.<br />Coordinate logistics such as venue selection, catering, audio-visual requirements, and transportation.<br />Manage and communicate with vendors, ensuring all services are aligned with the event's goals.<br />Oversee on-site event operations, troubleshooting issues, and ensuring a seamless execution.</p>
                                    <h5 className='h5'>Requirements:</h5>
                                    <p>Bachelor's degree in event management, hospitality, or a related field.<br />Proven experience in event planning and coordination.<br />Strong organizational and multitasking skills.<br />Excellent communication and interpersonal abilities.<br />Attention to detail and ability to work under pressure.<br />Proficient in event management software and Microsoft&nbsp;Office&nbsp;suite.</p>
                                </div>
                                <div className='col-md-3'>
                                    <div className='summary-box'>
                                        <h5 className='h5'>Job Category</h5>
                                        <p>Lorem Ipsum</p>

                                        <h5 className='h5'>Job Type</h5>
                                        <p>Lorem Ipsum</p>

                                        <h5 className='h5'>Position Type</h5>
                                        <p>Lorem Ipsum</p>

                                        <h5 className='h5'>Work Location</h5>
                                        <p>Lorem Ipsum</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="marketing" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title fs-1" id="exampleModalToggleLabel">Event Marketing Specialist</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='row'>
                                <div className='col-md-9'>
                                    <h5 className='h5'>Job Description:</h5>
                                    <p>Develop and implement comprehensive marketing strategies to promote events and increase attendance.<br />Create compelling content for promotional materials, social media, websites, and other marketing channels.<br />Utilize digital marketing tools and analytics to track and optimize the effectiveness of marketing campaigns.<br />Collaborate with design teams to create visually appealing materials that resonate with the target audience.<br />Stay updated on market trends, competitor events, and industry best practices to enhance event marketing strategies.</p>
                                    <h5 className='h5'>Requirements:</h5>
                                    <p>Bachelor's degree in marketing, communications, or a related field.<br />Proven experience in event marketing or related roles.<br />Strong knowledge of digital marketing tools and platforms.<br />Excellent written and verbal communication skills.<br />Creative mindset with the ability to develop engaging content.<br />Analytical skills to measure and optimize marketing performance.<br />Familiarity with graphic design tools and marketing analytics.<br />Ability to work collaboratively with cross-functional&nbsp;teams.</p>
                                </div>
                                <div className='col-md-3'>
                                    <div className='summary-box'>
                                        <h5 className='h5'>Job Category</h5>
                                        <p>Marketing</p>

                                        <h5 className='h5'>Job Type</h5>
                                        <p>Full time</p>

                                        <h5 className='h5'>Position Type</h5>
                                        <p>Event Coordinator</p>

                                        <h5 className='h5'>Work Location</h5>
                                        <p>Bengaluru</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="operations" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title fs-1" id="exampleModalToggleLabel">Venue Operations Manager</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='row'>
                                <div className='col-md-9'>
                                    <h5 className='h5'>Job Description:</h5>
                                    <p>Negotiate and secure contracts with vendors, suppliers, and service providers for event-related services.<br />Ensure all necessary permits and licenses are obtained for events, adhering to legal and safety requirements.<br />Oversee the setup and breakdown of events, coordinating with venue staff and external service providers.<br />Address and resolve any issues related to the venue, such as technical difficulties or facility-related concerns.<br />Manage budgets related to venue operations, optimizing costs while maintaining high-quality services.</p>
                                    <h5 className='h5'>Requirements:</h5>
                                    <p>Bachelor's degree in hospitality management, business, or a related field.<br />Previous experience in venue management or operations.<br />Strong negotiation and contract management skills.<br />Knowledge of local regulations and permits related to events.<br />Excellent organizational and project management skills.<br />Ability to work well under pressure and handle unexpected challenges.<br />Budget management experience with a focus on cost optimization.<br />Effective communication and interpersonal skills.<br />Familiarity with event technology and venue-related&nbsp;software.</p>
                                </div>
                                <div className='col-md-3'>
                                    <div className='summary-box'>
                                        <h5 className='h5'>Job Category</h5>
                                        <p>Operations</p>

                                        <h5 className='h5'>Job Type</h5>
                                        <p>Venue Operations Manager</p>

                                        <h5 className='h5'>Position Type</h5>
                                        <p>Full Time</p>

                                        <h5 className='h5'>Work Location</h5>
                                        <p>Bangalore</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Career;
