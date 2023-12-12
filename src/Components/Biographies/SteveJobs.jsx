import React from "react";
import Steve from "../images/steve-jobs.jpg";
import Navbar from "../Navbar";
import "./BiographiesAll.css";
import Footer from "../Footer";

function SteveJ() {
  return (
    <div>
      <Navbar />
      <div className="containerBio">
        <img src={Steve} alt="Steve Jobs" />
        <div className="bio">
          <h1 className="titleB">Biography Steve Jobs</h1>
          <p className="paraB">
            Steve Jobs, born on February 24, 1955, in San Francisco, California,
            was an iconic figure in the world of technology, renowned for
            co-founding Apple Inc. and contributing significantly to the
            personal computing revolution. In 1976, Jobs, along with Steve
            Wozniak and Ronald Wayne, established Apple Computer, later known as
            Apple Inc. They introduced the Apple I, followed by the Apple II,
            which proved to be a major success, helping to pave the way for the
            burgeoning personal computer industry. Jobs' charismatic leadership
            and relentless pursuit of innovation led to the development of
            groundbreaking products. Despite leaving Apple in the mid-1980s, he
            returned in 1997 to steer the company's revival. During his second
            tenure, he spearheaded the creation of revolutionary devices like
            the iMac, iPod, iPhone, and iPad, redefining multiple industries and
            elevating Apple's status as a technology powerhouse. His emphasis on
            user experience, minimalist design, and seamless integration of
            hardware and software set new benchmarks for the tech industry.
            Jobs' keynote presentations became legendary, showcasing not just
            products but also his vision and passion for innovation. While
            celebrated for his visionary leadership, Jobs was also known for his
            demanding nature and unrelenting pursuit of perfection, which
            sometimes led to internal conflicts and controversies. His untimely
            death on October 5, 2011, marked the end of an era, leaving behind a
            legacy that continues to influence technology, design, and
            entrepreneurship worldwide. Jobs' innovative spirit and dedication
            to excellence remain an inspiration for generations of innovators
            and entrepreneurs.
          </p>
          <h2>Video</h2>
        </div>
        <iframe
          className="videos"
          width="640"
          height="360"
          src="https://youtu.be/Tuw8hxrFBH8"
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

export default SteveJ;
