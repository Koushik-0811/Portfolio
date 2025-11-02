import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Match Making Application"
              description="Built a scalable full-stack matchmaking platform enabling users to discover and connect with others based on shared interests, location, preferences, and unique usernames. Developed a responsive, component-driven frontend using React + TypeScript with state management using Redux. Integrated RESTful APIs for authentication, profiles, polls, forums, and chat features using Django REST Framework. Enabled real-time messaging and notifications using WebSockets (socket.io) including both individual and group chats. Deployed on AWS EC2 with Nginx, achieving high availability and scalability for concurrent users."
              ghLink="https://github.com/Koushik-0811"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="YouTube Clone"
              description="Built a scalable YouTube Clone with core features including video playback, search functionality and responsive design. Integrated the YouTube Data API v3 for fetching video metadata, search results, and channel details in real-time. Enhanced UI with SCSS/SASS modules, achieving modular styling and 20% faster page performance through AJAX-based data fetching. Implemented authentication and user preferences (dark mode, subscriptions) using Firebase Auth + Firestore. Deployed the application on Vercel."
              ghLink="https://github.com/Koushik-0811"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="SplitPay – Expense Sharing App"
              description="Built a web application where friends or groups can split bills and track shared expenses in real time. Implemented user authentication and session management using JWT, ensuring secure access to expense data. Engineered scalable and secure RESTful APIs using Java (Spring Boot) for managing users, groups, and transactions, with efficient data persistence in MongoDB. Created a responsive and clean UI with React + Bootstrap, enabling easy expense entry and balance calculation. Integrated mock PayPal Sandbox API for simulating payments between group members. Deployed on Heroku, ensuring accessibility and scalability for multiple users."
              ghLink="https://github.com/Koushik-0811"
              // demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
