import React from "react";
import { Container } from "react-bootstrap";
import { FcDonate } from "react-icons/fc";

const Footer = () => {
  return (
    <footer>
      <div>
        <Container>
          <div className="text-center mb-5">
            Participate in changing the world.
            <div>
              <FcDonate />
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
