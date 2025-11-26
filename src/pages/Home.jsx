import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <section className="home-head">
        <div className="home-name">
          <h1 className="heading">
            Hi There! <span className="wave">👋🏻</span>
          </h1>
          <h1 className="heading-name">
            I'M <strong className="main-name">Mohammed Tharick</strong>
          </h1>
          <h2 className="heading-role">Frontend Developer</h2>
        </div>
        <div className="image">
          <img
            src="/home-main.svg"
            alt="home pic"
            width="450px"
            className="home-img"
          />
        </div>
      </section>
      <section className="home-middle about">
        <div className="self-intro">
          <h1
            style={{
              fontSize: "2.6em",
              paddingLeft: "10%",
              paddingBottom: "5%",
            }}
          >
            LET ME{" "}
            <span
              style={{
                color: "#c770f0",
                fontWeight: "400",
                fontStyle: "normal",
              }}
            >
              {" "}
              INTRODUCE{" "}
            </span>{" "}
            MYSELF
          </h1>
          <div className="home-para">
            <p>
              I’m a web developer who enjoys turning ideas into{" "}
              <span>clean, functional applications.</span> I’ve spent time
              building different websites to understand how real-world systems
              behave, and I love creating smooth, responsive user experiences.
              <br />
              <br />
              I’m skilled in <span>JavaScript, HTML, CSS, React,</span> and
              <span>Node.js,</span> and I work comfortably across both{" "}
              <span>frontend</span>
              and <span>backend.</span> I also use <span>Python</span> and{" "}
              <span>SQL</span>
              when projects need data handling or extra logic.
              <br />
              <br />
              I’m especially interested in developing modern web apps and
              exploring new ways to build dynamic, interactive systems. Whenever
              possible, I enjoy working with <span>React</span> and{" "}
              <span>Node.js</span>
              because they let me build fast and iterate even faster.
            </p>
          </div>
        </div>

        <div className="self-img">
          <img src="/home-profile-img.svg" alt="profile image" />
        </div>
      </section>
      <section>
        <div></div>
        <div></div>
        <div></div>
      </section>
    </>
  );
}

export default Home;
