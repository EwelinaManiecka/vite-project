import { BrowserRouter } from "react-router-dom";
// import {
//   About,
//   Contact,
//   Experience,
//   Feedbacks,
//   Hero,
//   Navbar,
//   Tech,
//   Works,
//   StarsCanvas,
// } from "./components";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
// import Feedbacks from "./components/Feedbacks";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Tech from "./components/Tech";
import Works from "./components/Works";
import StarsCanvas from "./components/Stars";

// const passport = require("passport");
// const passportJWT = require("passport-jwt");
// require("dotenv").config();

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
