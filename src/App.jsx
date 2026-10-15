import { useState } from 'react'
import './App.css'

const projects = [
  {
    number: '01',
    category: 'PRODUCT RESEARCH',
    title: 'Making presentation design easier',
    description:
      'Exploring how Canva can help students find and customize presentation designs with more confidence.',
    contribution:
      'Interviewed two BYU students, compared their experiences, and developed an outcome-based roadmap.',
    takeaway:
      'The interviews surfaced two different challenges: choosing from too many designs and formatting slides from scratch.',
    tags: ['User interviews', 'Product strategy', 'Roadmapping'],
  },
  {
    number: '02',
    category: 'WEBSITE MANAGEMENT',
    title: 'Connecting people with youth resources',
    description:
      'Managing website content for the BYU Strong Youth Project, which shares resources for youth development.',
    contribution:
      'Created and organized pages in Brightspot CMS to make educational resources easier to find and support event promotion and community outreach.',
    takeaway:
      'Focused on organizing information so visitors can find relevant programs and resources more easily.',
    tags: ['Brightspot CMS', 'Content organization', 'Web design'],
  },
  {
    number: '03',
    category: 'QUALITY ASSURANCE',
    title: 'Testing public digital services',
    description:
      'Supporting the State of Utah’s digital services through quality assurance and user experience work.',
    contribution:
      'Tested 50+ MyUtah user scenarios and 30+ AI chatbot scenarios, and created 3+ Figma mockups to simplify navigation and access to state services.',
    takeaway:
      'Practiced translating user issues into clear feedback that could support product improvements.',
    tags: ['QA testing', 'Figma', 'User experience'],
  },
]

const experience = [
  {
    role: 'Website Manager',
    organization: 'BYU · Strong Youth Project',
    date: 'Aug 2026 – Present',
    description:
      'Create and organize pages in Brightspot CMS, making educational resources easier to find and supporting event promotion and community outreach.',
  },
  {
    role: 'IT Infrastructure Teaching Assistant',
    organization: 'BYU · IS 404',
    date: 'Aug 2026 – Present',
    description:
      'Mentor students in Linux and deployment labs to strengthen independent problem solving, and collaborate with faculty to support student success.',
  },
  {
    role: 'Technical Support Representative Intern',
    organization: 'The Church of Jesus Christ of Latter-day Saints',
    date: 'Apr – Aug 2026',
    description:
      'Configured and deployed 100+ laptops and software systems across church and temple operations. Resolved 100+ Tier 2 hardware, software, Microsoft 365, and account issues.',
  },
  {
    role: 'Division of Technology Services Intern',
    organization: 'State of Utah · Hybrid',
    date: 'Jan – Apr 2026',
    description:
      'Tested 50+ MyUtah user scenarios, created 3+ Figma mockups, and evaluated 30+ AI chatbot scenarios to identify usability issues and improve automated support.',
  },
  {
    role: 'Volunteer Representative',
    organization: 'The Church of Jesus Christ of Latter-day Saints · Singapore',
    date: 'Nov 2022 – Jun 2024',
    description:
      'Served as a Sister Training Leader for 8.5 months, leading meetings every six weeks to strengthen volunteer relationships and confidence. Provided weekly community service, including teaching English to 20 students from China.',
  },
]

const skills = [
  { title: 'Data & analysis', tools: 'Python, SQL, data visualization, AI-assisted analysis, prompt engineering' },
  { title: 'Design & content', tools: 'Figma, Brightspot CMS, website content organization' },
  { title: 'Technology & support', tools: 'Linux, IT infrastructure, Microsoft 365, quality assurance' },
]

function App() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Sabrina Wong home">
          sabrina<span>.</span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header-contact" href="#contact">
          Let’s connect 
        </a>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section id="home" className="hero section-width" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">SABRINA WONG · PROVO, UTAH</p>
            <h1 id="hero-title">
              People first.
              <br />
              <span>Thoughtful technology.</span>
            </h1>
            <p className="hero-description">
              I’m a Master of Information Systems Management student at BYU,
              interested in product management and building digital
              experiences that make life a little easier.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work 
              </a>
              <a className="text-link" href="/sabrina-wong-resume.pdf" download>
                Download resume 
              </a>
            </div>
          </div>

          <aside className="intro-card" aria-label="My approach">
            <div className="monogram" aria-hidden="true">sw.</div>
            <p className="card-eyebrow">A LITTLE CURIOSITY GOES A LONG WAY</p>
            <h2>Understand the people.<br />Then build the solution.</h2>
            <p>
              Bringing together technical experience, creative thinking,
              and a love for helping others.
            </p>
            <div className="card-footer">
              <span className="status-dot" aria-hidden="true" />
              Exploring opportunities in product & technology
            </div>
          </aside>
        </section>

        <div className="focus-strip">
          <div className="section-width focus-content">
            <span>Product thinking</span>
            <span>User research</span>
            <span>Technical problem solving</span>
            <span>Clear communication</span>
          </div>
        </div>

        <section id="work" className="section-width content-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">SELECTED WORK</p>
              <h2>Curiosity turned into action.</h2>
            </div>
            <p>
              A few ways I’ve explored problems, supported users,
              and put ideas into practice.
            </p>
          </div>

          <div className="featured-project-grid">
          <article className="featured-project" aria-labelledby="control-theory-title">
            <div className="featured-project-banner" aria-hidden="true">
              <span className="featured-label">CLIENT WEBSITE</span>
              <strong>Control Theory</strong>
            </div>
            <div className="featured-project-copy">
              <p className="eyebrow">CLIENT WORK · WEBSITE DEVELOPMENT</p>
              <h3 id="control-theory-title">Control Theory Calisthenics</h3>
              <p className="featured-summary">A website I built for my friend and client Hunter Stein, a calisthenics athlete who shares his passion online. The site brings together training equipment, apparel, and camp information in one place.</p>
              <details className="featured-details">
                <summary className="project-toggle">Project details</summary>
                <dl className="project-case-study">
                <div>
                  <dt>The goal</dt>
                  <dd>Give Hunter’s audience a central place to discover Control Theory Calisthenics, explore its products, and learn about in-person training.</dd>
                </div>
                <div>
                  <dt>My contribution</dt>
                  <dd>Built the website for Hunter, helping him establish an online storefront for his calisthenics brand.</dd>
                </div>
                <div>
                  <dt>The experience</dt>
                  <dd>Visitors can browse equipment, accessories, and clothing, learn about Hunter, and find camp and contact information.</dd>
                </div>
                </dl>
              </details>
              <ul className="tags featured-tags" aria-label="Project focus">
                {['Client work', 'Website development', 'E-commerce', 'Shopify'].map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              <div className="featured-project-links">
                <a className="button button-primary" href="https://controltheorycal.com/" target="_blank" rel="noopener noreferrer">View client website <span className="sr-only">(opens in a new tab)</span></a>
                <a className="text-link" href="https://www.instagram.com/hunterstein_wk/" target="_blank" rel="noopener noreferrer">@hunterstein_wk <span className="sr-only">on Instagram (opens in a new tab)</span></a>
              </div>
            </div>
          </article>

          <article className="featured-project" aria-labelledby="racing-title">
            <div className="featured-project-banner" aria-hidden="true">
              <span className="featured-label">INDEPENDENT PROJECT</span>
              <strong>Ang Mo Racing</strong>
            </div>
            <div className="featured-project-copy">
              <p className="eyebrow">FEATURED PROJECT · WEBSITE DEVELOPMENT</p>
              <h3 id="racing-title">Ang Mo Racing</h3>
              <p className="featured-summary">Ang Mo Racing started as my husband’s hobby: sharing car videos on Instagram. When he wanted to sell shirts online, I built a website for him independently, turning his idea into an apparel storefront.</p>
              <details className="featured-details">
                <summary className="project-toggle">Project details</summary>
                <dl className="project-case-study">
                <div>
                  <dt>The goal</dt>
                  <dd>Create a place for his Instagram audience to shop for shirts, with a clear path to browse the collection, choose a size, and review their order.</dd>
                </div>
                <div>
                  <dt>My contribution</dt>
                  <dd>Built the storefront pages, product selection, and cart controls, including quantity changes, item removal, and totals. Used browser storage to keep the cart between pages.</dd>
                </div>
                <div>
                  <dt>Behind the storefront</dt>
                  <dd>Wrote a Node.js and Express backend with inventory checks and a checkout endpoint to process orders and update stock.</dd>
                </div>
                </dl>
              </details>
              <ul className="tags featured-tags" aria-label="Technologies used">
                {['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express'].map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              <div className="featured-project-links">
                <a className="button button-primary" href="https://ang-mo-racing.vercel.app" target="_blank" rel="noopener noreferrer">View site <span className="sr-only">(opens in a new tab)</span></a>
                <a className="text-link" href="https://github.com/sabrina0903/AngMoRacing" target="_blank" rel="noopener noreferrer">View source code <span className="sr-only">(opens in a new tab)</span></a>
                <a className="text-link" href="https://www.instagram.com/angmoracing/" target="_blank" rel="noopener noreferrer">@angmoracing <span className="sr-only">on Instagram (opens in a new tab)</span></a>
              </div>
            </div>
          </article>

          </div>

          <div className="project-grid">
            {projects.map((project, index) => {
              const isOpen = activeProject === index

              return (
                <article className="project-card" key={project.number}>
                  <div className={`project-visual visual-${index + 1}`}>
                    <span className="project-number">{project.number}</span>
                    <div className="visual-content" aria-hidden="true">
                      {index === 0 && (
                        <>
                          <span className="visual-label">FROM INSIGHT TO DIRECTION</span>
                          <div className="roadmap-preview">
                            <span>Listen</span><span>Learn</span><span>Prioritize</span>
                          </div>
                        </>
                      )}
                      {index === 1 && (
                        <div className="website-preview">
                          <div className="preview-nav"><i /><i /><i /></div>
                          <div className="preview-title">Stronger youth.<br />Stronger communities.</div>
                          <div className="preview-lines"><i /><i /></div>
                        </div>
                      )}
                      {index === 2 && (
                        <div className="testing-preview">
                          <span>Thoughtful testing</span>
                          <div>✓ Workflows</div>
                          <div>✓ Usability</div>
                          <div>✓ Clear feedback</div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="project-body">
                    <p className="eyebrow">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="tags">
                      {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>

                    <button
                      className="project-toggle"
                      type="button"
                      aria-label={`${isOpen ? 'Close details' : 'View my contribution'}: ${project.title}`}
                      onClick={() => setActiveProject(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={`project-details-${index}`}
                    >
                      {isOpen ? 'Close details' : 'My contribution'}
                      <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
                    </button>

                      <div className="project-details" id={`project-details-${index}`} hidden={!isOpen}>
                        <h4>What I did</h4>
                        <p>{project.contribution}</p>
                        <h4>What I learned</h4>
                        <p>{project.takeaway}</p>
                      </div>
                  </div>
                </article>
              )
            })}
          </div>
          <aside className="academic-work" aria-labelledby="academic-work-title">
            <div>
              <p className="eyebrow">ACADEMIC WORK</p>
              <h3 id="academic-work-title">School projects & INTEX</h3>
              <p>My academic work includes school projects and INTEX projects built in collaboration with friends. Explore my GitHub for examples of my programming and coursework.</p>
            </div>
            <a className="button button-secondary" href="https://github.com/sabrina0903" target="_blank" rel="noopener noreferrer">Explore my GitHub <span className="sr-only">(opens in a new tab)</span></a>
          </aside>
        </section>

        <section id="experience" className="experience-section">
          <div className="section-width experience-layout">
            <div>
              <p className="eyebrow">EXPERIENCE</p>
              <h2>Learning by doing.<br />Growing through people.</h2>
              <p className="section-intro">
                My experience spans website management, technical support,
                quality assurance, and teaching. Across each role, I enjoy making complicated
                things easier to understand.
              </p>
            </div>

            <div className="experience-list">
              {experience.map((item) => (
                <article className="experience-item" key={item.role}>
                  <p className="experience-date">{item.date}</p>
                  <h3>{item.role}</h3>
                  <p className="organization">{item.organization}</p>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-width content-section about-layout">
          <div className="about-note">
            <span className="note-star" aria-hidden="true">✳</span>
            <p>A technical mind.<br />A creative side.<br />A people person.</p>
            <span>That’s a little bit of me.</span>
          </div>

          <div className="about-copy">
            <p className="eyebrow">BEYOND THE RESUME</p>
            <h2>Hi, I’m Sabrina.</h2>
            <p>
              I grew up in Malaysia and moved back to Utah when I was
              fifteen. Experiencing different cultures helped shape how
              I connect with people and approach new situations.
            </p>
            <p>
              Today, I’m studying Information Systems at BYU and exploring
              the intersection of people, business, and technology.
              I enjoy asking questions, understanding what someone needs,
              and working with others to find a useful solution.
            </p>
            <p>
              Outside of work and school, you’ll usually find me dancing,
              playing piano, or planning my next trip.
            </p>

            <div className="about-facts">
              <div><strong>BYU Marriott School of Business</strong><span>Master of Information Systems Management · Expected April 2028</span></div>
              <div><strong>GPA: 3.85 · Dean’s List, Fall 2025</strong><span>Academic, Multicultural, and Subway Scholarship recipient</span></div>
              <div><strong>Leadership & involvement</strong><span>Association of Information Systems member · EY Case Competition team leader, 2025; identified the company’s top five technical risks</span></div>
              <div><strong>Three languages</strong><span>Fluent in English, Mandarin & Malay</span></div>
            </div>
          </div>
        </section>

        <section className="section-width skills-section" aria-labelledby="skills-heading">
          <p className="eyebrow">TECHNICAL SKILLS</p>
          <h2 id="skills-heading">Tools I bring to the work.</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-group" key={skill.title}>
                <h3>{skill.title}</h3>
                <p>{skill.tools}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="section-width contact-content">
            <p className="eyebrow">LET’S CONNECT</p>
            <h2>Good things start<br />with a conversation.</h2>
            <p>
              I’d love to connect about product, technology,
              and opportunities to learn and contribute.
            </p>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:sabrinawong0903@gmail.com">Email me </a>
              <a className="button button-secondary" href="https://www.linkedin.com/in/sabrina-wong-" target="_blank" rel="noopener noreferrer">LinkedIn <span className="sr-only">(opens in a new tab)</span></a>
              <a className="button button-secondary" href="https://github.com/sabrina0903" target="_blank" rel="noopener noreferrer">GitHub <span className="sr-only">(opens in a new tab)</span></a>
            </div>
            <a className="contact-email" href="mailto:sabrinawong0903@gmail.com">sabrinawong0903@gmail.com</a>
          </div>
        </section>
      </main>

      <footer className="section-width site-footer">
        <a className="wordmark" href="#home">sabrina<span>.</span></a>
        <p>© {new Date().getFullYear()} Sabrina Wong</p>
        <a href="#home">Back to top</a>
      </footer>
    </>
  )
}

export default App
