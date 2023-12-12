import React from "react";
import LinusT from "../images/linus-torvalds.webp";
import Navbar from "../Navbar";
import "./BiographiesAll.css";
import Footer from "../Footer";

function Linus() {
  return (
    <div>
      <Navbar />
      <div className="containerBio">
        <img src={LinusT} alt="Linus Torvalds" />
        <div className="bio">
          <h1 className="titleB">Biography Linus Torvalds</h1>
          <p className="paraB">
            Linus Torvalds, born on December 28, 1969, in Helsinki, Finland, is
            renowned for creating the Linux kernel, a fundamental component of
            the Linux operating system. His passion for programming surfaced
            during his teenage years when he gained access to a computer that
            sparked his interest in software development. While studying at the
            University of Helsinki, Torvalds started work on what would become
            the Linux kernel. In 1991, he released the first version of Linux as
            an open-source project. Unlike traditional operating systems, Linux
            was freely available, allowing users to modify and distribute it
            according to their preferences. Torvalds' decision to adopt an
            open-source approach attracted a global community of developers who
            contributed to refining and expanding Linux. His leadership and
            collaboration within this community were pivotal in establishing
            Linux as a stable and efficient operating system. It became a robust
            alternative to proprietary systems, gaining popularity across
            various platforms. The Linux kernel is widely used in servers,
            embedded systems, mobile devices, and even forms the foundation of
            the Android operating system. Torvalds' dedication to open-source
            principles and his visionary approach significantly influenced the
            development of software and computing, empowering users with
            accessible, customizable, and innovative technology.
          </p>
          <h2>Video</h2>
        </div>
        <iframe
          className="videos"
          width="640"
          height="360"
          src="https://youtu.be/o8NPllzkFhE"
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

export default Linus;
