import React from 'react';
import { Send, FileText, Sparkles } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import './CallToAction.css';

export default function CallToAction() {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-banner-card glass-card">
          {/* Ambient Glow */}
          <div className="cta-ambient-glow"></div>

          <div className="cta-content">
            <div className="cta-badge">
              <Sparkles size={14} className="cta-sparkle" />
              <span>Available for New Opportunities</span>
            </div>

            <h2 className="cta-title">
              Ready to build something <span className="cta-highlight">amazing?</span>
            </h2>

            <p className="cta-description">
              Whether you have an upcoming project, need technical leadership, or simply want to say hello, I'd love to connect.
            </p>

            <div className="cta-buttons">
              <a
                href="#contact"
                className="btn btn-primary cta-btn"
                onClick={handleScrollToContact}
              >
                <span>Let's Talk</span>
                <Send size={16} />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="btn btn-secondary cta-btn"
              >
                <span>Direct Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
