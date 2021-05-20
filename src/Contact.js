import React from "react";
import "./Home.css";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./styles";
import { MdPhoneInTalk } from "react-icons/md";
import { RiFeedbackFill } from "react-icons/ri";
import { SiUnity } from "react-icons/si";
import donateR from "./donateR.gif";
// import healthIcon from "./healthIcon.png";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div>
        <h3 className="text-center mt-5">Contact Us Here</h3>
        <Container
          className="con mt-5 d-flex justify-content-between"
          style={styles.con}
        >
          <Card>
            <Card.Header
              className=" adresscard text-center"
              style={styles.adresscard}
            >
              <strong>Ambernath Branch</strong>
            </Card.Header>
            <Card.Body>
              <h10>
                {" "}
                Mahendra nagar,near Shankar Mandir, javsai gaon
                Ambernath,Maharashtra 421501.
              </h10>
              <br></br>
              <div>
                <a
                  href="https://maps.app.goo.gl/qiW5NjPB52esQcox6"
                  target="_blank"
                >
                  Take me on Google Maps.
                </a>
              </div>

              <div>
                {" "}
                <MdPhoneInTalk />
                <strong> 8329599925, 9156881003</strong>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header
              className="text-center adresscard"
              style={styles.adresscard}
            >
              <strong>Badlapur Branch</strong>
            </Card.Header>
            <Card.Body>
              <h10>
                {" "}
                Jai Heights,Shop No.5,Near KBL School,Rameshwadi,Samarth
                Nagar,Badlapur(W).
              </h10>

              <div>
                {" "}
                <br />
                <MdPhoneInTalk />
                <strong> 9673007381, 7769877705</strong>
              </div>
            </Card.Body>
          </Card>
        </Container>
        <Container
          className="mt-5 d-flex justify-content-around"
          style={styles.joinbox}
        >
          <Card>
            <Card.Header className="text-center">
              <SiUnity />
              FOR JOINING US
            </Card.Header>
            <Card.Body>
              <a
                href="https://docs.google.com/forms/d/1jPg1fo0-X4BH0ulO9O9xsNGQZlN8KJ8ibyyc-341szE/edit"
                target="_blank"
              >
                Give us your 2 minutes
              </a>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="text-center">
              <RiFeedbackFill />
              FEEDBACK FORM
            </Card.Header>
            <Card.Body>
              <a
                href="https://docs.google.com/forms/d/1d83Ha0K_C3-IESTlncVNt1p8b9xkldSjfgZSQqV8kak/edit"
                target="_blank"
              >
                Give us your 2 minutes
              </a>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
// http://pixelcurse.com/wp-content/uploads/2011/02/minimalist_landscape_8.jpg
