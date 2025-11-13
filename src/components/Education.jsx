import React from "react";
import certFrontEnd from "../assets/images/certFrontEnd.png";
import udacity from "../assets/images/udacity.png";
import degree from "../assets/images/degree.jpg";
import shecodes from "../assets/images/shecodes.png";
import "./Education.css";

export default function Education() {
  const items = [
    {
      title: "Udacity — Front End Web Developer",
      src: certFrontEnd,
      alt: "Udacity Front End Web Developer Nanodegree certificate",
      desc: "React, async JS, API integration, accessibility.",
    },
    {
      title: "Udacity — Introduction to Programming",
      src: udacity,
      alt: "Udacity Introduction to Programming certificate",
      desc: "Python fundamentals, problem-solving, debugging, data structures.",
    },
    {
      title: "Grantham University — A.S. in Computer Science",
      src: degree,
      alt: "Associate of Science in Computer Science diploma from Grantham University",
      desc: "Core CS concepts: algorithms, data structures, systems basics.",
    },
    {
      title: "SheCodes — Basics: Introduction to Coding",
      src: shecodes,
      alt: "SheCodes Basics Introduction to Coding certificate",
      desc: "HTML, CSS, JavaScript essentials; built small UI components.",
    },
  ];

  return (
    <main className="educationBody">
      <div className="educationWrapper">
        <h2 className="page-title">Education & Certifications</h2>

        <section
          className="certifications"
          aria-label="Education and certifications"
        >
          {items.map(({ title, src, alt, desc }) => (
            <figure key={title}>
              <img
                className="cert-item"
                src={src}
                alt={alt}
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <strong className="cert-title">{title}</strong>
                <br />
                <span className="cert-desc">{desc}</span>
              </figcaption>
            </figure>
          ))}
        </section>
      </div>
    </main>
  );
}
