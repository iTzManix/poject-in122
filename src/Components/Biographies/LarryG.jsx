import React from "react";
import Larry from "../images/LarryPageySergeyBrin.webp";
import Navbar from "../Navbar";
import "./BiographiesAll.css";
import Footer from "../Footer";

function LarryG() {
  return (
    <div>
      <Navbar />
      <div className="containerBio">
        <img src={Larry} alt="Larry and Sergey" />
        <div className="bio">
          <h1 className="titleB">Biography Larry Page and Sergey Brin</h1>
          <p className="paraB">
            Larry Page: Larry Page was born on March 26, 1973, in Lansing,
            Michigan, USA. He developed an interest in computers and technology
            at an early age. Page attended Stanford University, where he met
            Sergey Brin, and together they developed a search engine algorithm
            known as "PageRank." In 1998, Page and Brin founded Google in a
            garage, aiming to organize the world's information and make it
            universally accessible. Their innovative search engine rapidly
            gained popularity due to its effectiveness and speed. Under Page's
            leadership as CEO, Google expanded its services beyond search,
            introducing numerous products such as Gmail, Google Maps, Google
            Earth, and Android, among others. He implemented a corporate
            restructuring that formed Alphabet Inc. as Google's parent company
            in 2015. Page's vision and emphasis on technological innovation
            propelled Google into a multinational corporation that has
            transformed how people access and use information worldwide. Sergey
            Brin: Sergey Brin was born on August 21, 1973, in Moscow, Russia. He
            immigrated to the United States with his family at the age of six.
            Brin showed an early aptitude for mathematics and computer science.
            At Stanford University, Brin met Larry Page, and together they
            developed Google. He played a pivotal role in the creation of the
            PageRank algorithm, which revolutionized web search engines'
            efficiency. As President of Alphabet Inc., Brin focused on
            developing new technologies and initiatives, including Google Glass,
            Google X, and Google's self-driving car project (Waymo). His
            innovative thinking and commitment to exploring new frontiers in
            technology contributed significantly to Google's success and its
            evolution into Alphabet Inc. Both Larry Page and Sergey Brin have
            left an indelible mark on the technology industry and have become
            synonymous with innovation, shaping the way people interact with
            information on the internet. Their contributions have had a profound
            impact on the digital landscape, establishing Google as an integral
            part of modern life.
          </p>
          <h2>Video</h2>
        </div>
        <iframe
          className="videos"
          width="640"
          height="360"
          src="https://youtu.be/8J7TRSLf55U"
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

export default LarryG;
