import React from "react";
import TimB from "../images/Tim-Berners.webp";
import Navbar from "../Navbar";
import "./BiographiesAll.css";
import Footer from "../Footer";

function Tim() {
  return (
    <div>
      <Navbar />
      <div className="containerBio">
        <img src={TimB} alt="Alan Turing" />
        <div className="bio">
          <h1 className="titleB">Biography Tim Berners-Lee</h1>
          <p className="paraB">
            Tim Berners-Lee, born on June 8, 1955, is a computer scientist from
            London, England, recognized as the inventor of the World Wide Web.
            His groundbreaking work revolutionized the way information is
            accessed and shared, shaping the modern digital era. In 1989, while
            working at CERN (the European Organization for Nuclear Research),
            Berners-Lee proposed a system to facilitate information sharing
            among researchers. He envisioned a decentralized network that would
            allow computers to communicate and access data across different
            locations. Berners-Lee developed the fundamental technologies that
            underpin the web, including HTML (Hypertext Markup Language), URI
            (Uniform Resource Identifier), and HTTP (Hypertext Transfer
            Protocol). These innovations formed the basis for creating and
            accessing web pages, linking information across a global network,
            and establishing a user-friendly interface. On August 6, 1991, he
            launched the world's first website, info.cern.ch, which explained
            the World Wide Web project and provided information on how to create
            web pages. In 1994, Berners-Lee founded the World Wide Web
            Consortium (W3C) at MIT, dedicated to developing and maintaining web
            standards. He continues to advocate for an open and decentralized
            web, emphasizing principles of net neutrality, privacy, and
            universal accessibility. Berners-Lee's pioneering work has had an
            immense impact on society, facilitating global communication,
            collaboration, and access to information across diverse fields. He
            has received numerous honors and awards for his contributions to
            technology, including the Turing Award, often referred to as the
            "Nobel Prize of Computing." His commitment to an open and free
            internet has cemented his legacy as a visionary who transformed the
            way humanity connects and shares information.
          </p>
          <h2>Video</h2>
        </div>
        <iframe
          className="videos"
          width="640"
          height="360"
          src="https://youtu.be/GUrDI6OkJfU"
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

export default Tim;
