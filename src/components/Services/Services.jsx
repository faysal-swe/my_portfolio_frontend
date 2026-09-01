import React from 'react';
import { services } from '../../data/portfolioData';
import SectionHeading from '../UI/SectionHeading';
import { Code2, Palette, Smartphone, Zap, ShieldCheck, Layers, CheckCircle2 } from 'lucide-react';
import './Services.css';

export default function Services() {
  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Code2': return <Code2 size={24} />;
      case 'Palette': return <Palette size={24} />;
      case 'Smartphone': return <Smartphone size={24} />;
      case 'Zap': return <Zap size={24} />;
      case 'ShieldCheck': return <ShieldCheck size={24} />;
      case 'Layers': return <Layers size={24} />;
      default: return <Code2 size={24} />;
    }
  };

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <SectionHeading
          badge="Services & Expertise"
          title="Solutions Tailored For Growth & Scale"
          subtitle="From concept to scalable production, I provide end-to-end digital solutions."
          align="center"
        />

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card glass-card">
              <div className="service-icon-box">
                {getServiceIcon(service.icon)}
              </div>

              <h3 className="service-card-title">{service.title}</h3>

              <p className="service-card-desc">
                {service.description}
              </p>

              <div className="service-perks-list">
                {service.perks.map((perk, pIdx) => (
                  <div key={pIdx} className="service-perk-item">
                    <CheckCircle2 size={15} className="perk-check-icon" />
                    <span>{perk}</span>
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
