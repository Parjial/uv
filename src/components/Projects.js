import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/vip.jpg";
import projImg2 from "../assets/img/sports.jpg";
import projImg3 from "../assets/img/business.jpg";
import projImg4 from "../assets/img/wedding.jpg";
import projImg5 from "../assets/img/entertainment.jpg";
import projImg6 from "../assets/img/promotion.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Entertainment",
      description:
        "We provide a variety of services from event planning to box office to create memorable and engaging experiences for audiences",
      imgUrl: projImg5,
    },
    {
      
      title: "Promotion Events",
      description:
        "We offer a range of services to help businesses and organizations promote their products, services, or brand.",
      imgUrl: projImg6,
    },
    {
      title: "Sports Events",
      description:
        "We provide a wide range of services to help plan, organize, and execute successful sporting events",
      imgUrl: projImg2,
    },
    {
      title: "Corporate Events",
      description:
        "We provide a wide range of services to help plan, organize, and execute successful corporate events.",
      imgUrl: projImg3,
    },
    {
      title: "Wedding Events",
      description:
        "We provide a wide range of services to help plan, organize, and execute a memorable and stress-free wedding day.",
      imgUrl: projImg4,
    },
    {
      title: "VIP Arrangements",
      description:
        "We provide a wide range of VIP arrangements depending on the specific needs and preferences of the client.",
      imgUrl: projImg1,

    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Services</h2>
                  <p>
                    Let us take the stress out of event planning and create an
                    unforgettable experience for you and your guests. Work with
                    us to create an event that leaves a lasting impression on
                    your guests and makes your vision a reality.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          Services We Provide
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Where To Contact</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          Willing to Work
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          ---------------------<br />
                          Company<br/>
                          Mobile No. : +91 9958789184<br />
                          E-mail : uniquevisioneye10@gmail.com<br />
                          ---------------------<br />  
                          Office<br />
                          Mobile No. : +91 7874275521 <br />

                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Join our team and work on a diverse range of events,
                          from corporate functions to weddings and festivals. No
                          two days are the same!<br />
                          <br />
                          We have our WhatsApp Group Contact Us and Join Our Team.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
