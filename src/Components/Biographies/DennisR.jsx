import React from "react";
import Dennis from "../images/dennis-ritchie.jpg";
import Navbar from "../Navbar";
import "./BiographiesAll.css";
import Footer from "../Footer";

function DennisR() {
  return (
    <div>
      <Navbar />
      <div className="containerBio">
        <img src={Dennis} alt="Dennis Ritchie" />
        <div className="bio">
          <h1 className="titleB">Biography Dennis Ritchie</h1>
          <p className="paraB">
            Dennis Ritchie, born on September 9, 1941, in Bronx-ville, New York,
            was an American computer scientist known for his significant
            contributions to the field of computer science, particularly for his
            work on the development of the Unix operating system and the C
            programming language. Ritchie attended Harvard University, where he
            earned his bachelor's degree in physics and subsequently pursued
            graduate studies at Harvard and the Massachusetts Institute of
            Technology (MIT). His most influential work began in the late 1960s
            when Ritchie, along with Ken Thompson, played a crucial role in
            creating the Unix operating system at Bell Labs. Unix became one of
            the most influential operating systems in computing history,
            characterized by its modularity, portability, and multitasking
            capabilities. Ritchie's contribution to programming languages is
            equally significant. He co-developed the C programming language,
            which quickly became widely adopted due to its simplicity, power,
            and ability to access hardware efficiently. C became the foundation
            for many other programming languages and played a pivotal role in
            the development of numerous operating systems, including Linux and
            Windows. His impact on the computing world earned him numerous
            awards, including the Turing Award in 1983, which is considered the
            Nobel Prize of computing. Dennis Ritchie's work laid the groundwork
            for modern computing systems and programming languages, leaving an
            enduring legacy in the world of technology.
          </p>
          <h2>Video</h2>
        </div>
        <iframe
          className="videos"
          width="640"
          height="360"
          src="https://youtu.be/icXM6k8zsLs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default DennisR;
