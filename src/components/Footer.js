import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/aakhi-singh-a17b34237" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://instagram.com/unique_vision_events_10?igshid=NTc4MTIwNjQ2YQ==" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p class="footer__copy">&#169; Copyright ParthKarki. All rights reserved</p>
            <p class="footer__copy">Visit My Website -><a href="https://parjial.github.io/Portfolio/" target="_blank">Parth Karki</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
