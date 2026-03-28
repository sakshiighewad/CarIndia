import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <footer style={{ backgroundColor: "#111", color: "#ccc", borderTop: "3px solid #ff7a00" }}>
            <Container className="py-5">
                <Row>

                    {/* Brand Section */}
                    <Col md={3} sm={6} className="mb-4">
                        <h4 style={{ color: "#ff7a00" }}>AutoCare Hub</h4>
                        <p>
                            Smart Garage Solutions for fast, reliable and affordable bike services.
                        </p>
                    </Col>

                    {/* Quick Links */}
                    <Col md={3} sm={6} className="mb-4">
                        <h5 style={{ color: "#ff7a00" }}>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="footer-link">Home</a></li>
                            <li><a href="#" className="footer-link">About Us</a></li>
                            <li><a href="#" className="footer-link">Services</a></li>
                            <li><a href="#" className="footer-link">Garage Billing</a></li>
                        </ul>
                    </Col>

                    {/* Services */}
                    <Col md={3} sm={6} className="mb-4">
                        <h5 style={{ color: "#ff7a00" }}>Our Services</h5>
                        <ul className="list-unstyled">
                            <li>Air Filter Clean</li>
                            <li>Engine Servicing</li>
                            <li>Oil Filter</li>
                            <li>Wheel Greasing</li>
                        </ul>
                    </Col>

                    {/* Contact */}
                    <Col md={3} sm={6} className="mb-4">
                        <h5 style={{ color: "#ff7a00" }}>Contact</h5>
                        <p>📍 Your City, India</p>
                        <p>📞 +91 9876543210</p>
                        <p>✉ support@autocarehub.com</p>
                    </Col>

                </Row>

                {/* Bottom */}
                <Row>
                    <Col className="text-center pt-4 border-top border-secondary">
                        <small>© 2026 AutoCare Hub. All rights reserved.</small>
                    </Col>
                </Row>

            </Container>
        </footer>
    );
};

export default Footer;
