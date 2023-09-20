import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import { Contact } from "./Contact";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Contact />
          {/* <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col> */}
        </Row>
        <Row className="align-items-center">
          <Col size={24} sm={12} className="text-center text-sm-center">
            <div className="social-icon" style={{marginTop:"10px"}}>
            <a href="https://www.linkedin.com/in/bhanu-amrute01/">
                  <img src={navIcon1} alt="linkdln" />
                </a>
                <a href="https://www.facebook.com/bhanu.amrute.3">
                  <img src={navIcon2} alt="facebook" />
                </a>
                <a href="https://www.instagram.com/bhanu_amrute01/">
                  <img src={navIcon3} alt="instagram" />
                </a>
               <a href="https://github.com/01Bhanu">
                  <img src={navIcon4} alt="instagram" />
                </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
     
    </footer>
  );
};
