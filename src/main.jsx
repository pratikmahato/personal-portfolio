import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowUpRight, Mail, MapPin, Github, Linkedin, Facebook, Instagram,
  Monitor, Network, Code2, Palette, Camera, Globe, Wrench, MapPinned, Menu, X, Sun, Moon
} from 'lucide-react'
import './styles.css'

const email = 'contact@pratikmahato.com.np'

const socials = [
  { name: 'GitHub', href: 'https://github.com/pratikmahato', Icon: Github },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/pratikmahato/', Icon: Linkedin },
  { name: 'Facebook', href: 'https://www.facebook.com/share/1GmAtbDtRn/', Icon: Facebook },
  { name: 'Instagram', href: 'https://www.instagram.com/me.pratikmahato?srtk=azhxZm96Y2l5eWI=', Icon: Instagram },
]

const skills = [
  { title: 'IT Support & Operations', detail: 'Technical support, troubleshooting and day-to-day IT operations.', Icon: Wrench },
  { title: 'Networking', detail: 'An interest in network configuration, connectivity and infrastructure.', Icon: Network },
  { title: 'Web Development', detail: 'HTML, CSS, PHP, React, Tailwind CSS and WordPress.', Icon: Code2 },
  { title: 'Graphic Design', detail: 'Visual design using Adobe Photoshop, Illustrator and Canva.', Icon: Palette },
  { title: 'Photography & Video', detail: 'Photography, videography and visual content creation.', Icon: Camera },
  { title: 'Digital Platforms', detail: 'Website management and digital solutions.', Icon: Globe },
  { title: 'Google Business Profile Management', detail: 'Managing business profile information, updates, posts and customer-facing details on Google.', Icon: MapPinned },
]

function Header({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  return <header className="header">
    <a className="brand" href="#home" aria-label="Pratik Mahato home" onClick={closeMenu}>
      <img src="/pratik-mahato-logo.png" alt="Pratik Mahato logo" />
      <span>PRATIK MAHATO</span>
    </a>
    <nav id="mobile-navigation" className={menuOpen ? 'mobile-open' : ''} aria-label="Main navigation">
      <a href="#about" onClick={closeMenu}>About</a><a href="#skills" onClick={closeMenu}>What I do</a><a href="#experience" onClick={closeMenu}>Experience</a><a href="#contact" onClick={closeMenu}>Contact</a>
    </nav>
    <a className="nav-contact" href={`mailto:${email}`}>Let's talk <ArrowUpRight size={16}/></a>
    <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
      {theme === 'dark' ? <Sun size={19}/> : <Moon size={19}/>}
    </button>
    <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>
      {menuOpen ? <X size={24}/> : <Menu size={24}/>}
    </button>
  </header>
}
function App() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('portfolio-theme') || 'dark' }
    catch { return 'dark' }
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#10120f' : '#f6f7f2')
    try { localStorage.setItem('portfolio-theme', theme) } catch {}
  }, [theme])

  const toggleTheme = () => setTheme(current => current === 'dark' ? 'light' : 'dark')

  return <div className="site" id="home">
    <Header theme={theme} onToggleTheme={toggleTheme} />
    <main>
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow"><span className="dot"/> IT PROFESSIONAL · CHITWAN, NEPAL</p>
          <h1>Building digital experiences through <span>technology</span> and creativity.</h1>
          <p className="intro">I'm Pratik Mahato — an IT professional interested in IT support, networking, web development and graphic design. I enjoy bringing technical problem-solving and creative thinking together.</p>
          <div className="hero-actions">
            <a className="button button-lime" href="#skills">Explore what I do <ArrowUpRight size={17}/></a>
            <a className="button button-quiet" href={`mailto:${email}`}>Get in touch</a>
          </div>
          <div className="hero-socials" aria-label="Social profiles">
            {socials.map(({name, href, Icon}) => <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name} title={name}><Icon size={19}/></a>)}
          </div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-frame">
            <img className="portrait" src="/pratik-mahato-photo.jpg" alt="Portrait of Pratik Mahato" />
          </div>
          <div className="portrait-caption"><span>PRATIK MAHATO</span><span>IT · WEB · DESIGN</span></div>
        </div>
      </section>

      <section className="about section container" id="about">
        <div className="section-heading"><p className="eyebrow">01 / ABOUT</p><h2>A little about me.</h2></div>
        <div className="about-copy">
          <div className="about-portrait"><img src="/pratik-mahato-photo.jpg" alt="Portrait of Pratik Mahato" /></div>
          <p className="lead">I’m an IT Professional and Graphic Designer passionate about technology, creativity and digital innovation.</p>
          <p>Since joining Boston International College in April 2022, I have gained practical experience in IT operations, technical troubleshooting, digital platforms and creative design.</p>
          <p>My interests span IT support, networking, website management, web development, WordPress, graphic design, photography, videography and digital marketing. I enjoy learning new tools, exploring ideas and finding practical ways to connect technology with creativity.</p>
          <p>My goal is to keep growing, solve problems thoughtfully and create useful digital experiences.</p>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="container">
          <div className="section-heading"><p className="eyebrow">02 / WHAT I DO</p><h2>Technology, with a creative side.</h2><p className="section-subtitle">A mix of technical and creative interests that shape my work.</p></div>
          <div className="skills-grid">
            {skills.map(({title, detail, Icon}, i) => <article className="skill" key={title}>
              <div className="skill-top"><span className="skill-number">0{i+1}</span><Icon size={23}/></div>
              <h3>{title}</h3><p>{detail}</p>
            </article>)}
          </div>
          <div className="tools-line"><strong>TOOLS & TECHNOLOGIES</strong><span>HTML</span><span>CSS</span><span>PHP</span><span>React</span><span>Tailwind CSS</span><span>WordPress</span><span>Photoshop</span><span>Illustrator</span><span>Canva</span></div>
        </div>
      </section>

      <section className="section container experience" id="experience">
        <div className="section-heading"><p className="eyebrow">03 / EXPERIENCE</p><h2>Where I work.</h2></div>
        <article className="experience-card">
          <div><p className="eyebrow lime-text">APRIL 2022 — PRESENT</p><h3>Assistant IT Officer</h3><p className="company">Boston International College · Bharatpur, Chitwan, Nepal</p></div>
          <p className="experience-detail">Working across IT support, technical troubleshooting, IT operations, digital platforms and creative technology activities.</p>
        </article>
      </section>

      <section className="section focus-section">
        <div className="container focus-inner">
          <div><p className="eyebrow">04 / CURRENT FOCUS</p><h2>Always learning.<br/><span>Always exploring.</span></h2></div>
          <p>I believe good work comes from curiosity, continuous learning and a willingness to improve. I'm interested in exploring new technologies, strengthening my skills and collaborating on meaningful ideas.</p>
        </div>
      </section>

      <section className="section container contact" id="contact">
        <p className="eyebrow">05 / CONTACT</p>
        <h2>Have something in mind?<br/><span>Let's connect.</span></h2>
        <p className="contact-copy">For professional opportunities, creative collaborations or technology-related conversations, feel free to reach out.</p>
        <a className="email-link" href={`mailto:${email}`}><Mail size={20}/>{email}<ArrowUpRight size={18}/></a>
        <p className="location"><MapPin size={16}/> Bharatpur, Chitwan, Nepal</p>
        <div className="contact-socials">{socials.map(({name, href, Icon}) => <a key={name} href={href} target="_blank" rel="noreferrer"><Icon size={18}/>{name}<ArrowUpRight size={14}/></a>)}</div>
      </section>
    </main>
    <footer className="footer container"><a href="#home" className="footer-brand"><img src="/pratik-mahato-logo.png" alt=""/> PRATIK MAHATO</a><span>© {new Date().getFullYear()} Pratik Mahato</span><a href="#home">Back to top ↑</a></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<App />)
