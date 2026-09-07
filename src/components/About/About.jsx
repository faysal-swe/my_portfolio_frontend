import React from 'react';
import { personalInfo, experiences } from '../../data/portfolioData';
import SectionHeading from '../UI/SectionHeading';
import { MapPin, Mail, Sparkles, Award, GraduationCap, Briefcase, Code, CheckCircle } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <SectionHeading
          badge="About Me"
          title="Transforming Ideas Into Fluid Digital Products"
          subtitle="A passionate Flutter developer dedicated to craft, performance, and fluid user interactions."
        />

        <div className="about-grid">
          {/* Left Column: Avatar & Profile Card */}
          <div className="about-profile-card glass-card">
            <div className="avatar-frame">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
                alt={personalInfo.name}
                className="avatar-img"
              />
              <div className="avatar-glow-ring"></div>
              <div className="avatar-badge">
                <Sparkles size={14} className="avatar-badge-icon" />
                <span>Flutter Specialist</span>
              </div>
            </div>

            <div className="profile-details">
              <h3 className="profile-name">{personalInfo.name}</h3>
              <p className="profile-role">{personalInfo.role}</p>

              <div className="profile-info-list">
                <div className="info-item">
                  <MapPin size={16} className="info-icon" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="info-item">
                  <Mail size={16} className="info-icon" />
                  <span>{personalInfo.email}</span>
                </div>
              </div>

              <div className="profile-social-pills">
                <span className="tech-pill">Flutter</span>
                <span className="tech-pill">Dart</span>
                <span className="tech-pill">BLoC</span>
                <span className="tech-pill">Firebase</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Philosophy & Experiences */}
          <div className="about-content-column">
            <div className="about-bio-card glass-card">
              <h3 className="bio-card-title">My Journey & Philosophy</h3>
              {personalInfo.bioLong.map((paragraph, index) => (
                <p key={index} className="bio-paragraph">
                  {paragraph}
                </p>
              ))}

              <div className="core-pillars-grid">
                <div className="pillar-item">
                  <div className="pillar-icon-box purple">
                    <Code size={20} />
                  </div>
                  <div>
                    <h4 className="pillar-title">Clean Architecture</h4>
                    <p className="pillar-desc">Maintainable, scalable patterns with zero boilerplate bloat.</p>
                  </div>
                </div>

                <div className="pillar-item">
                  <div className="pillar-icon-box cyan">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h4 className="pillar-title">Modern Aesthetics</h4>
                    <p className="pillar-desc">Vibrant dark interfaces, responsive grids, and micro-interactions.</p>
                  </div>
                </div>

                <div className="pillar-item">
                  <div className="pillar-icon-box green">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="pillar-title">Ultra Performance</h4>
                    <p className="pillar-desc">Sub-second loading times, optimized assets, and 95+ Core Web Vitals.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="experience-timeline glass-card">
              <h3 className="timeline-title">
                <Briefcase size={20} className="timeline-heading-icon" />
                <span>Experience Milestones</span>
              </h3>

              <div className="timeline-items">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="timeline-entry">
                    <div className="timeline-marker">
                      <div className="timeline-dot"></div>
                      {idx !== experiences.length - 1 && <div className="timeline-line"></div>}
                    </div>
                    <div className="timeline-info">
                      <div className="timeline-meta">
                        <span className="timeline-role">{exp.role}</span>
                        <span className="timeline-period">{exp.period}</span>
                      </div>
                      <span className="timeline-company">{exp.company}</span>
                      <p className="timeline-desc">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
