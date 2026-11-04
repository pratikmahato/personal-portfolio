import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowDownRight, ArrowUpRight, Menu, X, Mail, MapPin, Phone,
  Wrench, Network, Monitor, Wifi, Laptop, Globe2, Palette,
  Code2, Camera, Video, Megaphone, Github, Linkedin, Facebook, Instagram,
  CheckCircle2, Sparkles, Braces, PenTool
} from 'lucide-react'
import './styles.css'

const email = 'contact@pratikmahato.com.np'
const phone = '+977 9745387467'
const socialLinks = [
  { label: 'GitHub', url: 'https://github.com/pratikmahato', icon: Github, note: 'Code and development' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/pratikmahato/', icon: Linkedin, note: 'Professional network' },
  { label: 'Facebook', url: 'https://www.facebook.com/share/1ECW53NCcv/', icon: Facebook, note: 'Social profile' },
  { label: 'Instagram', url: 'https://www.instagram.com/pratik_2059/', icon: Instagram, note: 'Creative and personal content' },
]
const nav = [['About', 'about'], ['Skills', 'expertise'], ['Experience', 'experience'], ['Focus areas', 'work'], ['Contact', 'contact']]

function Brand({ footer = false }) {
  // Replace this temporary PM monogram with your logo when you upload it.
  // Example: put your file at public/logo.svg and render <img src="/logo.svg" ... /> here.
  return <a href="#home" className="brand" aria-label="Pratik Mahato home">
    <span className="brand-mark">PM<span>.</span></span>
    <span className="brand-name">PRATIK MAHATO<small>IT / DESIGN / DIGITAL</small></span>
  </a>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const submit = (e) => {
    e.preventDefault()
    const body = `Hi Pratik,\n\n${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(form.subject || 'Portfolio enquiry')}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return <div className="min-h-screen bg-ink text-white selection:bg-acid selection:text-ink">
    <div className="grain" />
    <header className="site-header">
      <Brand />
      <nav className="desktop-nav">{nav.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
      <a className="header-cta" href="#contact">Let's talk <ArrowUpRight size={15} /></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
    </header>
    {menuOpen && <nav className="mobile-nav">{nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight size={16} /></a>)}</nav>}

    <main>
      <section id="home" className="hero section-wrap">
        <div className="hero-topline"><span className="eyebrow"><i className="live-dot" /> PORTFOLIO / PRATIK MAHATO</span><span className="mono hero-index">TECHNOLOGY × CREATIVITY</span></div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow accent">IT PROFESSIONAL · DESIGNER · CREATIVE THINKER</p>
            <h1>Building digital<br /><em>experiences.</em></h1>
            <p className="hero-lede">Building digital experiences through technology and creativity. I’m an IT professional interested in IT support, networking, web development, graphic design and digital innovation.</p>
            <div className="hero-actions"><a className="button button-primary" href="#work">Explore my focus areas <ArrowUpRight size={17} /></a><a className="text-link" href="#contact">Let's connect <ArrowDownRight size={17} /></a></div>
            <div className="hero-meta"><span><MapPin size={14} /> CHITWAN, NEPAL</span><span><span className="meta-separator" /> IT PROFESSIONAL</span></div>
          </div>
          <div className="hero-art" aria-label="Abstract technology and creativity illustration">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="art-cross cross-one">+</div><div className="art-cross cross-two">+</div>
            <div className="art-card">
              <div className="art-card-head"><span className="mono">CREATIVE PROCESS</span><span className="status"><i /> ALWAYS LEARNING</span></div>
              <div className="terminal-lines"><p><b>01</b> <span className="terminal-green">technology</span> + creativity</p><p><b>02</b> explore(<span>new ideas</span>)</p><p><b>03</b> create(<span className="terminal-green">useful things</span>)</p><p><b>04</b> <span className="terminal-muted">// keep learning</span></p></div>
              <div className="art-card-foot"><span>CURIOUS BY NATURE. CREATIVE BY CHOICE.</span><span className="pulse-bars"><i /><i /><i /><i /><i /></span></div>
            </div>
            <div className="floating-tag tag-top"><Code2 size={15} /> WEB & TECHNOLOGY</div>
            <div className="floating-tag tag-bottom"><span className="tag-spark">✳</span> IDEAS INTO EXPERIENCES</div>
            <div className="art-caption mono">FIG. 01 — TECHNOLOGY MEETS CREATIVITY</div>
          </div>
        </div>
        <a href="#about" className="scroll-cue"><span className="scroll-line" /> SCROLL TO EXPLORE</a>
      </section>

      <section id="about" className="about-section section-wrap section-pad">
        <div className="section-label"><span>01 / ABOUT</span><span className="label-rule" /></div>
        <div className="about-grid">
          <div><p className="eyebrow accent">A LITTLE ABOUT ME</p><h2>Curious about tech.<br /><em>Inspired by creativity.</em></h2></div>
          <div className="about-copy">
            <p className="large-copy">Hello, I'm Pratik Mahato — an IT Professional and Graphic Designer passionate about technology, creativity, and digital innovation.</p>
            <p>I enjoy combining technical knowledge with creative thinking to solve problems, improve digital experiences, and bring ideas to life. My interests span IT support, networking, web design and development, WordPress, graphic design, photography, videography, and digital marketing.</p>
            <p>Since joining Boston International College in April 2022, I have developed practical experience in IT operations, technical troubleshooting, digital platforms, and creative design. I believe in continuous learning and using technology to make a positive impact.</p>
            <a className="inline-link" href={`mailto:${email}`}>Let's start a conversation <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="stat-strip about-principles"><div><strong>01</strong><small>CURIOUS MINDSET</small></div><div><strong>02</strong><small>CREATIVE THINKING</small></div><div><strong>03</strong><small>PRACTICAL APPROACH</small></div><p>My goal is to connect creativity with technology.<br /><span>And turn ideas into meaningful digital experiences.</span></p></div>
      </section>

      <section id="expertise" className="expertise-section section-wrap section-pad">
        <div className="section-label"><span>02 / SKILLS & EXPERTISE</span><span className="label-rule" /></div>
        <div className="section-heading"><div><p className="eyebrow accent">WHAT I'M INTERESTED IN AND WORK WITH</p><h2>A versatile toolkit.<br /><em>One curious mind.</em></h2></div><p className="heading-note">A mix of technical, web and creative skills that reflects my interests and professional experience.</p></div>
        <div className="skill-grid">
          <article className="skill-card"><div className="skill-top"><Wrench /><span>01</span></div><h3>IT & Networking</h3><p>Technical support and practical technology operations.</p><ul><li>IT support</li><li>Technical troubleshooting</li><li>Networking</li><li>Website management</li></ul><div className="skill-icon-bg"><Laptop /></div></article>
          <article className="skill-card"><div className="skill-top"><Braces /><span>02</span></div><h3>Web Development</h3><p>Exploring web technologies and digital platforms.</p><ul><li>HTML & CSS</li><li>PHP</li><li>React</li><li>Tailwind CSS & WordPress</li></ul><div className="skill-icon-bg"><Globe2 /></div></article>
          <article className="skill-card"><div className="skill-top"><Palette /><span>03</span></div><h3>Design & Media</h3><p>Creative tools and visual storytelling.</p><ul><li>Adobe Photoshop</li><li>Adobe Illustrator</li><li>Canva</li><li>Photography & videography</li></ul><div className="skill-icon-bg"><PenTool /></div></article>
        </div>
        <div className="toolbelt"><span className="mono">ALSO INTERESTED IN</span><div><span>DIGITAL MARKETING</span><span>DIGITAL INNOVATION</span><span>CREATIVE PROBLEM-SOLVING</span><span>CONTINUOUS LEARNING</span></div></div>
      </section>

      <section id="experience" className="experience-section section-wrap section-pad">
        <div className="section-label"><span>03 / EXPERIENCE</span><span className="label-rule" /></div>
        <div className="section-heading"><div><p className="eyebrow accent">MY PROFESSIONAL JOURNEY</p><h2>Learning through<br /><em>real experience.</em></h2></div><p className="heading-note">My current professional role and the experience I continue to build through technology and creative work.</p></div>
        <div className="timeline">
          <div className="timeline-date mono">APR 2022 — PRESENT</div><div className="timeline-marker"><i /></div>
          <div className="timeline-content"><div className="role-head"><div><h3>Assistant IT Officer</h3><p className="company">Boston International College <span>·</span> Chitwan, Nepal</p></div><span className="current-pill"><i /> CURRENT ROLE</span></div>
            <p className="role-summary">Working in an IT role at Boston International College, with practical experience across IT operations, technical troubleshooting, digital platforms, and creative design.</p>
            <div className="responsibility-grid"><div><Monitor /><h4>IT operations</h4><p>Professional experience in IT operations and day-to-day technology support.</p></div><div><Wrench /><h4>Troubleshooting</h4><p>Practical technical troubleshooting and problem-solving.</p></div><div><Globe2 /><h4>Digital platforms</h4><p>Experience and interests spanning websites and digital platforms.</p></div><div><Palette /><h4>Creative design</h4><p>Creative design work and visual communication interests.</p></div></div>
          </div>
        </div>
      </section>

      <section id="work" className="work-section section-wrap section-pad">
        <div className="section-label"><span>04 / AREAS OF FOCUS</span><span className="label-rule" /></div>
        <div className="section-heading"><div><p className="eyebrow accent">WHERE TECHNOLOGY AND CREATIVITY MEET</p><h2>Areas I love<br /><em>to explore.</em></h2></div><p className="heading-note">A snapshot of my professional interests and skill areas. Detailed project case studies can be added when specific work is ready to share.</p></div>
        <div className="work-list">
          <article className="work-item"><div className="work-number mono">01</div><div className="work-info"><span className="eyebrow">IT & NETWORKING</span><h3>IT support and technical problem-solving</h3><p>My professional focus includes IT support, troubleshooting, networking and technology operations.</p></div><div className="work-visual visual-support"><Monitor /><span>IT / SUPPORT</span><div className="visual-grid" /></div><span className="work-arrow"><ArrowUpRight /></span></article>
          <article className="work-item"><div className="work-number mono">02</div><div className="work-info"><span className="eyebrow">WEB & DIGITAL</span><h3>Web development and digital platforms</h3><p>Exploring HTML, CSS, PHP, React, Tailwind CSS and WordPress.</p></div><div className="work-visual visual-network"><Code2 /><span>WEB / DIGITAL</span><div className="network-nodes"><i /><i /><i /><i /></div></div><span className="work-arrow"><ArrowUpRight /></span></article>
          <article className="work-item"><div className="work-number mono">03</div><div className="work-info"><span className="eyebrow">DESIGN & MEDIA</span><h3>Graphic design and visual storytelling</h3><p>Creative interests include graphic design, photography, videography and digital marketing.</p></div><div className="work-visual visual-web"><Camera /><span>CREATIVE / MEDIA</span><div className="web-window"><i /><i /><i /></div></div><span className="work-arrow"><ArrowUpRight /></span></article>
        </div>
        <p className="work-note mono">THESE ARE AREAS OF EXPERTISE AND INTEREST — NOT CLAIMS OF SEPARATE CLIENT PROJECTS.</p>
      </section>

      <section className="social-section section-wrap section-pad" id="social">
        <div className="section-label"><span>05 / FIND ME ONLINE</span><span className="label-rule" /></div>
        <div className="section-heading"><div><p className="eyebrow accent">LET'S CONNECT</p><h2>Across the<br /><em>digital world.</em></h2></div><p className="heading-note">Find me on these platforms for professional connections, code, and creative updates.</p></div>
        <div className="social-grid">{socialLinks.map(({ label, url, icon: Icon, note }) => <a className="social-card" key={label} href={url} target="_blank" rel="noreferrer"><span className="social-icon"><Icon /></span><span className="social-copy"><strong>{label}</strong><small>{note}</small></span><ArrowUpRight className="social-arrow" /></a>)}</div>
      </section>

      <section className="learning-section section-wrap section-pad">
        <div className="section-label"><span>06 / CONTINUOUS LEARNING</span><span className="label-rule" /></div>
        <div className="learning-panel"><div className="learning-symbol"><Sparkles /></div><div><p className="eyebrow accent">ALWAYS GROWING</p><h2>Stay curious.<br /><em>Keep creating.</em></h2><p>I value continuous learning, practical experience and exploring new technologies. This space will grow alongside the skills, knowledge and milestones I build over time.</p></div><span className="learning-index mono">A WORK IN PROGRESS — BY DESIGN</span></div>
      </section>

      <section id="contact" className="contact-section section-wrap section-pad">
        <div className="section-label"><span>07 / CONTACT</span><span className="label-rule" /></div>
        <div className="contact-grid"><div><p className="eyebrow accent">HAVE AN IDEA OR OPPORTUNITY?</p><h2>Let's build<br /><em>something meaningful.</em></h2><p className="contact-intro">Whether you'd like to discuss technology, creative work, a professional opportunity or simply connect, I'd be happy to hear from you.</p>
          <div className="contact-details"><a href={`mailto:${email}`}><span className="contact-icon"><Mail /></span><span><small>EMAIL</small>{email}</span><ArrowUpRight /></a><a href={`tel:${phone.replace(/\s/g, '')}`}><span className="contact-icon"><Phone /></span><span><small>PHONE</small>{phone}</span><ArrowUpRight /></a><div><span className="contact-icon"><MapPin /></span><span><small>LOCATION</small>Chitwan, Nepal</span></div></div>
        </div>
        <form className="contact-form" onSubmit={submit}><div className="form-head"><span className="mono">SEND A MESSAGE</span><span className="form-asterisk">✳</span></div><label>Your name<input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="How should I address you?" /></label><label>Email address<input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" /></label><label>Subject<input value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} placeholder="What would you like to discuss?" /></label><label>Message<textarea required rows="4" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell me a little about it..." /></label><button className="button button-primary form-submit" type="submit">Email Pratik <ArrowUpRight size={17} /></button>{sent && <p className="form-feedback"><CheckCircle2 size={15} /> Your email app should open with your message ready to send.</p>}<p className="form-privacy">This form opens your email app and prepares a message to {email}. It does not send data to a website server.</p></form></div>
      </section>
    </main>
    <footer className="footer section-wrap"><Brand footer /><span className="footer-copy">© {new Date().getFullYear()} PRATIK MAHATO. BUILT WITH PURPOSE.</span><a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={14} /></a></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<App />)
