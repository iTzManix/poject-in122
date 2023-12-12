import React from "react";
import Grace from "../images/Grace-Hopper.webp";
import Navbar from "../Navbar";
import "./BiographiesAll.css";
import Footer from "../Footer";

function GraceHop() {
  return (
    <div>
      <Navbar />
      <div className="containerBio">
        <img src={Grace} alt="Grace Hopper" />
        <div className="bio">
          <h1 className="titleB">Biography Grace Hopper</h1>
          <p className="paraB">
            Grace Hopper, born on December 9, 1906, in New York City, was a
            pioneering computer scientist and naval officer known for her
            groundbreaking work in computer programming and software
            development. Hopper earned her Ph.D. in Mathematics from Yale
            University in 1934 and joined the United States Navy during World
            War II. She became one of the first programmers of the Harvard Mark
            I computer, a giant electromechanical computer used by the U.S. Navy
            for calculations. Her most notable contributions came in the field
            of programming languages. Hopper developed the first compiler for a
            computer programming language, which eventually led to the creation
            of COBOL (Common Business-Oriented Language) in the late 1950s.
            COBOL became one of the most widely used programming languages in
            business applications. Throughout her career, Hopper advocated for
            the development of user-friendly computer languages and was
            instrumental in standardizing computer languages and making them
            more accessible to a broader audience. Her pioneering work earned
            her numerous accolades, including the National Medal of Technology,
            the Presidential Medal of Freedom, and she was posthumously awarded
            the Presidential Medal of Freedom by President Barack Obama in 2016.
            Grace Hopper's contributions to computer science revolutionized the
            field and laid the groundwork for modern programming languages and
            software development. She remains an iconic figure in the history of
            computing, celebrated for her innovation and leadership in
            technology.
          </p>
          <h2>Video</h2>
        </div>
        <iframe
          className="videos"
          width="640"
          height="360"
          src="https://youtu.be/5sNuPYJpSCI"
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

export default GraceHop;
