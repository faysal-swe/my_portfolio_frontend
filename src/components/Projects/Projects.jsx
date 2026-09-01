import React, { useState } from 'react';
import { featuredProjects } from '../../data/portfolioData';
import SectionHeading from '../UI/SectionHeading';
import { GithubIcon } from '../UI/SocialIcons';
import { ExternalLink, ArrowUpRight, Sparkles, Smartphone, BarChart3, ShoppingBag, Activity } from 'lucide-react';
import './Projects.css';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filterCategories = [
    { label: 'All Projects', value: 'all' },
    { label: 'Mobile Apps', value: 'mobile' },
    { label: 'Web Applications', value: 'web' }
  ];

  const filteredProjects = featuredProjects.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'mobile') return project.previewType === 'mobile';
    if (filter === 'web') return project.previewType === 'dashboard';
    return true;
  });

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <SectionHeading
          badge="Featured Projects"
          title="Crafted With Precision & Purpose"
          subtitle="Explore some of my high-impact mobile apps, analytics platforms, and digital products."
        />

        {/* Filter Tabs */}
        <div className="projects-filter-bar">
          {filterCategories.map((cat) => (
            <button
              key={cat.value}
              className={`project-filter-btn ${filter === cat.value ? 'active' : ''}`}
              onClick={() => setFilter(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project List with Alternating Layout */}
        <div className="projects-list">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className={`project-card glass-card ${isEven ? 'layout-standard' : 'layout-reversed'}`}
              >
                {/* Information Column */}
                <div className="project-info-col">
                  <div className="project-meta-tag">
                    <Sparkles size={13} className="meta-tag-icon" />
                    <span>{project.category}</span>
                  </div>

                  <h3 className="project-title">{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  {/* Highlights List */}
                  <ul className="project-features-list">
                    {project.features.map((feat, fIdx) => (
                      <li key={fIdx} className="feature-item">
                        <span className="feature-bullet"></span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Badges */}
                  <div className="project-tech-tags">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="project-actions">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary project-btn"
                    >
                      <span>Live Preview</span>
                      <ArrowUpRight size={16} />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary project-btn"
                    >
                      <GithubIcon size={16} />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>

                {/* Visual / Mockup Column */}
                <div className="project-visual-col">
                  <div
                    className="project-mockup-glow"
                    style={{ background: `radial-gradient(circle, ${project.mockupColor}33 0%, transparent 70%)` }}
                  ></div>

                  {project.previewType === 'mobile' ? (
                    /* High-fidelity Phone Mockup Frame */
                    <div className="phone-mockup-frame">
                      <div className="phone-speaker-notch">
                        <div className="camera-lens"></div>
                      </div>

                      <div className="phone-screen-content">
                        {/* Dynamic Mockup UI based on project */}
                        {project.id === 1 ? (
                          <div className="ecommerce-mockup-ui">
                            <div className="mockup-header-bar">
                              <span className="mockup-brand">NOVA STORE</span>
                              <ShoppingBag size={16} className="mockup-icon" />
                            </div>
                            <div className="mockup-hero-banner">
                              <span className="banner-sub">Premium Acoustics</span>
                              <h4 className="banner-h">Studio Pro ANC</h4>
                            </div>
                            <div className="mockup-product-grid">
                              <div className="product-card-mini">
                                <div className="product-thumb headphones">🎧</div>
                                <span className="p-title">ANC Headset</span>
                                <span className="p-price">$299</span>
                              </div>
                              <div className="product-card-mini">
                                <div className="product-thumb watch">⌚</div>
                                <span className="p-title">Aura Watch 2</span>
                                <span className="p-price">$349</span>
                              </div>
                              <div className="product-card-mini">
                                <div className="product-thumb shoes">👟</div>
                                <span className="p-title">Cloud Stride</span>
                                <span className="p-price">$180</span>
                              </div>
                              <div className="product-card-mini">
                                <div className="product-thumb speaker">🔊</div>
                                <span className="p-title">Bass Orb 3</span>
                                <span className="p-price">$120</span>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="fitness-mockup-ui">
                            <div className="mockup-header-bar">
                              <span className="mockup-brand">PULSE HEALTH</span>
                              <Activity size={16} className="mockup-icon active-green" />
                            </div>
                            <div className="fitness-score-card">
                              <span className="score-label">Recovery Score</span>
                              <div className="score-number">94<span className="score-unit">%</span></div>
                              <span className="score-status">Optimal for training</span>
                            </div>
                            <div className="fitness-metrics-bars">
                              <div className="mini-stat-card">
                                <span className="ms-label">Heart Rate</span>
                                <span className="ms-val">62 bpm</span>
                              </div>
                              <div className="mini-stat-card">
                                <span className="ms-label">Sleep Target</span>
                                <span className="ms-val">8h 24m</span>
                              </div>
                            </div>
                            <div className="fitness-chart-mock">
                              <div className="chart-bar" style={{ height: '40%' }}></div>
                              <div className="chart-bar" style={{ height: '65%' }}></div>
                              <div className="chart-bar" style={{ height: '85%' }}></div>
                              <div className="chart-bar" style={{ height: '70%' }}></div>
                              <div className="chart-bar" style={{ height: '95%' }}></div>
                              <div className="chart-bar" style={{ height: '60%' }}></div>
                              <div className="chart-bar" style={{ height: '80%' }}></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    /* High-fidelity Dashboard Mockup Frame */
                    <div className="dashboard-mockup-frame">
                      <div className="dashboard-mockup-top">
                        <div className="window-dots">
                          <span className="dot dot-red"></span>
                          <span className="dot dot-yellow"></span>
                          <span className="dot dot-green"></span>
                        </div>
                        <span className="dash-title-mock">app.analytics.io/overview</span>
                      </div>
                      <div className="dashboard-mockup-body">
                        <div className="dash-stats-row">
                          <div className="dash-metric-box">
                            <span className="dm-lbl">Active Users</span>
                            <span className="dm-num">128.4k</span>
                            <span className="dm-grow">+18.2%</span>
                          </div>
                          <div className="dash-metric-box">
                            <span className="dm-lbl">Conversion</span>
                            <span className="dm-num">4.82%</span>
                            <span className="dm-grow">+4.1%</span>
                          </div>
                          <div className="dash-metric-box">
                            <span className="dm-lbl">MRR</span>
                            <span className="dm-num">$84.2k</span>
                            <span className="dm-grow">+24%</span>
                          </div>
                        </div>

                        <div className="dash-chart-mockup">
                          <div className="dash-chart-header">
                            <span>Traffic & Conversions</span>
                            <span className="live-pill">LIVE</span>
                          </div>
                          <div className="dash-wave-chart">
                            <div className="wave-line"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
