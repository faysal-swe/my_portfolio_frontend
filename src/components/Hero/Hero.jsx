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
                <span>faysal_developer.dart</span>
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
                  <span className="token-keyword">import</span> <span className="token-string">'package:flutter/material.dart'</span>;{'\n\n'}
                  <span className="token-keyword">class</span> <span className="token-class">FaysalAhmed</span> <span className="token-keyword">extends</span> <span className="token-variable">StatelessWidget</span> {'{\n'}
                  {'  '}<span className="token-keyword">final</span> <span className="token-keyword">String</span> <span className="token-property">name</span>   = <span className="token-string">'Faysal Ahmed'</span>;{'\n'}
                  {'  '}<span className="token-keyword">final</span> <span className="token-keyword">String</span> <span className="token-property">role</span>   = <span className="token-string">'Flutter Developer'</span>;{'\n'}
                  {'  '}<span className="token-keyword">final</span> <span className="token-keyword">String</span> <span className="token-property">status</span> = <span className="token-string">'Available for hire'</span>;{'\n\n'}
                  {'  '}<span className="token-keyword">final</span> <span className="token-keyword">List</span>&lt;<span className="token-keyword">String</span>&gt; <span className="token-property">skills</span> = <span className="token-keyword">const</span> [{'\n'}
                  {'    '}<span className="token-string">'Flutter'</span>, <span className="token-string">'Dart'</span>, <span className="token-string">'Riverpod'</span>,{'\n'}
                  {'    '}<span className="token-string">'Provider'</span>, <span className="token-string">'Firebase'</span>, <span className="token-string">'REST APIs'</span>{'\n'}
                  {'  '}];{'\n\n'}
                  {'  '}<span className="token-keyword">@override</span>{'\n'}
                  {'  '}<span className="token-variable">Widget</span> <span className="token-function">build</span>(<span className="token-variable">BuildContext</span> context) {'{\n'}
                  {'    '}<span className="token-keyword">return</span> <span className="token-keyword">const</span> <span className="token-class">SuperCleanApp</span>({'\n'}
                  {'      '}<span className="token-property">performance</span>: <span className="token-string">'60 FPS'</span>,{'\n'}
                  {'      '}<span className="token-property">pixelPerfect</span>: <span className="token-boolean">true</span>,{'\n'}
                  {'      '}<span className="token-property">userDelight</span>: <span className="token-boolean">true</span>,{'\n'}
                  {'    '});{'\n'}
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
