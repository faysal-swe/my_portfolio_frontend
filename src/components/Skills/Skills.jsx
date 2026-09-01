import React, { useState } from 'react';
import { skillCategories } from '../../data/portfolioData';
import SectionHeading from '../UI/SectionHeading';
import { Layout, Server, Smartphone, Palette, Check, Zap } from 'lucide-react';
import './Skills.css';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Layout': return <Layout size={22} />;
      case 'Server': return <Server size={22} />;
      case 'Smartphone': return <Smartphone size={22} />;
      case 'Figma':
      case 'Palette': return <Palette size={22} />;
      default: return <Zap size={22} />;
    }
  };

  const filteredCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter((cat) => cat.category.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <SectionHeading
          badge="Skills & Technologies"
          title="Engineered With Modern Tooling & Clean Code"
          subtitle="A comprehensive toolkit across full-stack engineering, interface design, and cloud infrastructures."
          align="center"
        />

        {/* Category Filter Pills */}
        <div className="skills-tabs-container">
          <button
            className={`skill-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Disciplines
          </button>
          <button
            className={`skill-tab-btn ${activeTab === 'frontend' ? 'active' : ''}`}
            onClick={() => setActiveTab('frontend')}
          >
            Frontend
          </button>
          <button
            className={`skill-tab-btn ${activeTab === 'backend' ? 'active' : ''}`}
            onClick={() => setActiveTab('backend')}
          >
            Backend
          </button>
          <button
            className={`skill-tab-btn ${activeTab === 'mobile' ? 'active' : ''}`}
            onClick={() => setActiveTab('mobile')}
          >
            Mobile & DevOps
          </button>
          <button
            className={`skill-tab-btn ${activeTab === 'design' ? 'active' : ''}`}
            onClick={() => setActiveTab('design')}
          >
            UI/UX Design
          </button>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredCategories.map((cat, idx) => (
            <div key={idx} className="skill-category-card glass-card">
              <div className="category-card-header">
                <div className="category-icon-wrapper">
                  {getCategoryIcon(cat.icon)}
                </div>
                <h3 className="category-name">{cat.category}</h3>
              </div>

              <div className="skills-progress-list">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-progress-item">
                    <div className="skill-meta">
                      <span className="skill-title">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="progress-bar-track">
                      <div
                        className="progress-bar-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
