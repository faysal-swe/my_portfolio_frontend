import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon, TwitterIcon, DribbbleIcon } from '../UI/SocialIcons';
import { Heart, ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="portfolio-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand-block">
            <a href="#hero" className="footer-logo" onClick={(e) => handleScrollTo(e, '#hero')}>
              <span className="logo-text">Faysal<span className="logo-dot">.</span></span>
              <span className="logo-badge">DEV</span>
            </a>
            <p className="footer-tagline">
              Crafting fast, clean, and intuitive digital experiences combining engineering excellence with modern UI/UX aesthetics.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-links-block">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-list">
              <li><a href="#about" onClick={(e) => handleScrollTo(e, '#about')}>About Me</a></li>
              <li><a href="#skills" onClick={(e) => handleScrollTo(e, '#skills')}>Skills & Tech</a></li>
              <li><a href="#projects" onClick={(e) => handleScrollTo(e, '#projects')}>Featured Projects</a></li>
              <li><a href="#services" onClick={(e) => handleScrollTo(e, '#services')}>Services</a></li>
              <li><a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')}>Contact</a></li>
            </ul>
          </div>

          {/* Socials & Networks */}
          <div className="footer-social-block">
            <h4 className="footer-col-title">Connect</h4>
            <div className="footer-social-links">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={personalInfo.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Twitter Profile"
              >
                <TwitterIcon size={18} />
              </a>
              <a
                href={personalInfo.socials.dribbble}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Dribbble Profile"
              >
                <DribbbleIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} {personalInfo.name}. All rights reserved. Crafted with React & Modern CSS.
          </p>

          <button className="footer-top-btn" onClick={scrollToTop}>
            <span>Back to Top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
