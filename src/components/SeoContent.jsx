import { Box } from "@mui/material";
import { visuallyHidden } from "@mui/utils";

const SeoContent = () => {
  return (
    <Box component="main" sx={visuallyHidden}>
      {/* Hero */}
      <section id="home">
        <h1>
          Muhammed Niyad | Full-Stack MERN Developer | React.js | Node.js |
          FastAPI | Docker
        </h1>

        <p>
          Welcome to the portfolio of Muhammed Niyad, a Full-Stack Developer
          specializing in the MERN stack from Kerala, India. I build modern,
          scalable web applications, REST APIs, AI-integrated applications,
          SaaS platforms, business workflow systems, desktop applications, and
          mobile applications using modern development technologies.
        </p>
      </section>

      {/* About */}
      <section id="about">
        <h2>About Muhammed Niyad</h2>

        <p>
          I am a Full-Stack Developer with hands-on experience building web
          applications using React.js, Node.js, Express.js, MongoDB,
          PostgreSQL, and Python FastAPI. I also work with Docker, Git,
          GitHub Actions, Flutter, Electron.js, WebSockets, and Linux.
        </p>

        <p>
          I completed my Bachelor of Computer Applications (BCA) from the
          University of Calicut and am currently pursuing an M.Sc. in Computer
          Science. My interests include full-stack development, backend
          engineering, DevOps, cloud technologies, system architecture,
          databases, and software automation.
        </p>

        <p>
          I enjoy solving real-world problems, designing maintainable software
          architectures, developing APIs, integrating databases, containerizing
          applications, and improving application performance and reliability.
        </p>
      </section>

      {/* Freelance */}
      <section id="freelance">
        <h2>Freelance Full-Stack Developer</h2>

        <p>
          I work on freelance software and web development projects, including
          responsive portfolio websites, business websites, React applications,
          API integrations, performance optimization, SEO implementation, and
          deployment.
        </p>

        <p>
          My freelance development process includes understanding client
          requirements, designing reusable interfaces, implementing features,
          testing applications, deploying projects, and incorporating client
          feedback.
        </p>
      </section>

      {/* Services */}
      <section id="services">
        <h2>Freelance Development Services</h2>

        <ul>
          <li>Full-Stack Web Application Development</li>
          <li>MERN Stack Development</li>
          <li>React.js Development</li>
          <li>Node.js and Express.js Backend Development</li>
          <li>REST API Development and Integration</li>
          <li>Python FastAPI Development</li>
          <li>MongoDB and PostgreSQL Database Development</li>
          <li>AI Integration for Web Applications</li>
          <li>SaaS Application Development</li>
          <li>Business and ERP-Style Workflow Systems</li>
          <li>Flutter Mobile Application Development</li>
          <li>Electron Desktop Application Development</li>
          <li>WebSocket and Real-Time Application Development</li>
          <li>Docker Containerization</li>
          <li>Git and GitHub Workflow Setup</li>
          <li>CI/CD and GitHub Actions</li>
          <li>Website Performance Optimization</li>
          <li>Website Maintenance and Bug Fixing</li>
        </ul>
      </section>

      {/* Skills */}
      <section id="skills">
        <h2>Technical Skills</h2>

        <h3>Programming Languages</h3>
        <p>
          JavaScript, Python, Dart, Java, C, C++, PHP, and Bash.
        </p>

        <h3>Frontend Development</h3>
        <p>
          React.js, Redux, React Hooks, HTML5, CSS3, Tailwind CSS, Material UI,
          Bootstrap, Sass, Vite, Three.js, GSAP, Axios, Fetch API, SVG, and
          responsive web design.
        </p>

        <h3>Backend Development</h3>
        <p>
          Node.js, Express.js, REST APIs, MVC architecture, middleware,
          authentication, JWT, Python FastAPI, WebSockets, API integration,
          and backend performance optimization.
        </p>

        <h3>Databases</h3>
        <p>
          MongoDB, Mongoose, PostgreSQL, and MySQL.
        </p>

        <h3>Mobile and Desktop Development</h3>
        <p>
          Flutter, Dart, Android Java, Electron.js, and desktop application
          development.
        </p>

        <h3>DevOps and Development Tools</h3>
        <p>
          Docker, Docker Compose, Git, GitHub, GitHub Actions, CI/CD workflows,
          YAML, Linux, Vercel, Render, VS Code, Postman, and Figma.
        </p>

        <h3>Additional Technologies</h3>
        <p>
          AI integration, PyTorch, WebSockets, authentication systems,
          real-time communication, SaaS development, ERP-style workflows,
          performance optimization, and software deployment.
        </p>
      </section>

      {/* Projects */}
      <section id="projects">
        <h2>Software Development Projects</h2>

        <article>
          <h3>PixelPact - AI-Powered Digital Art Platform</h3>

          <p>
            PixelPact is a full-stack digital art platform combining AI-assisted
            artwork generation, artist collaboration, blockchain-based ownership
            protection, business workflows, and real-time communication.
          </p>

          <p>
            The platform uses React.js, Node.js, Express.js, MongoDB, Python
            FastAPI, PyTorch, Flutter, Docker, REST APIs, JWT authentication,
            and WebSockets. It includes user, artist, and administrator
            workflows, artwork management, requests, complaints, feedback,
            orders, transactions, and real-time communication.
          </p>
        </article>

        <article>
          <h3>Share With Node - Local Network File Sharing</h3>

          <p>
            Share With Node is a desktop application built with Electron.js,
            Node.js, Express.js, React/Vite, and WebSockets for transferring and
            streaming files between devices over a local network without
            requiring internet-based file storage.
          </p>

          <p>
            The application includes QR-code pairing, token-based connections,
            password authentication, real-time communication, media streaming,
            and local network file sharing.
          </p>
        </article>

        <article>
          <h3>BookNesto - Full-Stack Book Platform</h3>

          <p>
            BookNesto is a full-stack book listing application with CRUD
            operations, file uploads, author-book relationships, MongoDB
            integration, dynamic EJS views, search, filtering, and backend
            application logic.
          </p>
        </article>

        <article>
          <h3>Brandism - Business Website</h3>

          <p>
            Brandism is a responsive business website developed for a branding
            and digital services business offering social media management,
            advertising, logo design, and web design services.
          </p>
        </article>

        <article>
          <h3>Scientific Calculator</h3>

          <p>
            A JavaScript-based scientific calculator implementing arithmetic
            expression parsing, postfix expression evaluation, and
            stack-based algorithms.
          </p>
        </article>

        <article>
          <h3>To-Do Application</h3>

          <p>
            A task management application supporting CRUD operations,
            drag-and-drop task organization, priorities, editing, and local
            storage persistence.
          </p>
        </article>

        <article>
          <h3>Ping Pong Game</h3>

          <p>
            A browser-based JavaScript game featuring real-time gameplay,
            animations, collision detection, keyboard interaction, and score
            tracking.
          </p>
        </article>
      </section>

      {/* Education */}
      <section id="education">
        <h2>Education</h2>

        <article>
          <h3>M.Sc. Computer Science</h3>
          <p>
            Currently pursuing M.Sc. Computer Science at College of Applied
            Science, IHRD, Kiliyanad, Kerala.
          </p>
        </article>

        <article>
          <h3>Bachelor of Computer Applications</h3>
          <p>
            Completed BCA from the University of Calicut.
          </p>
        </article>

        <article>
          <h3>Higher Secondary - Computer Science</h3>
          <p>
            Completed Higher Secondary education with Computer Science.
          </p>
        </article>
      </section>

      {/* Career Interests */}
      <section id="career">
        <h2>Career Interests</h2>

        <p>
          I am interested in opportunities involving Full-Stack Development,
          MERN Stack Development, React.js, Node.js, backend engineering,
          Python APIs, DevOps, cloud engineering, Docker, CI/CD, Linux,
          databases, and software infrastructure.
        </p>
      </section>

      {/* Resume */}
      <section id="resume">
        <h2>Resume</h2>

        <p>
          Download my latest resume to learn more about my technical skills,
          education, freelance experience, software projects, certifications,
          and development experience.
        </p>
      </section>

      {/* Certificates */}
      <section id="certificates">
        <h2>Certifications and Training</h2>

        <p>
          My certifications and training include topics related to full-stack
          development, MERN stack development, Python, software engineering,
          cloud technologies, and generative AI.
        </p>
      </section>

      {/* Contact */}
      <section id="contact">
        <h2>Contact Muhammed Niyad</h2>

        <p>
          I am available for freelance projects, software development
          opportunities, internships, and full-stack development roles involving
          React.js, Node.js, MERN Stack, Python FastAPI, backend development,
          AI integration, SaaS applications, Docker, and related technologies.
        </p>

        <address>
          <p>
            Email: muhammedniyad720@gmail.com
          </p>

          <p>
            Location: Kerala, India
          </p>

          <p>
            GitHub: https://github.com/Niyad-Labs
          </p>

          <p>
            Portfolio: https://niyad-labs.github.io/
          </p>

          <p>
            LinkedIn: https://linkedin.com/in/muhammed-niyad
          </p>
        </address>
      </section>
    </Box>
  );
};

export default SeoContent;

// ### What I changed

// **1. Updated your current education**

// * Added **M.Sc. Computer Science — currently pursuing**
// * BCA is now described as **completed**, rather than treating you as a BCA student.

// **2. Strengthened your actual professional positioning**

// Instead of making the page look like a generic beginner portfolio, it now emphasizes:

// > **Full-Stack Developer → MERN → Backend → Docker/CI/CD → DevOps direction**

// That's closer to your current career direction.

// **3. Added DevOps-related skills carefully**

// I included:

// * Docker
// * Docker Compose
// * GitHub Actions
// * CI/CD
// * YAML
// * Linux
// * Vercel
// * Render

// But I **didn't call you a DevOps Engineer**, because you're currently building toward that rather than claiming professional DevOps experience.

// **4. Improved PixelPact**

// The old description made several things sound broader than necessary. The new version focuses on what you actually built:

// * MERN
// * FastAPI
// * PyTorch
// * Flutter
// * Docker
// * WebSockets
// * JWT
// * MongoDB
// * AI-assisted generation
// * blockchain ownership protection
// * business workflows

// **5. Added freelance development**

// This is important because your portfolio isn't only academic projects anymore.

// **6. Added education and career sections**

// These give search engines additional semantic context around:

// > Muhammed Niyad + Full-Stack Developer + M.Sc. Computer Science + MERN + Kerala

// ### One important SEO point

// `visuallyHidden` content is okay for **accessibility/semantic content**, but I wouldn't use a huge amount of hidden keyword-rich text purely for Google.

// Your actual visible portfolio should contain the important information too. Search engines can treat intentionally hidden SEO text differently from genuinely accessible content.

// So this component should act as **semantic supporting content**, not as a giant hidden SEO keyword dump.

// Also, I deliberately **didn't add “1+ year experience” here**. If your portfolio's visible freelance timeline establishes that naturally, that's better than repeating an experience number throughout the hidden content.
