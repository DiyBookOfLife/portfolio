import { useEffect } from "react";
import { Link } from "react-router-dom";
import WJProject from "../assets/images/WJProject.png";
import LPProject from "../assets/images/LPProject.png";
import FacePreview from "../assets/images/face-recognition.png";
import "./Home.css";

function Home() {
  useEffect(() => {
    const dropdown = document.getElementById("topic-select");
    const handleChange = (e) => {
      const selectedTopic = e.target.value;
      document
        .querySelector(".box-container")
        ?.scrollIntoView({ behavior: "smooth" });

      const cards = document.querySelectorAll(".flip-card");
      cards.forEach((card) => {
        const cardInner = card.querySelector(".flip-card-inner");
        cardInner.classList.remove("flipped");
        if (card.dataset.topic === selectedTopic) {
          cardInner.classList.add("flipped");
        }
        setTimeout(() => cardInner.classList.remove("flipped"), 3000);
      });
    };
    dropdown?.addEventListener("change", handleChange);
    return () => dropdown?.removeEventListener("change", handleChange);
  }, []);

  function highlightSkill(topic) {
    const dropdown = document.getElementById("topic-select");
    if (!dropdown) return;
    dropdown.value = topic;
    dropdown.dispatchEvent(new Event("change", { bubbles: true }));
  }

  return (
    <main id="main" className="main-body">
      <div className="container">
        <h2 className="main-title">Frontend Software Engineer</h2>
        <p className="hero-subline">
          React • JavaScript • APIs — I build fast, accessible web apps.
        </p>

        {/* Hero CTAs */}
        <div className="hero-ctas">
          <a href="#projects" className="btn">
            Projects
          </a>
          <a href="#skills" className="btn">
            Skills
          </a>
          <Link to="/contact" className="btn">
            Contact
          </Link>{" "}
          {/* changed from btn-outline */}
        </div>

        {/* About */}
        <section id="about" className="about-me">
          <p>
            I’m a Frontend Software Engineer with a strong foundation in HTML,
            CSS, JavaScript, and React, backed by years of experience in IT
            support. I specialize in building clean, accessible, and responsive
            web applications that put users first.
          </p>
          <p>
            Passionate about modern frameworks and best practices, I enjoy
            creating dynamic, interactive interfaces that solve real-world
            problems. I’m eager to bring my technical skills and problem-solving
            mindset to a collaborative engineering team where I can deliver
            meaningful impact and continue growing as a developer.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="projects-section">
          <h2 id="projects-title">Projects</h2>
          <div className="projects-container">
            {/* Webcam Face Recognition */}
            <div className="project-card">
              <div className="project-text">
                <h3>Webcam Face Recognition</h3>
                <p className="project-desc">
                  Real-time face detection from the webcam with on-screen
                  overlays. Built for fast, in-browser inference using React +
                  TypeScript.
                </p>
                <div className="tags">
                  {[
                    "React",
                    "TypeScript",
                    "Webcam/WebRTC",
                    "Canvas",
                    "Face Detection",
                  ].map((t) => (
                    <button
                      key={t}
                      className="tag"
                      type="button"
                      onClick={() => highlightSkill(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <div className="actions">
                  <a
                    href="https://github.com/DiyBookOfLife/webcam-face-recognition"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://webcam-face-recognition-wine.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
              <a
                className="project-image-link"
                href="https://webcam-face-recognition-wine.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={FacePreview}
                  alt="Webcam Face Recognition app—live camera with face boxes."
                />
              </a>
            </div>

            {/* Weather Journal App */}
            <div className="project-card">
              <div className="project-text">
                <h3>Weather Journal App</h3>
                <p className="project-desc">
                  Fetches weather data via OpenWeatherMap and dynamically
                  updates the UI with user input.
                </p>
                <div className="tags">
                  {["APIs & Fetching Data", "Express", "JavaScript"].map(
                    (t) => (
                      <button
                        key={t}
                        className="tag"
                        type="button"
                        onClick={() => highlightSkill(t)}
                      >
                        {t}
                      </button>
                    )
                  )}
                </div>
                <div className="actions">
                  <a
                    href="https://github.com/DiyBookOfLife/weather-journal-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://diybookoflife.github.io/weather-journal-app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
              <a
                className="project-image-link"
                href="https://diybookoflife.github.io/weather-journal-app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={WJProject} alt="Weather Journal App UI." />
              </a>
            </div>

            {/* Landing Page */}
            <div className="project-card">
              <div className="project-text">
                <h3>Landing Page</h3>
                <p className="project-desc">
                  Responsive landing page built with semantic HTML and CSS
                  grid/flexbox for a polished first impression.
                </p>
                <div className="tags">
                  {["Responsive Web Design", "HTML5", "CSS3"].map((t) => (
                    <button
                      key={t}
                      className="tag"
                      type="button"
                      onClick={() => highlightSkill(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <div className="actions">
                  <a
                    href="https://github.com/DiyBookOfLife/landing-project"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://diybookoflife.github.io/landing-project/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
              <a
                className="project-image-link"
                href="https://diybookoflife.github.io/landing-project/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={LPProject} alt="Landing page preview." />
              </a>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="skills-section">
          <h2>Skills</h2>
          <div className="box-container">
            {[
              {
                topic: "JavaScript",
                desc: "DOM manipulation, event handling, async/await & Promises, dynamic UIs.",
              },
              {
                topic: "Responsive Web Design",
                desc: "Flexbox, Grid, media queries for seamless experiences.",
              },
              {
                topic: "Version Control",
                desc: "Branches, PRs, commits—clean collaboration with Git & GitHub.",
              },
              {
                topic: "APIs & Fetching Data",
                desc: "REST APIs, fetch/JSON, dynamic updates.",
              },
              {
                topic: "UI/UX Principles",
                desc: "Accessibility, visual hierarchy, smooth interaction.",
              },
              {
                topic: "Node.js & Express",
                desc: "Lightweight servers, routes, front-end ↔ server wiring.",
              },
              {
                topic: "Sass & Bootstrap",
                desc: "Utility classes, modular Sass, scalable styles.",
              },
              {
                topic: "React",
                desc: "Component UIs, state, reusable logic, SPAs.",
              },
            ].map((card) => (
              <div
                key={card.topic}
                className="flip-card"
                data-topic={card.topic}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">{card.topic}</div>
                  <div className="flip-card-back">{card.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;
