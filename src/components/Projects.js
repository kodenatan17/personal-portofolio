import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

import cmsMakul from "../assets/img/mockup-cms-makul.png";
import cmsSedjoek from "../assets/img/mockup-cms-sedjoek.png";
import mockupMakul from "../assets/img/mockup-makul.png";
import mockupSedjoekWeb from "../assets/img/mockup-sedjoek-id.png";
import mockupGeprek from "../assets/img/mockup-geprek.png";
import mockupLaundry from "../assets/img/mockup-mylaundry.png";
import mockupTangani from "../assets/img/mockup-tangani.png";
import mockupSedjoek from "../assets/img/mockup-sedjoek.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const landingProjects = [
    {
      title: "Sedjoek Landing Page",
      description: "Menggunakan Wordpress",
      imgUrl: mockupSedjoekWeb,
    },
    {
      title: "Makul Indonesia",
      description: "Menggunakan Vue.js dan Sass",
      imgUrl: mockupMakul,
    },
  ];

  const laravelProjects = [
    {
      title: "CMS Sedjoek",
      description: "Menggunakan Laravel 9",
      imgUrl: cmsSedjoek,
    },
    {
      title: "CMS Makul Indonesia",
      description: "Menggunakan Laravel 9",
      imgUrl: cmsMakul,
    },
  ];

  const flutterProjects = [
    {
      title: "Sedjoek Apps",
      description: "Aplikasi penyewaan AC dengan fitur Signature Online, Payment Gateway menggunakan Midtrans dan Generate Report PDF menggunakan Flutter dan Laravel",
      imgUrl: mockupSedjoek,
    },
    {
      title: "My Laundry Apps",
      description: "Aplikasi yang bertujuan untuk mereport dan mengelola kegiatan Laundry dengan menggunakan Flutter GetX dan Firebase",
      imgUrl: mockupLaundry,
    },
    {
      title: "Tangani Apps",
      description:
        "Aplikasi yang bertujuan untuk mereport keadaan terkini di Tamgerang Selatan dengan menggunakan Flutter GetX dan Firebase",
      imgUrl: mockupTangani,
    },
    {
      title: "Geprek Mas Dion Apps",
      description: "Aplikasi yang bertujuan untuk mereport dan mengelola data toko dengan menggunakan Flutter GetX dan Firebase",
      imgUrl: mockupGeprek,
    },
  ];

  return (
    <section className="project" id="projects">
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
                  <h2>Projects</h2>
                  <p>
                    Beberapa Main Project yang sudah dikembangankan baik secara
                    tim maupun secara individu sejak Maret 2022 sampai Oktober
                    2022
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Landing Page</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Laravel</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Flutter</Nav.Link>
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
                          {landingProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {laravelProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {flutterProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
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
