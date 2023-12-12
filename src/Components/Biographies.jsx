import React from "react";
import "./Biographies.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import AdaL from "./images/Ada-Lovelace.webp";
import AlanT from "./images/Alan-Turing.jpg";
import BillG from "./images/bill-gates.jpg";
import DennisR from "./images/dennis-ritchie.jpg";
import GraceH from "./images/Grace-Hopper.webp";
import LarryS from "./images/LarryPageySergeyBrin.webp";
import LinusT from "./images/linus-torvalds.webp";
import MarkZ from "./images/Mark-Zuckerberg.webp";
import SteveJ from "./images/steve-jobs.jpg";
import { Link } from "react-router-dom";
import TimB from "./images/Tim-Berners.webp";

function Biographies() {
  return (
    <>
      <Navbar />
      <h1>What character do you want to know about?</h1>
      <div className="images-container-nav">
        <Link to="/Biographies/AlanT">
          <div className="images-space">
            <img src={AlanT} alt="" />
            <div className="text-img">
              <h3>Alan Turing</h3>
              <p>
                Reconocido como uno de los pioneros en el campo de la
                informática y la inteligencia artificial.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/Biographies/AdaL">
          <div className="images-space">
            <img src={AdaL} alt="Ada Lovelace" />
            <div className="text-img">
              <h3>Ada Lovelace</h3>
              <p>Reconocida como la primera programadora de computadoras.</p>
            </div>
          </div>
        </Link>
        <Link to="/Biographies/BillGates">
          <div className="images-space">
            <img src={BillG} alt="Bill Gates" />
            <div className="text-img">
              <h3>Bill Gates</h3>
              <p>
                Programador y filántropo estadounidense, reconocido por ser el
                cofundador de Microsoft Corporation.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/Biographies/DennisR">
          <div className="images-space">
            <img src={DennisR} alt="" />
            <div className="text-img">
              <h3>Dennis Ritchie</h3>
              <p>
                Destacado científico informático estadounidense, reconocido por
                su contribución al desarrollo del sistema operativo UNIX y por
                crear el lenguaje de programación C.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/Biographies/GraceHop">
          <div className="images-space">
            <img src={GraceH} alt="" />
            <div className="text-img">
              <h3>Grace Hopper</h3>
              <p>
                Reconocida por su trabajo en el desarrollo del lenguaje de
                programación COBOL.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/Biographies/LarryG">
          <div className="images-space">
            <img src={LarryS} alt="" />
            <div className="text-img">
              <h3>Larry Page y Sergey Brin</h3>
              <p>
                Dos empresarios estadounidenses conocidos por ser los fundadores
                de Google.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/Biographies/Linus">
          <div className="images-space">
            <img src={LinusT} alt="" />
            <div className="text-img">
              <h3>Linus Torvalds</h3>
              <p>
                Reconocido por ser el creador y el principal desarrollador del
                kernel de Linux.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/Biographies/Mark">
          <div className="images-space">
            <img src={MarkZ} alt="" />
            <div className="text-img">
              <h3>Mark Zuckerberg</h3>
              <p>
                Empresario y programador informático estadounidense, reconocido
                por ser el cofundador y CEO de Facebook.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/Biographies/SteveJobs">
          <div className="images-space">
            <img src={SteveJ} alt="" />
            <div className="text-img">
              <h3>Steve Jobs</h3>
              <p>
                Empresario y visionario tecnológico estadounidense, cofundador
                de Apple Inc.
              </p>
            </div>
          </div>
        </Link>
        <Link to="Timb">
          <div className="images-space">
            <img src={TimB} alt="" />
            <div className="text-img">
              <h3>Tim Berners-Lee</h3>
              <p>
                Científico de la computación británico, conocido por ser el
                inventor de la World Wide Web (WWW) o simplemente web.
              </p>
            </div>
          </div>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Biographies;
