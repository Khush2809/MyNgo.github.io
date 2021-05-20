import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";
import Members from "./Members";
import Contact from "./Contact";
import EducationSector from "./EducationSector";
import HealthSector from "./HealthSector";
import SoftSkills from "./SoftSkills";
import WomenEmp from "./WomenEmp";
import EnvironmentSec from "./EnvironmentSec";
import SocialSec from "./SocialSec";
// import Payment from "./Payment";

import { Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Navbar />

      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/About">
        <About />
      </Route>
      <Route exact path="/Contact">
        <Contact />
      </Route>
      <Route exact path="/Members">
        <Members />
      </Route>
      <Route exact path="/EducationSector">
        <EducationSector />
      </Route>
      <Route exact path="/HealthSector">
        <HealthSector />
      </Route>
      <Route exact path="/SoftSkills">
        <SoftSkills />
      </Route>
      <Route exact path="/WomenEmp">
        <WomenEmp />
      </Route>
      <Route exact path="/EnvironmentSec">
        <EnvironmentSec />
      </Route>
      <Route exact path="/SocialSec">
        <SocialSec />
      </Route>

      {/* <Footer /> */}
    </>
  );
};

export default App;
