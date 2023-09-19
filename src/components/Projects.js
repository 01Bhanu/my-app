import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.jpg";
import projImg6 from "../assets/img/project-img6.jpg";
import projImg7 from "../assets/img/project-img7.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { InternshipCard } from "./InternshipCard";

export const Projects = () => {

  const projects = [
    {
      title: "E-Shop Application",
      description: "Welcome to Eshop, the go-to Android app for a delightful and seamless online shopping experience. ",
      imgUrl: projImg1,
    },
    {
      title: "Chatting Application",
      description: "Chatting is a cutting-edge online chatting application built with Kotlin, XML, and powered by Firebase.",
      imgUrl: projImg2,
    },
    {
      title: "Your Guard",
      description: "Your Guard is the essential Android application designed to provide peace of mind and enhanced safety in emergency situations.",
      imgUrl: projImg3,
    },
    {
      title: "BA-Music Application",
      description: "BA-Music is your passport to an uninterrupted and immersive music streaming experience on your Android device.",
      imgUrl: projImg5,
    },
    {
      title: "E-learning Website",
      description: "Pathshala is your premier destination for online learning and education. Our eLearning website is designed to empower learners of all ages and backgrounds, providing a diverse array of courses and resources that cater to a wide range of interests and skill levels.",
      imgUrl: projImg6,
    },
    {
      title: "Zoom Car Clone Website",
      description: "Welcome to our website, your premier destination for car rental services. Our website is designed to provide you with the convenience and flexibility to rent a car for your travels, just like Zoom Car. ",
      imgUrl: projImg7,
    },
  ];
  const internship=[
    {
      id: 1,
      title: "Software Development Intern ",
      description: "Keen Solution Indore",
      duration:"6 Months (April 2023 - present",
      imgUrl: projImg4,
    }
  ]
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>In my journey as a software developer student, I've had the privilege to work on a diverse range of projects, spanning both Android applications and web development. These projects showcase my expertise in crafting tailored solutions for different platforms, each with its unique set of challenges and requirements. Here are some standout examples from my portfolio</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                     <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item> */}
                    <Nav.Item>
                      <Nav.Link eventKey="third">Experience</Nav.Link>
                    </Nav.Item> 
                  </Nav> 
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          internship.map((project, id) => {
                            return (
                              <InternshipCard
                                key={id}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
