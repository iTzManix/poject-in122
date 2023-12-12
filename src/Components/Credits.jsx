import React from "react";
import "./Credits.css";
import GitH from "./images/github-icon.png";
import Navbar from "./Navbar";

function Credits() {
  return (
    <>
      <div className="profile">
        <Navbar />
        <h1>Welcome to the credit section</h1>
        <div className="div-cont-prof">
          <h2>My name is Edwin Alvaro</h2>
          <h2>Mamani Choque</h2>
          <img className="imageGit" src={GitH} alt="Github" />
          <h2>My nickname</h2>
          <a href="https://github.com/iTzManix">
            <b>@iTzManix</b>
          </a>
          <h2>Parallel "A"</h2>
          <h2>C.I.</h2>
          <h2>9149197</h2>
        </div>
      </div>
    </>
  );
}

export default Credits;
