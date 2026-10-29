import React, { useEffect, useState } from 'react';
import './Contact.css';

async function copyEmailAddress(address: string) {
  try {
    await navigator.clipboard.writeText(address);
  } catch {
    // Support browsers where the Clipboard API is unavailable or restricted.
    const previousFocus = document.activeElement;
    const field = document.createElement('textarea');
    field.value = address;
    field.readOnly = true;
    field.style.cssText = 'position:fixed;inset:0;opacity:0;pointer-events:none;';
    document.body.appendChild(field);
    try {
      field.select();
      if (!document.execCommand('copy')) throw new Error('Clipboard unavailable');
    } finally {
      field.remove();
      if (previousFocus instanceof HTMLElement) previousFocus.focus({ preventScroll: true });
    }
  }
}

function ContactEmail({ address, label }: { address: string; label: string }) {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'error'>('idle');

  useEffect(() => {
    if (copyStatus === 'idle') return;
    const timeout = window.setTimeout(() => setCopyStatus('idle'), 3000);
    return () => window.clearTimeout(timeout);
  }, [copyStatus]);

  const copyAddress = async () => {
    try {
      await copyEmailAddress(address);
      setCopyStatus('copied');
    } catch {
      setCopyStatus('error');
    }
  };

  return (
    <div className="detail-item">
      <span className="detail-label">{label}</span>
      <div className="contact-email-row">
        <a href={`mailto:${address}`} className="detail-link" aria-label={`Email ${label} at ${address}`}>{address}</a>
        <button type="button" className="contact-copy-email" onClick={copyAddress} aria-label={`Copy email address ${address}`} title={copyStatus === 'copied' ? 'Copied' : copyStatus === 'error' ? 'Unable to copy — try again' : 'Copy email'}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
            {copyStatus === 'copied' ? <path d="m5 12 4 4L19 6" /> : copyStatus === 'error' ? <><path d="M12 8v5m0 3h.01" /><circle cx="12" cy="12" r="9" /></> : <><rect x="8" y="8" width="12" height="12" rx="1.5" /><path d="M16 8V4H4v12h4" /></>}
          </svg>
        </button>
        <span className="sr-only" role="status">
          {copyStatus === 'copied' ? `${address} copied to clipboard.` : copyStatus === 'error' ? 'Unable to copy. You can select and copy the email address manually.' : ''}
        </span>
      </div>
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you. We will connect shortly.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section" id="contact">



      <div className="container">
        <div className="contact-grid">

          {/* Left Column: Details */}
          <div className="contact-info">
            <div className="header-label">
              
              <span className="label-text">Contact</span>
            </div>
            <h2 className="contact-title">
              Start a <br />
              <span className="italic-title">conversation</span>.
            </h2>
            <div className="contact-details">
              <ContactEmail address="rebornagency400@gmail.com" label="General & New Business" />
              <ContactEmail address="mideakins99@gmail.com" label="Press & Partnerships" />
              <div className="detail-item">
                <span className="detail-label">Visit Us</span>
                <span className="detail-value">Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">

              {/* Name Field */}
              <div className="form-field">
                <label className="field-label" htmlFor="contact-name">Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="field-input"
                />
              </div>

              {/* Email Field */}
              <div className="form-field">
                <label className="field-label" htmlFor="contact-email">Email Address</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="field-input"
                />
              </div>

              {/* Message Field */}
              <div className="form-field">
                <label className="field-label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell us about your project"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="field-input text-area"
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="form-submit-btn ui-button ui-gradient">
                <span className="submit-btn-text">Send Inquiry</span>
                <span className="submit-btn-arrow ui-arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>

            </form>
          </div>

        </div>

        {/* Footer info bottom */}
        <div className="contact-footer">
          <span className="footer-copyright">© {new Date().getFullYear()} REBORN STUDIO. All Rights Reserved.</span>
          <span className="footer-credits">Made with extreme restraint.</span>
        </div>

      </div>
    </section>
  );
}
