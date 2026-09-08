import React, { useState } from 'react';
import { featuredProjects } from '../../data/portfolioData';
import SectionHeading from '../UI/SectionHeading';
import { GithubIcon } from '../UI/SocialIcons';
import { ExternalLink, ArrowUpRight, Sparkles, Smartphone, BarChart3, ShoppingBag, Activity } from 'lucide-react';
import './Projects.css';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filterCategories = [
    { label: 'All Flutter Projects', value: 'all' },
    { label: 'Google Play Apps', value: 'play' }
  ];

  const filteredProjects = featuredProjects.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'play') return project.tags.includes('Google Play');
    return true;
  });

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <SectionHeading
          badge="Featured Projects"
          title="Crafted With Precision & Purpose"
          subtitle="Explore my published Flutter mobile applications built for performance, fluid UX, and scalability."
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
                      <span>Google Play</span>
                      <ArrowUpRight size={16} />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary project-btn"
                    >
                      <GithubIcon size={16} />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>

                {/* Visual / Mockup Column */}
                <div className="project-visual-col">
                  <div
                    className="project-mockup-glow"
                    style={{ background: `radial-gradient(circle, ${project.mockupColor}33 0%, transparent 70%)` }}
                  ></div>

                  {/* High-fidelity Phone Mockup Frame */}
                  <div className="phone-mockup-frame">
                    <div className="phone-speaker-notch">
                      <div className="camera-lens"></div>
                    </div>

                    <div className="phone-screen-content">
                      {project.id === 1 ? (
                        /* Motive Entertainment UI */
                        <div className="ecommerce-mockup-ui">
                          <div className="mockup-header-bar">
                            <span className="mockup-brand">MOTIVE APP</span>
                            <ShoppingBag size={16} className="mockup-icon" />
                          </div>
                          <div className="mockup-hero-banner">
                            <span className="banner-sub">Exclusive Specials</span>
                            <h4 className="banner-h">Top Dining Deals</h4>
                          </div>
                          <div className="mockup-product-grid">
                            <div className="product-card-mini">
                              <div className="product-thumb headphones">🍹</div>
                              <span className="p-title">Happy Hour</span>
                              <span className="p-price">50% Off</span>
                            </div>
                            <div className="product-card-mini">
                              <div className="product-thumb watch">🍕</div>
                              <span className="p-title">Artisan Pizza</span>
                              <span className="p-price">Save $12</span>
                            </div>
                            <div className="product-card-mini">
                              <div className="product-thumb shoes">🍔</div>
                              <span className="p-title">Craft Burgers</span>
                              <span className="p-price">Special</span>
                            </div>
                            <div className="product-card-mini">
                              <div className="product-thumb speaker">☕</div>
                              <span className="p-title">Café Brunch</span>
                              <span className="p-price">2 for 1</span>
                            </div>
                          </div>
                        </div>
                      ) : project.id === 2 ? (
                        /* Lola Football UI */
                        <div className="fitness-mockup-ui">
                          <div className="mockup-header-bar">
                            <span className="mockup-brand">LOLA FOOTBALL</span>
                            <Activity size={16} className="mockup-icon active-green" />
                          </div>
                          <div className="fitness-score-card">
                            <span className="score-label">Live Match • 78'</span>
                            <div className="score-number">2 - 1</div>
                            <span className="score-status">Real-time Stream Active</span>
                          </div>
                          <div className="fitness-metrics-bars">
                            <div className="mini-stat-card">
                              <span className="ms-label">Possession</span>
                              <span className="ms-val">58% - 42%</span>
                            </div>
                            <div className="mini-stat-card">
                              <span className="ms-label">Top Scorers</span>
                              <span className="ms-val">14 Goals</span>
                            </div>
                          </div>
                          <div className="fitness-chart-mock">
                            <div className="chart-bar" style={{ height: '55%' }}></div>
                            <div className="chart-bar" style={{ height: '75%' }}></div>
                            <div className="chart-bar" style={{ height: '90%' }}></div>
                            <div className="chart-bar" style={{ height: '65%' }}></div>
                            <div className="chart-bar" style={{ height: '100%' }}></div>
                            <div className="chart-bar" style={{ height: '70%' }}></div>
                            <div className="chart-bar" style={{ height: '85%' }}></div>
                          </div>
                        </div>
                      ) : (
                        /* Yoga with Jen UI */
                        <div className="fitness-mockup-ui">
                          <div className="mockup-header-bar">
                            <span className="mockup-brand">YOGA WITH JEN</span>
                            <Sparkles size={16} className="mockup-icon active-green" />
                          </div>
                          <div className="fitness-score-card" style={{ borderColor: 'rgba(16, 185, 129, 0.4)' }}>
                            <span className="score-label">Video Module • 25 Mins</span>
                            <div className="score-number" style={{ fontSize: '1.4rem', marginTop: '0.2rem' }}>Vinyasa Flow</div>
                            <span className="score-status" style={{ color: '#10b981' }}>★ 4.9 (128 Reviews)</span>
                          </div>
                          <div className="fitness-metrics-bars">
                            <div className="mini-stat-card">
                              <span className="ms-label">Community</span>
                              <span className="ms-val">340+ Posts</span>
                            </div>
                            <div className="mini-stat-card">
                              <span className="ms-label">Difficulty</span>
                              <span className="ms-val">All Levels</span>
                            </div>
                          </div>
                          <div className="fitness-chart-mock">
                            <div className="chart-bar" style={{ height: '35%', background: '#10b981' }}></div>
                            <div className="chart-bar" style={{ height: '60%', background: '#10b981' }}></div>
                            <div className="chart-bar" style={{ height: '85%', background: '#10b981' }}></div>
                            <div className="chart-bar" style={{ height: '95%', background: '#10b981' }}></div>
                            <div className="chart-bar" style={{ height: '75%', background: '#10b981' }}></div>
                            <div className="chart-bar" style={{ height: '85%', background: '#10b981' }}></div>
                            <div className="chart-bar" style={{ height: '90%', background: '#10b981' }}></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
