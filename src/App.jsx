import { useState } from 'react'
import './App.css'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
} from 'react-icons/fa'

function App() {
  const [theme, setTheme] = useState('light')

  return (
    <div className={`portfolio ${theme}`}>
      <header className="navbar">
        <a href="#home" className="logo">
          <FaCode /> Taher<span>.</span>
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="theme-switcher">
          <button onClick={() => setTheme('light')}>☀️</button>
          <button onClick={() => setTheme('dark')}>🌙</button>
          <button onClick={() => setTheme('hacker')}>💻</button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <p className="greeting">HELLO, 👋</p>


<h1>
  I'm <span>Taher Khan</span>
</h1>

          <h2>React Developer & Aspiring Software Engineer</h2>

          <p className="hero-description">
            MCA graduate and aspiring developer passionate about
            building useful, user-friendly web applications.
            I enjoy learning new technologies and solving problems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Projects
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
            <a
  href="/resume.pdf"
  download="Parchuru_Taher_Khan_Resume (2).pdf"
  className="secondary-button"
>
  Download Resume
</a>
          </div>

          <div className="social-links">
            <a
  href="mailto:taherkhanparchuru@gmail.com"
  aria-label="Email"
  title="Send me an email"
>
  <FaEnvelope />
</a>
            <a
              href="https://github.com/taherkhan879"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/parchuru-taher-khan-a26697266/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a href="#contact" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </section>

        <section id="about" className="section">
          <p className="section-label">GET TO KNOW ME</p>
          <h2>About Me</h2>

          <p>
            I'm an MCA graduate from Kallam Haranadhareddy
            Institute of Technology. I'm a fresher looking for
            opportunities to grow as a software developer or
            software test engineer. I enjoy creating web
            applications and improving my technical skills.
          </p>
        </section>

        <section id="skills" className="section">
          <p className="section-label">WHAT I WORK WITH</p>
          <h2>Technical Skills</h2>

          <div className="skills-grid">
            {[
              'HTML5',
              'CSS3',
              'JavaScript',
              'React',
              'SQL / MySQL',
              'C Programming',
              'Basic Java',
              'Git & GitHub',
              'Manual Testing',
              'Functional Testing',
            ].map(skill => (
              <div className="skill-card" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <p className="section-label">MY BACKGROUND</p>
          <h2>Education</h2>

          <div className="info-card">
            <h3>Master of Computer Applications (MCA)</h3>
            <p>Kallam Haranadhareddy Institute of Technology</p>
            <p>Graduate</p>
          </div>
        </section>

        <section id="projects" className="section">
          <p className="section-label">WHAT I'VE BUILT</p>
          <h2>Featured Projects</h2>

          <div className="project-grid">
            <article className="project-card">
              <span className="project-number">PROJECT 01</span>
              <h3>Gym Membership Management System</h3>

              <p>
                A web application for managing gym members,
                membership plans, trainer assignments,
                attendance, and payment records.
              </p>

              <div className="project-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>MySQL</span>
              </div>

              <a
                href="https://github.com/taherkhan879"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                <FaGithub /> View GitHub
              </a>
            </article>

            <article className="project-card">
              <span className="project-number">PROJECT 02</span>
              <h3>Personal Portfolio</h3>

              <p>
                A responsive portfolio built with React to
                showcase my skills, education, projects, and
                professional profiles.
              </p>

              <div className="project-tags">
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
              </div>

              <span className="project-link">
                Currently Building
              </span>
            </article>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <p className="section-label">LET'S CONNECT</p>
          <h2>Contact Me</h2>

          <p>
            I'm looking for opportunities to start my career
            and contribute to a development or testing team.
          </p>

<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=YOUR_GMAIL@gmail.com"
  target="_blank"
  rel="noreferrer"
  className="primary-button"
>
  <FaEnvelope />
  Email Me
</a>
          <a
            href="https://github.com/taherkhan879"
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            <FaGithub /> GitHub Profile
          </a>

          <a
            href="https://www.linkedin.com/in/parchuru-taher-khan-a26697266/"
            target="_blank"
            rel="noreferrer"
            className="secondary-button contact-link"
          >
            <FaLinkedin /> LinkedIn Profile
          </a>
        </section>
      </main>

      <footer>
        <p>Designed & Built by Taher Khan</p>
      </footer>
    </div>
  )
}

export default App