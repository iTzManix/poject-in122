import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousels from "./Components/Carousel";
import Footer from "./Components/Footer";
import "./index.css";
import { Link } from "react-router-dom";
import "./Components/Button.css";

function Home() {
  return (
    <>
      <div className="App container">
        <Sidebar className="carousel" />
        <div className="div-car-title">
          <h1>Characters of computing</h1>
          <Carousels />
          <br></br>
          <h2>Computer Pioneers:</h2>
          <p>
            In the history of computing, there are fundamental figures whose
            contributions have laid the foundations of modern technology. From
            Ada Lovelace, considered the first programmer, to Alan Turing, a
            genius mathematician and cryptographer, these visionaries played a
            crucial role in the development of computing and technology as we
            know it today. His revolutionary work ranged from creation of
            algorithms to the conception of analytical machines and operating
            systems, thus laying the foundations of computing modern. Each of
            these characters left a significant legacy, whether in programming,
            the theory of computing, the design of hardware or technological
            innovation. Explore life, achievements and legacy of these
            visionaries offers a fascinating insight into the history and
            evolution of computing.
          </p>
          <h3>Would you like to suggest me one more character?</h3>
          <Link to="/Components/Form">
            <button className="button-form">Form Button :D</button>
          </Link>
          <br />
          <h3>Credits!</h3>
          <Link to="/Components/Credits">
            <button className="button-form">Credits :D</button>
          </Link>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
