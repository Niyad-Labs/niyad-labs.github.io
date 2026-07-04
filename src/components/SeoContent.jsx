import { Box } from "@mui/material";
import { visuallyHidden } from "@mui/utils";

const SeoContent = () => {
  return (
    <Box component="main" sx={visuallyHidden}>
      {/* Hero */}
      <section id="home">
        <h1>
          Muhammed Niyad | Full-Stack MERN Developer | React.js | Node.js |
          FastAPI | Flutter
        </h1>

        <p>
          Welcome to the portfolio of Muhammed Niyad, a Full-Stack MERN
          Developer from Kerala, India. I design and develop scalable web
          applications, AI-powered SaaS platforms, ERP-style business systems,
          desktop applications, mobile applications, and RESTful APIs using
          modern technologies.
        </p>
      </section>

      {/* About */}
      <section id="about">
        <h2>About Me</h2>

        <p>
          I specialize in building modern software solutions using React.js,
          Node.js, Express.js, MongoDB, PostgreSQL, FastAPI, Docker, Flutter,
          Electron.js, and Three.js. I enjoy solving real-world problems,
          designing scalable architectures, and developing production-oriented
          applications.
        </p>
      </section>

      {/* Services */}
      <section id="services">
        <h2>Freelance Services</h2>

        <ul>
          <li>Full-Stack Web Application Development</li>
          <li>MERN Stack Development</li>
          <li>React.js Development</li>
          <li>Node.js & Express.js Backend Development</li>
          <li>REST API Development & Integration</li>
          <li>FastAPI Development</li>
          <li>AI Integration into Web Applications</li>
          <li>ERP & Business Workflow Systems</li>
          <li>SaaS Product Development</li>
          <li>Database Design (MongoDB & PostgreSQL)</li>
          <li>Flutter Mobile App Development</li>
          <li>Electron Desktop Application Development</li>
          <li>Docker Containerization</li>
          <li>Performance Optimization</li>
          <li>Website Maintenance & Bug Fixing</li>
        </ul>
      </section>

      {/* Skills */}
      <section id="skills">
        <h2>Technical Skills</h2>

        <p>
          JavaScript, React.js, Redux, HTML5, CSS3, Material UI, Three.js,
          GSAP, Node.js, Express.js, FastAPI, Python, MongoDB, PostgreSQL,
          MySQL, Docker, Flutter, Electron.js, Git, GitHub, REST APIs,
          WebSockets, JWT Authentication, MVC Architecture, Axios, Fetch API,
          Responsive Design, SaaS Development, ERP Systems, AI Integration,
          Linux.
        </p>
      </section>

      {/* Projects */}
      <section id="projects">
        <h2>Projects</h2>

        <article>
          <h3>PixelPact</h3>

          <p>
            PixelPact is an AI-powered SaaS platform for digital art
            collaboration featuring blockchain ownership, ERP-style order and
            transaction management, AI-assisted artwork generation, artist
            collaboration, admin dashboard, Flutter mobile application,
            FastAPI-powered AI services, Docker deployment, and real-time
            communication using WebSockets.
          </p>
        </article>

        <article>
          <h3>Share With Node</h3>

          <p>
            A cross-platform desktop application for high-speed local network
            file sharing with QR-code pairing, secure authentication, real-time
            media streaming, GitHub Releases distribution, and optimized backend
            performance.
          </p>
        </article>

        <article>
          <h3>BookNesto</h3>

          <p>
            A full-stack book listing platform featuring CRUD operations, file
            uploads, author-book relationships, MongoDB integration, dynamic EJS
            views, search, and filtering.
          </p>
        </article>

        <article>
          <h3>Brandism</h3>

          <p>
            Developed a responsive business website for a branding agency
            providing social media management, logo design, advertising, and web
            design services.
          </p>
        </article>

        <article>
          <h3>Scientific Calculator</h3>

          <p>
            JavaScript calculator implementing postfix expression evaluation and
            stack-based algorithms.
          </p>
        </article>

        <article>
          <h3>To-Do Application</h3>

          <p>
            Task management application supporting CRUD operations, drag-and-drop,
            priorities, editing, and local storage persistence.
          </p>
        </article>

        <article>
          <h3>Ping Pong Game</h3>

          <p>
            Browser-based JavaScript game featuring real-time gameplay,
            animations, collision detection, and score tracking.
          </p>
        </article>
      </section>

      {/* Resume */}
      <section id="resume">
        <h2>Resume</h2>

        <p>
          Download my latest resume showcasing my technical skills, project
          experience, education, and software development expertise.
        </p>
      </section>

      {/* Certificates */}
      <section id="certificates">
        <h2>Certificates</h2>

        <p>
          View certifications and training completed in Full-Stack Development,
          MERN Stack, Python, Flutter, and software engineering technologies.
        </p>
      </section>

      {/* Contact */}
      <section id="contact">
        <h2>Contact</h2>

        <p>
          Available for freelance projects, internships, full-time software
          engineering roles, MERN Stack development, backend development,
          React.js development, AI integration, and SaaS product development.
        </p>

        <address>
          <p>Email: muhammedniyad720@gmail.com</p>
          <p>Location: Kerala, India</p>
          <p>GitHub: https://github.com/Niyad-Labs</p>
          <p>Portfolio: https://niyad-labs.github.io/</p>
          <p>LinkedIn: https://linkedin.com/in/muhammed-niyad</p>
        </address>
      </section>
    </Box>
  );
};

export default SeoContent;