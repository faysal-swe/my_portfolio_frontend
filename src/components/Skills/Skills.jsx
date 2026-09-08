import React, { useState } from 'react';
import { skillCategories } from '../../data/portfolioData';
import SectionHeading from '../UI/SectionHeading';
import { Layout, Server, Smartphone, Palette, Check, Zap, Code2, Database } from 'lucide-react';
import './Skills.css';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Layout': return <Code2 size={22} />;
      case 'Server': return <Zap size={22} />;
      case 'Smartphone': return <Smartphone size={22} />;
      case 'Palette': return <Database size={22} />;
      default: return <Zap size={22} />;
    }
  };

  const filteredCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter((cat) => cat.category === activeTab);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <SectionHeading
          badge="Technical Skills"
          title="Engineered With Modern Flutter Tooling"
          subtitle="Specialized in Flutter cross-platform mobile engineering, Dart, clean state management, and Firebase."
          align="center"
        />

        {/* Category Filter Pills */}
        <div className="skills-tabs-container">
          <button
            className={`skill-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Skills
          </button>
          {skillCategories.map((cat, idx) => (
            <button
              key={idx}
              className={`skill-tab-btn ${activeTab === cat.category ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.category)}
            >
              {cat.category}
            </button>
          ))}
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
