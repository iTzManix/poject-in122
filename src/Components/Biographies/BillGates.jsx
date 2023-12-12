import React from "react";
import Bill from "../images/bill-gates.jpg";
import Navbar from "../Navbar";
import "./BiographiesAll.css";
import Footer from "../Footer";

function BillGates() {
  return (
    <div>
      <Navbar />
      <div className="containerBio">
        <img src={Bill} alt="Alan Turing" />
        <div className="bio">
          <h1 className="titleB">Biography Bill Gates</h1>
          <p className="paraB">
            Bill Gates, born on October 28, 1955, in Seattle, Washington, is a
            renowned American business magnate, software developer, and
            philanthropist. He co-founded Microsoft Corporation, one of the
            world's largest and most influential technology companies. Gates
            demonstrated an early interest in computer programming during his
            school years. In 1975, together with his childhood friend Paul
            Allen, Gates founded Microsoft. Their vision was to develop software
            for the emerging personal computer market. The company's
            breakthrough came when they acquired the rights to an operating
            system, eventually creating MS-DOS, which became a fundamental part
            of IBM's personal computer. Microsoft's success continued with the
            development of Windows, a graphical user interface for PCs, which
            became the dominant operating system globally. Gates' strategic
            business decisions, including licensing agreements, propelled
            Microsoft to unprecedented success, making him one of the wealthiest
            individuals in the world. Throughout his career, Gates has been a
            visionary in foreseeing the potential of technology. He stepped down
            as CEO of Microsoft in 2000 and dedicated more time to philanthropy.
            Along with his wife, Melinda Gates, he established the Bill &
            Melinda Gates Foundation, which focuses on addressing global health
            issues, poverty alleviation, education, and access to information
            technology. Gates has received numerous awards and honors for his
            contributions to technology and philanthropy, including being listed
            among the world's most influential people. His innovative spirit,
            entrepreneurial mindset, and commitment to using his wealth for
            global betterment continue to define his legacy.
          </p>
          <h2>Video</h2>
        </div>
        <iframe
          className="videos"
          width="640"
          height="360"
          src="https://youtu.be/_R8bI4ZzSZ8"
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

export default BillGates;
