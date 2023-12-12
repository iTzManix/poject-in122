import Carousel from "react-bootstrap/Carousel";
import AdaL from "./images/Ada-Lovelace.webp";
import AlanT from "./images/Alan-Turing.jpg";
import BillG from "./images/bill-gates.jpg";
import DennisR from "./images/dennis-ritchie.jpg";
import GraceH from "./images/Grace-Hopper.webp";
import LarryS from "./images/LarryPageySergeyBrin.webp";
import LinusT from "./images/linus-torvalds.webp";
import MarkZ from "./images/Mark-Zuckerberg.webp";
import SteveJ from "./images/steve-jobs.jpg";
import TimB from "./images/Tim-Berners.webp";
import "./Carousel.css";

function Carousels() {
  return (
    <>
      <div className="div-carousel-container">
        <Carousel className="carousel-container">
          <Carousel.Item interval={1000}>
            <img src={AdaL} alt="Ada Lovelace" className="carousel-image" />
            <Carousel.Caption>
              <h3>Ada Lovelace</h3>
              <p>Reconocida como la primera programadora de computadoras.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <img src={AlanT} alt="Alan Turing" className="carousel-image" />
            <Carousel.Caption>
              <h3>Alan Turing</h3>
              <p>
                Reconocido como uno de los pioneros en el campo de la
                informática y la inteligencia artificial.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <img src={BillG} alt="Bill Gates" className="carousel-image" />
            <Carousel.Caption>
              <h3>Bill Gates</h3>
              <p>
                Programador y filántropo estadounidense, reconocido por ser el
                cofundador de Microsoft Corporation.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <img
              src={DennisR}
              alt="Dennis Ritchie"
              className="carousel-image"
            />
            <Carousel.Caption>
              <h3>Dennis Ritchie</h3>
              <p>
                Destacado científico informático estadounidense, reconocido por
                su contribución al desarrollo del sistema operativo UNIX y por
                crear el lenguaje de programación C.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <img src={GraceH} alt="Grace Hopper" className="carousel-image" />
            <Carousel.Caption>
              <h3>Grace Hopper</h3>
              <p>
                Reconocida por su trabajo en el desarrollo del lenguaje de
                programación COBOL.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <img
              src={LarryS}
              alt="Larry Page y Sergey Brin"
              className="carousel-image"
            />
            <Carousel.Caption>
              <h3>Larry Page y Sergey Brin</h3>
              <p>
                Dos empresarios estadounidenses conocidos por ser los fundadores
                de Google.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <img src={LinusT} alt="Linus Torvalds" className="carousel-image" />
            <Carousel.Caption>
              <h3>Linus Torvalds</h3>
              <p>
                Reconocido por ser el creador y el principal desarrollador del
                kernel de Linux.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <img src={MarkZ} alt="Mark Zuckerberg" className="carousel-image" />
            <Carousel.Caption>
              <h3>Mark Zuckerberg</h3>
              <p>
                Empresario y programador informático estadounidense, reconocido
                por ser el cofundador y CEO de Facebook.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <img src={SteveJ} alt="Steve Jobs" className="carousel-image" />
            <Carousel.Caption>
              <h3>Steve Jobs</h3>
              <p>
                Empresario y visionario tecnológico estadounidense, cofundador
                de Apple Inc.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <img src={TimB} alt="Tim Berners-Lee" className="carousel-image" />
            <Carousel.Caption>
              <h3>Tim Berners-Lee</h3>
              <p>
                Científico de la computación británico, conocido por ser el
                inventor de la World Wide Web (WWW) o simplemente web.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Carousels;
