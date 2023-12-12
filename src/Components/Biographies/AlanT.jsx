import React from "react";
import Alan from "../images/Alan-Turing.jpg";
import Navbar from "../Navbar";
import "./BiographiesAll.css";
import Footer from "../Footer";

function AlanTuring() {
  return (
    <div>
      <Navbar />
      <div className="containerBio">
        <img src={Alan} alt="Alan Turing" />
        <div className="bio">
          <h1 className="titleB">Biography Alan Turing</h1>
          <p className="paraB">
            Ada Augusta Byron was born in London in 1815. She was the daughter
            of the wealthy Annabella Milbanke and the poet Lord Byron. The
            marriage did not last long and, when Ada was one month old, her
            mother abandoned her husband. Young Ada received mathematics and
            science lessons in an attempt, by her mother, to eradicate the
            inheritance of poetic madness that she carried in her genes. Her
            childhood was spent between tutors and studies, burdened by poor
            health that would carry throughout her entire life. Although in the
            19th century it was not common for women to study science, Ada was
            lucky to have great teachers, such as the mathematician Augustus De
            Morgan or the Scottish astronomer Mary Somerville. It was precisely
            Sommerville who introduced him to the mathematician Charles Babbage,
            with whom he established a great friendship and a fruitful
            collaboration. In 1835 Ada married Baron William King, who later
            became Earl of Lovelace. During his marriage he continued studying
            mathematics. After the birth of her third and last child, Ada began
            collaborating with Babbage on the analytical engine. His passion for
            mathematics and his unconventional personality were not always well
            regarded at court. He became fond of gambling and in 1851 he tried
            to create a mathematical model with some friends to make bets right.
            In the last years of his life his health deteriorated seriously,
            until he died in 1852, shortly before his 37th birthday.
          </p>
          <h2>Video</h2>
        </div>
        <iframe
          className="videos"
          width="640"
          height="360"
          src="https://youtu.be/gtRLmL70TH0"
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

export default AlanTuring;
