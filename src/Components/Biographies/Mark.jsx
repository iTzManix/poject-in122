import React from "react";
import MarkZ from "../images/Mark-Zuckerberg.webp";
import Navbar from "../Navbar";
import "./BiographiesAll.css";
import Footer from "../Footer";

function MarkZu() {
  return (
    <div>
      <Navbar />
      <div className="containerBio">
        <img src={MarkZ} alt="Mark Zuckerberg" />
        <div className="bio">
          <h1 className="titleB">Biography Mark Zuckerberg</h1>
          <p className="paraB">
            Mark Zuckerberg, born on May 14, 1984, in White Plains, New York, is
            a prominent American technology entrepreneur and the co-founder of
            Facebook. His journey in technology began during his teenage years
            when he created several software programs, displaying a remarkable
            aptitude for coding. Zuckerberg attended Harvard University, where
            in 2004, along with his college roommates, he launched Facebook from
            his dormitory room. Originally named "Thefacebook," the platform
            started as a social network exclusively for Harvard students but
            quickly expanded to other universities and eventually to the general
            public. Facebook's immense success revolutionized social networking,
            connecting millions of people worldwide and altering the way
            individuals communicate, share information, and interact online.
            Under Zuckerberg's leadership, Facebook grew exponentially, offering
            various features, acquiring Instagram and WhatsApp, and continuously
            evolving its platform. Zuckerberg's innovative vision and strategic
            decisions steered Facebook to become one of the world's leading
            technology companies. His initiatives, however, have also faced
            scrutiny regarding user privacy, content moderation, and the
            platform's influence on society, resulting in various debates and
            regulatory challenges. Despite the controversies, Zuckerberg remains
            a prominent figure in the tech industry, advocating for
            connectivity, innovation, and the potential of technology to connect
            people and build communities across the globe.
          </p>
          <h2>Video</h2>
        </div>
        <iframe
          className="videos"
          width="640"
          height="360"
          src="https://youtu.be/Lb4IcGF5iTQ"
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

export default MarkZu;
