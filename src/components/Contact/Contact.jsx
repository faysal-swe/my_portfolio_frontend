import React, { useState } from 'react';
import { personalInfo } from '../../data/portfolioData';
import SectionHeading from '../UI/SectionHeading';
import { GithubIcon, LinkedinIcon, TwitterIcon, DribbbleIcon } from '../UI/SocialIcons';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ submitting: false, success: false, error: 'Please fill in all required fields.' });
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    // Simulate clean async dispatch
    setTimeout(() => {
      setStatus({ submitting: false, success: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus({ submitting: false, success: false, error: null }), 6000);
    }, 1000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <SectionHeading
          badge="Get in Touch"
          title="Let's Start a Conversation"
          subtitle="Have a project in mind, an open role, or want to collaborate? Send me a message below."
        />

        <div className="contact-grid">
          {/* Left Column: Interactive Form */}
          <div className="contact-form-card glass-card">
            <h3 className="form-card-title">Send a Message</h3>

            {status.success && (
              <div className="form-alert success">
                <CheckCircle2 size={18} />
                <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
              </div>
            )}

            {status.error && (
              <div className="form-alert error">
                <span>{status.error}</span>
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alexander Smith"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address <span className="req">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Consultation / Job Opportunity"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Your Message <span className="req">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project goals, timeline, and requirements..."
                  className="form-textarea"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary form-submit-btn"
                disabled={status.submitting}
              >
                {status.submitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Contact Details & Channels */}
          <div className="contact-details-col">
            <div className="contact-info-card glass-card">
              <h3 className="info-card-title">Contact Channels</h3>
              <p className="info-card-sub">
                Feel free to reach out via direct email or connect on professional networks.
              </p>

              <div className="contact-channel-list">
                {/* Email Item with 1-click Copy */}
                <div className="channel-item">
                  <div className="channel-icon-box">
                    <Mail size={20} />
                  </div>
                  <div className="channel-content">
                    <span className="channel-label">Email Address</span>
                    <span className="channel-value">{personalInfo.email}</span>
                  </div>
                  <button
                    className="channel-action-btn"
                    onClick={handleCopyEmail}
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check size={16} className="copied" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="channel-item">
                  <div className="channel-icon-box cyan">
                    <MapPin size={20} />
                  </div>
                  <div className="channel-content">
                    <span className="channel-label">Location</span>
                    <span className="channel-value">{personalInfo.location}</span>
                  </div>
                </div>

                {/* Availability Item */}
                <div className="channel-item">
                  <div className="channel-icon-box green">
                    <CheckCircle2 size={20} />
                  </div>
                  <div className="channel-content">
                    <span className="channel-label">Current Status</span>
                    <span className="channel-value status-available">{personalInfo.availability}</span>
                  </div>
                </div>
              </div>

              {/* Social Connections */}
              <div className="contact-social-section">
                <span className="social-heading">Follow & Connect</span>
                <div className="social-icons-row">
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon size={19} />
                  </a>

                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon size={19} />
                  </a>

                  <a
                    href={personalInfo.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label="Twitter Profile"
                  >
                    <TwitterIcon size={19} />
                  </a>

                  <a
                    href={personalInfo.socials.dribbble}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label="Dribbble Profile"
                  >
                    <DribbbleIcon size={19} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
