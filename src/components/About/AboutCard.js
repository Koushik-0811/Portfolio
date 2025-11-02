import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Sai Koushik Puppala</span>{" "}
            from <span className="purple">Patna, India</span>.
            <br />
            I'm currently pursuing{" "}
            <span className="purple">Bachelor of Technology</span> in{" "}
            <span className="purple">Electronics and Communication Engineering</span> from{" "}
            <span className="purple">National Institute of Technology, Patna</span>.
            <br />I have a CGPA of <span className="purple">9.4</span> and I'm passionate about building scalable web applications and exploring cloud technologies.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Participating in Coding Challenges and Hackathons 🏆
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing and Mentoring Juniors 💃
            </li>
            <li className="about-activity">
              <ImPointRight /> Volunteering in College TechFest Events 🎉
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sai Koushik Puppala</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
