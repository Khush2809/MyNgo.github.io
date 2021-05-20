import React from "react";
import "./Home.css";
import styles from "./styles";
import { Card } from "react-bootstrap";
import EduIcon from "./EduIcon.png";
import softSkills from "./softSkills.png";
import womenEmpIcon from "./womenEmpIcon.png";
import SocialIcon from "./SocialIcon.png";
import EnvIcon from "./EnvIcon.png";
import donateR from "./donateR.gif";
import healthIcon from "./healthIcon.png";
import GpayIcon from "./GpayIcon.png";
import phonepe from "./phonepe.png";
import qrcode from "./qrcode.jpg";
import paytmcropped from "./paytmcropped.jpg";
import facebook from "./facebook.png";
import instagram from "./instagram.png";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { SiInstagram } from "react-icons/si";

const Home = () => {
  return (
    <div className="background" style={styles.background}>
      <div className="slideimage"></div>
      <h2 className="text-center barrier" style={styles.barrier}>
        Our Working Sectors
      </h2>

      <div>
        <Card className="Container1  flipCard mt-5" style={styles.Container1}>
          <div className="flipCard-inner">
            <Card.Body className="flipCard-front">
              <div>
                <img
                  src={EduIcon}
                  className=" mt-3 img"
                  style={styles.img}
                ></img>
              </div>
              <strong>Education Sector</strong>
            </Card.Body>
            <NavLink to="/EducationSector">
              <Card.Footer
                className="flipCard-back footer"
                style={styles.footer}
              >
                <h3>Education Sector</h3>
                <p className="quote mt-3" style={styles.quote}>
                  <strong>
                    A good Education is the foundation for the better future.
                  </strong>
                </p>
              </Card.Footer>
            </NavLink>
          </div>
        </Card>
      </div>
      <div>
        <Card className="Container2  flipCard mt-5" style={styles.Container2}>
          <div className="flipCard-inner">
            <Card.Body className="flipCard-front">
              <div>
                <img
                  src={softSkills}
                  className=" mt-5 img2"
                  style={styles.img2}
                ></img>
              </div>
              <strong>Soft Skills</strong>
            </Card.Body>
            <NavLink to="/SoftSkills">
              <Card.Footer
                className="flipCard-back footer"
                style={styles.footer}
              >
                <h3>Soft Skills</h3>
                <p className="quote mt-3" style={styles.quote}>
                  <strong>Soft skills make a MAN a HUMAN BEING.</strong>
                </p>
              </Card.Footer>
            </NavLink>
          </div>
        </Card>
      </div>
      <div>
        <Card className="Container3  flipCard mt-5" style={styles.Container3}>
          <div className="flipCard-inner">
            <Card.Body className="flipCard-front">
              <div>
                <img
                  src={womenEmpIcon}
                  className="img3 mt-5"
                  style={styles.img3}
                ></img>
              </div>
              <strong>Women EmpowerMent</strong>
            </Card.Body>
            <NavLink to="/WomenEmp">
              <Card.Footer
                className="flipCard-back footer"
                style={styles.footer}
              >
                <h3>Women Empowerment</h3>
                <p className="quote mt-3" style={styles.quote}>
                  <strong>
                    A woman is the full circle. Within her is the power to
                    create, nurture and transform.
                  </strong>
                </p>
              </Card.Footer>
            </NavLink>
          </div>
        </Card>
      </div>
      <div>
        <Card className="Container4  flipCard mt-5" style={styles.Container4}>
          <div className="flipCard-inner">
            <Card.Body className="flipCard-front">
              <div>
                <img
                  src={healthIcon}
                  className=" mt-5 img"
                  style={styles.img}
                ></img>
              </div>
              <strong>Health Sector</strong>
            </Card.Body>
            <NavLink to="/HealthSector">
              <Card.Footer
                className="flipCard-back footer"
                style={styles.footer}
              >
                <h3>Health Sector</h3>
                <p className="quote mt-3" style={styles.quote}>
                  <strong>
                    Health is the crown on the good person's head that only the
                    ill person can see.
                  </strong>
                </p>
              </Card.Footer>
            </NavLink>
          </div>
        </Card>
      </div>
      <div>
        <Card className="Container5  flipCard mt-5" style={styles.Container5}>
          <div className="flipCard-inner">
            <Card.Body className="flipCard-front">
              <div>
                <img
                  src={SocialIcon}
                  className=" mt-5 img"
                  style={styles.img}
                ></img>
              </div>
              <strong>Social Sector</strong>
            </Card.Body>
            <NavLink to="/SocialSec">
              <Card.Footer
                className="flipCard-back footer"
                style={styles.footer}
              >
                <h3>Social Sector</h3>
                <p className="quote mt-3" style={styles.quote}>
                  <strong>
                    We are not in it for the Income, we are in it for the
                    outcome.
                  </strong>
                </p>
              </Card.Footer>
            </NavLink>
          </div>
        </Card>
      </div>
      <div>
        <Card className="Container6  flipCard mt-5" style={styles.Container6}>
          <div className="flipCard-inner">
            <Card.Body className="flipCard-front">
              <div>
                <img
                  src={EnvIcon}
                  className=" mt-5 img"
                  style={styles.img}
                ></img>
              </div>
              <strong>Environment Sector</strong>
            </Card.Body>
            <NavLink to="/EnvironmentSec">
              <Card.Footer
                className="flipCard-back footer"
                style={styles.footer}
              >
                <h3>Environment Sector</h3>
                <p className="quote mt-3" style={styles.quote}>
                  <strong>
                    Environment is no one's property to destroy; It's everyone's
                    responsibility to PROTECT.
                  </strong>
                </p>
              </Card.Footer>
            </NavLink>
          </div>
        </Card>
      </div>

      <div>
        <Container className="donateBox" style={styles.donateBox}>
          <div>
            <img className="gif" style={styles.gif} src={donateR}></img>
            <img src={GpayIcon} className="gpay" style={styles.gpay}></img>
            <img
              src={paytmcropped}
              className="paytm "
              style={styles.paytm}
            ></img>
            <img
              src={phonepe}
              className="phonepe "
              style={styles.phonepe}
            ></img>
            <div>
              <div className="sign">
                <span className="fast-flicker">7</span>7568
                <span className="flicker">6</span>4447
              </div>
            </div>
            <img src={qrcode} className="qrcode" style={styles.qrcode}></img>
            <div className="arrow" style={styles.arrow}>
              <BsArrowRight />
            </div>
            <div>
              <Card
                className="Container7  flipCard mt-5"
                style={styles.Container7}
              >
                <div className="flipCard-inner">
                  <Card.Body className="flipCard-front">
                    <div className="mt-5">
                      <h2>
                        <strong>Bank Details</strong>
                      </h2>
                    </div>
                  </Card.Body>
                  <NavLink to="/HealthSector">
                    <Card.Footer
                      className="flipCard-back footer"
                      style={styles.footer}
                    >
                      <h3>Bank Details</h3>
                      <p className="quote mt-3" style={styles.quote}>
                        <h5>Bank Name: Saraswat Bank</h5>
                        <h5>A/c No.: 411203100001150</h5>
                        <h5>IFSC CODE: SRCB0000411</h5>
                        <h5>A/c holder Name: Sagar Mane</h5>
                      </p>
                    </Card.Footer>
                  </NavLink>
                </div>
              </Card>
            </div>
            <div className="updates" style={styles.updates}>
              <h3>For live updates follow us on</h3>
            </div>
            <div className="facebook" style={styles.facebook}>
              <a href="https://www.facebook.com/Teamtheyuva/" target="_blank">
                <button className="glow-on-hover" type="button">
                  {" "}
                  <FiFacebook />
                </button>
              </a>
            </div>
            <div className="instagram" style={styles.instagram}>
              <a
                href="https://instagram.com/yuva_warriors_?igshid=1nxus9rlqqd65"
                target="_blank"
              >
                <button className="glow-on-hover" type="button">
                  {" "}
                  <SiInstagram />
                </button>
              </a>
            </div>
            <h4 className="scanins" style={styles.scanins}>
              Scan here to pay
            </h4>
          </div>
        </Container>
      </div>

      {/* <div>
        <Container className="container" style={styles.container}>
          <div className="donate" style={styles.donate}>
            Participate in changing the world. Fulfill Someone's basic
            necessity!
            <div>
              <FcDonate className="donateIcon" style={styles.donateIcon} />
            </div>
          </div>
        </Container>
      </div> */}
    </div>
  );
};

export default Home;

{
  /* <div className="phonenum" style={styles.phonenum}>
<h1>9511875869</h1>
</div> */
}

{
  /* <a href="https://www.facebook.com/Teamtheyuva/" target="_blank">
              {" "}
              <img
                src={facebook}
                className="facebook"
                style={styles.facebook}
              ></img>
            </a>
            <a
              href="https://instagram.com/yuva_warriors_?igshid=1nxus9rlqqd65"
              target="_blank"
            >
              {" "}
              <img
                src={instagram}
                className="instagram"
                style={styles.instagram}
              ></img>
            </a> */
}
