import React from "react";
import './About.css'
import about from '../assets/about.jpg';
import about1 from '../assets/about1.jpg';
import about2 from '../assets/about2.jpg';

import Carousel from "react-bootstrap/Carousel";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
    return (

        <Container className="about-section">

            <Row className="align-items-center">

                {/* LEFT SIDE TEXT */}
                <Col md={6}>

                    <h1>About AutoCare Hub</h1>

                    <p>
                        AutoCare Hub हे एक smart two-wheeler garage management system आहे जे bike servicing,
                        oil change, engine repair, washing आणि spare parts management सारख्या services
                        प्रदान करते. आमचा उद्देश garage operations सोपे करणे आणि ग्राहकांना fast,
                        reliable आणि affordable service देणे आहे.
                    </p>

                </Col>


                {/* RIGHT SIDE CAROUSEL */}
                <Col md={6}>

                    <div className="about-carasouls">

                        <Carousel>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={about1}
                                    alt="Bike Service"
                                />
                                <Carousel.Caption>
                                    <h3>Bike Servicing</h3>
                                    <p>Professional two-wheeler servicing.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={about2}
                                    alt="Oil Change"
                                />
                                <Carousel.Caption>
                                    <h3>Oil Change</h3>
                                    <p>High quality engine oil replacement.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={about}
                                    alt="Bike Washing"
                                />
                                <Carousel.Caption>
                                    <h3>Bike Washing</h3>
                                    <p>Complete washing and detailing.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                        </Carousel>

                    </div>

                </Col>

            </Row>


            {/* SECOND ROW */}

            <Row className="mt-5">

                <Col md={4}>
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to provide reliable and affordable two-wheeler
                        servicing that keeps your bike running smoothly.
                    </p>
                </Col>

                <Col md={4}>
                    <h2>Our Services</h2>
                    <ul>
                        <li>Bike Servicing</li>
                        <li>Engine Repair</li>
                        <li>Oil Change</li>
                        <li>Brake Service</li>
                    </ul>
                </Col>

                <Col md={4}>
                    <h2>Why Choose Us?</h2>
                    <ul>
                        <li>Experienced Technicians</li>
                        <li>Genuine Spare Parts</li>
                        <li>Affordable Pricing</li>
                        <li>Quick Service</li>
                    </ul>
                </Col>

            </Row>

        </Container>

    );
}

export default About;