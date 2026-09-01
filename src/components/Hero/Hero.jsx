import React, { useState } from 'react';
import { personalInfo, heroCodeSnippet } from '../../data/portfolioData';
import { ArrowRight, Download, Terminal, CheckCircle2, Copy, Check } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(heroCodeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      {/* Background glow effects */}
      <div className="hero-ambient-glow hero-glow-1"></div>
      <div className="hero-ambient-glow hero-glow-2"></div>

      <div className="container hero-container">
        {/* Left Column: Introduction & CTAs */}
        <div className="hero-content">
          <div className="status-badge">
            <span className="badge-pulse"></span>
            <span className="status-text">{personalInfo.availability}</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-name-first">Faysal</span>
            <span className="hero-name-last">Ahmed<span className="period-dot">.</span></span>
          </h1>

          <p className="hero-role-heading">
            {personalInfo.role}
          </p>

          <p className="hero-description">
            {personalInfo.bioShort}
          </p>

          {/* Action Buttons */}
          <div className="hero-actions">
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={(e) => handleScrollTo(e, '#contact')}
            >
              <span>Hire Me</span>
              <ArrowRight size={17} />
            </a>

            <a
              href="#projects"
              className="btn btn-secondary"
              onClick={(e) => handleScrollTo(e, '#projects')}
            >
              <span>View Projects</span>
            </a>
          </div>

          {/* Quick Stats Grid */}
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-value">{personalInfo.experienceYears}</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-value">{personalInfo.projectsCompleted}</div>
              <div className="stat-label">Completed Projects</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-value">{personalInfo.clientSatisfaction}</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Code Terminal */}
        <div className="hero-visual">
          <div className="code-window glass-card">
            {/* Terminal Window Bar */}
            <div className="code-window-header">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="window-tab">
                <Terminal size={14} className="tab-icon" />
                <span>Faysal.config.js</span>
              </div>
              <button
                className="copy-snippet-btn"
                onClick={handleCopyCode}
                title="Copy config snippet"
              >
                {copied ? <Check size={14} className="copied-icon" /> : <Copy size={14} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Code Body with Syntax Highlighting Look */}
            <div className="code-window-body">
              <pre className="code-pre">
                <code>
                  <span className="token-comment">// Profile Configuration</span>{'\n'}
                  <span className="token-keyword">import</span> {'{ '}
                  <span className="token-variable">Developer</span>, <span className="token-variable">Designer</span>
                  {' } '}
                  <span className="token-keyword">from</span> <span className="token-string">'@faysal/core'</span>;{'\n\n'}
                  <span className="token-keyword">export default class</span> <span className="token-class">FaysalAhmed</span> <span className="token-keyword">extends</span> <span className="token-variable">Developer</span> {'{\n'}
                  {'  '}<span className="token-property">name</span>     = <span className="token-string">'Faysal Ahmed'</span>;{'\n'}
                  {'  '}<span className="token-property">role</span>     = <span className="token-string">'Full-Stack & UI/UX'</span>;{'\n'}
                  {'  '}<span className="token-property">status</span>   = <span className="token-string">'Available for hire'</span>;{'\n\n'}
                  {'  '}<span className="token-property">skills</span>   = [{'\n'}
                  {'    '}<span className="token-string">'React'</span>, <span className="token-string">'Next.js'</span>, <span className="token-string">'Node.js'</span>,{'\n'}
                  {'    '}<span className="token-string">'TypeScript'</span>, <span className="token-string">'Figma'</span>, <span className="token-string">'PostgreSQL'</span>{'\n'}
                  {'  '}];{'\n\n'}
                  {'  '}<span className="token-function">build</span>() {'{\n'}
                  {'    '}<span className="token-keyword">return</span> <span className="token-keyword">new</span> <span className="token-class">SuperCleanApp</span>({'{'}{'\n'}
                  {'      '}<span className="token-property">performance</span>: <span className="token-string">'100%'</span>,{'\n'}
                  {'      '}<span className="token-property">userDelight</span>: <span className="token-boolean">true</span>{'\n'}
                  {'    '}{'}'});{'\n'}
                  {'  '}{'}\n'}
                  {'}'}
                </code>
              </pre>
            </div>

            {/* Floating Badge */}
            <div className="terminal-floating-badge animate-float">
              <div className="floating-badge-icon">
                <CheckCircle2 size={18} />
              </div>
              <div className="floating-badge-text">
                <span className="badge-primary-text">Clean Code Guaranteed</span>
                <span className="badge-sub-text">100% Production Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
