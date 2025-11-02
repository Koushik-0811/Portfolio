import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a passionate Full Stack Developer currently pursuing B.Tech in Electronics and Communication Engineering at NIT Patna with a CGPA of 9.4. I love transforming ideas into reliable, scalable products and have explored various technologies to build high-performance systems and intuitive user experiences.
              <br />
              <br />
              I'm proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, Java, C++, JavaScript, TypeScript, React.js, Node.js, and GoLang{" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks, cloud technologies, and DevOps.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Full Stack Web Applications, Scalable Backend Systems,{" "}
                </b>
              </i>
              and exploring cloud technologies like AWS, GCP, and containerization with Docker and Kubernetes.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> React.js and Django/Spring Boot </b> for full-stack applications, deploying them on{" "}
              <i>
                <b className="purple">AWS</b> and{" "}
                <b className="purple">cloud platforms</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
