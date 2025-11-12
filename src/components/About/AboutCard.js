import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Sheikh Nusrat Jahan</span>{" "}
            from <span className="purple">Bangadesh</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Software Engineer</span> at{" "}
            <span className="purple">XYZ</span>.
            <br />I have completed M.Sc. in{" "}
            <span className="purple">Information & Technology</span> from{" "}
            <span className="purple">Westcliff University</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Cooking 👩‍🍳
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
