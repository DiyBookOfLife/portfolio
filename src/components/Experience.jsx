import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <main className="experiencePage">
      <div className="experienceContent">
        <h2>Work Experience</h2>

        {/* Advanced Technical Support Specialist */}
        <section className="experienceItem">
          <h3>AT&amp;T — Premier Service Consultant</h3>
          <p className="date">2020 – 2025</p>
          <ul>
            <li>
              Performed root cause analysis on recurring issues and recommended
              process improvements, reducing repeat problems for customers.
            </li>
            <li>
              Assisted agents with escalated billing and technical cases,
              applying clear communication and conflict resolution to reach
              positive outcomes.
            </li>
            <li>
              Delivered technical support across mobile devices, operating
              systems, and network connectivity, reinforcing analytical and
              troubleshooting skills.
            </li>
          </ul>
        </section>

        {/* Technical Support Specialist */}
        <section className="experienceItem">
          <h3>AT&amp;T — Advanced Technical Support Specialist</h3>
          <p className="date">2016 – 2020</p>
          <ul>
            <li>
              Resolved 40–60 mobile hardware, OS, and connectivity issues
              weekly, building expertise in systematic problem-solving.
            </li>
            <li>
              Guided customers through complex billing inquiries and account
              updates, translating technical details into user-friendly
              explanations.
            </li>
            <li>
              Collaborated with cross-functional teams to report system bugs and
              provide feedback, strengthening teamwork and documentation skills.
            </li>
          </ul>
        </section>

        {/* Customer Service Representative */}
        <section className="experienceItem">
          <h3>AT&amp;T — Customer Service Representative</h3>
          <p className="date">2015 – 2016</p>
          <ul>
            <li>
              Supported account setup, billing, and service inquiries as
              first-line contact, ensuring a smooth customer experience.
            </li>
            <li>
              De-escalated challenging situations with empathy and clarity,
              developing strong interpersonal and communication skills.
            </li>
            <li>
              Consistently achieved or exceeded key performance goals,
              demonstrating reliability and accountability in a fast-paced
              environment.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Experience;
