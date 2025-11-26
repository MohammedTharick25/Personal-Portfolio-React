import React from "react";
import "../styles/Projects.css";

function Projects() {
  return (
    <>
      <section>
        <div className="project-head">
          <h1>
            My Recent <span style={{ color: "#cd5ff8" }}>Works</span>
          </h1>
          <p>Here are a few projects I've worked on recently.</p>
        </div>
        <div className="project-container">
          <div className="inner-container">
            <div className="card">
              <img
                src="/project-imgs/FER-img.png"
                alt="FER Project"
                width="100%"
              />
              <div className="card-text">
                <h3>Facial Expression Recongnition (FER)</h3>
                <p className="project-description">
                  A concise, ready-to-use facial expression recognition tool: it
                  detects faces and uses a trained CNN to classify basic
                  emotions. Wrapped in a clean interface (with your UI), it
                  delivers reliable emotion-prediction from images or webcam
                  input — simple, effective, and ready to demo.
                </p>
                <div className="github-btns">
                  <a
                    href="https://github.com/MohammedTharick25/FER-Main-1"
                    target="_blank"
                    role="button"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                    &nbsp; GitGub
                  </a>
                  <a
                    href="https://github.com/MohammedTharick25/FER-Main-1"
                    target="_blank"
                    role="button"
                    style={{ gap: "10px", pointerEvents: "none", opacity: 0.5 }}
                  >
                    <img src="/project-imgs/code-icon.ico" alt="code icon" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <img
                src="/project-imgs/system-interface.png"
                alt="System Interface Project"
                width="100%"
              />
              <div className="card-text">
                <h3>Solo Leveling System</h3>
                <p className="project-description">
                  A gamified personal-growth web app that turns everyday tasks
                  into RPG-style “quests,” where you earn XP and track progress
                  across key life pillars (fitness, learning, productivity, and
                  wellbeing). It uses HTML, CSS, JavaScript, and local storage
                  to run entirely in-browser — no backend needed.
                </p>
                <div className="github-btns">
                  <a
                    href="https://github.com/MohammedTharick25/Solo-Leveling-System"
                    target="_blank"
                    role="button"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                    &nbsp; GitGub
                  </a>
                  <a
                    href="https://solo-leveling-system.netlify.app/"
                    target="_blank"
                    role="button"
                    style={{ gap: "10px" }}
                  >
                    <img src="/project-imgs/code-icon.ico" alt="code icon" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <img
                src="/project-imgs/weather-app-img.png"
                alt="Weather App Project"
                width="100%"
              />
              <div className="card-text">
                <h3>Weather App</h3>
                <p className="project-description">
                  A modern, responsive web-weather app built with HTML, CSS, and
                  JavaScript. It fetches real-time weather data using
                  WeatherAPI, and presents temperature, location, and weather
                  conditions via a clean UI with light/dark themes and smooth
                  transitions for all devices.
                </p>
                <div className="github-btns">
                  <a
                    href="https://github.com/MohammedTharick25/Weather-App"
                    target="_blank"
                    role="button"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                    &nbsp; GitGub
                  </a>
                  <a
                    href="https://weather-app-cloudapi.netlify.app/"
                    target="_blank"
                    role="button"
                    style={{ gap: "10px" }}
                  >
                    <img src="/project-imgs/code-icon.ico" alt="code icon" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <img
                src="/project-imgs/react-todo-img.png"
                alt="Todo App Project"
                width="100%"
              />
              <div className="card-text">
                <h3>Todo App (React)</h3>
                <p className="project-description">
                  A React-powered task manager that lets users add, track, and
                  remove to-dos through a clean, responsive UI. It uses modern
                  frontend tooling (React + Vite) and local storage to keep
                  tasks persistent — perfect for everyday productivity on web.
                </p>
                <div className="github-btns">
                  <a
                    href="https://github.com/MohammedTharick25/Todo-List"
                    target="_blank"
                    role="button"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                    &nbsp; GitGub
                  </a>
                  <a
                    href="https://mt-to-do-list.netlify.app/"
                    target="_blank"
                    role="button"
                    style={{ gap: "10px" }}
                  >
                    <img src="/project-imgs/code-icon.ico" alt="code icon" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <img
                src="/project-imgs/RPC-img.png"
                alt="RPS Project"
                width="100%"
              />
              <div className="card-text">
                <h3>Rock Paper Scissor (RPS)</h3>
                <p className="project-description">
                  A browser-based implementation of the classic Rock, Paper,
                  Scissors game using HTML, CSS, and JavaScript. It lets you
                  play against the computer, tracks your wins/losses/draws, and
                  provides a clean, responsive UI for quick rounds and fun
                  interactions.
                </p>
                <div className="github-btns">
                  <a
                    href="https://github.com/MohammedTharick25/Odin-Rock-Paper-Scissor-Game"
                    target="_blank"
                    role="button"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                    &nbsp; GitGub
                  </a>
                  <a
                    href="https://mohammedtharick25.github.io/Odin-Rock-Paper-Scissor-Game/"
                    target="_blank"
                    role="button"
                    style={{ gap: "10px" }}
                  >
                    <img src="/project-imgs/code-icon.ico" alt="code icon" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <img
                src="/project-imgs/YT-img.png"
                alt="Youtube Clone Project"
                width="100%"
              />
              <div className="card-text">
                <h3>Youtube Clone</h3>
                <p className="project-description">
                  A web-based replica of the YouTube interface: it presents
                  video thumbnails, a navigation sidebar, search bar and video
                  layout using HTML, CSS and JavaScript. It’s responsive, clean,
                  and mimics the familiar video-browsing experience.
                </p>
                <div className="github-btns">
                  <a
                    href="https://github.com/MohammedTharick25/Youtube-Clone"
                    target="_blank"
                    role="button"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                    &nbsp; GitGub
                  </a>
                  <a
                    href="https://my-u-tube-clone.netlify.app/"
                    target="_blank"
                    role="button"
                    style={{ gap: "10px" }}
                  >
                    <img src="/project-imgs/code-icon.ico" alt="code icon" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
