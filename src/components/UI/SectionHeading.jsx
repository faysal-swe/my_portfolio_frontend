import React from 'react';
import './SectionHeading.css';

export default function SectionHeading({ badge, title, subtitle, align = 'left' }) {
  return (
    <div className={`section-header ${align === 'center' ? 'center' : ''}`}>
      {badge && (
        <div className="section-badge">
          <span className="badge-dot"></span>
          <span>{badge}</span>
        </div>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
