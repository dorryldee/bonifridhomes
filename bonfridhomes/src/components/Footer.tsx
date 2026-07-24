import React from 'react';
import Logo from './Logo';

interface FooterProps {
  setView: (view: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, viewName: string) => {
    e.preventDefault();
    setView(viewName);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-primary)',
        color: 'white',
        padding: '80px 0 40px',
        borderTop: '5px solid var(--color-accent)',
      }}
    >
      <div className="container">
        <div className="footer-grid" style={{ marginBottom: '60px' }}>
          {/* Col 1: Brand & Desc */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Logo size={70} className="footer-logo" lightText={true} />
            <p style={{ fontSize: '0.9rem', opacity: 0.7, lineHeight: '1.7', marginTop: '10px' }}>
              Redefining real estate operations through elite management, strict tenant screening, and completely automated financial statement tracking.
            </p>
            {/* Certifications */}
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', opacity: 0.6, fontSize: '0.75rem', marginTop: '10px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 21V9h6v12" />
              </svg>
              <span>Equal Housing Opportunity</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <li>
                <a href="#" onClick={(e) => handleNavClick(e, 'home')} style={{ opacity: 0.8 }} className="foot-link">
                  Home Page
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleNavClick(e, 'about')} style={{ opacity: 0.8 }} className="foot-link">
                  About Our Vision
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleNavClick(e, 'services')} style={{ opacity: 0.8 }} className="foot-link">
                  Corporate Solutions
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleNavClick(e, 'letting-plan')} style={{ opacity: 0.8 }} className="foot-link">
                  The Letting Plan
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleNavClick(e, 'portfolio')} style={{ opacity: 0.8 }} className="foot-link">
                  Featured Homes
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleNavClick(e, 'contact')} style={{ opacity: 0.8 }} className="foot-link">
                  Support & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>Contact Details</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px', fontSize: '0.9rem' }}>
              {/* Phone info */}
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', opacity: 0.85 }}>
                  <a href="tel:0715241591" style={{ color: '#ffffff' }}>0715241591</a>
                  <a href="tel:0713868501" style={{ color: '#ffffff' }}>0713868501</a>
                </div>
              </li>

              {/* Email info */}
              <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span style={{ opacity: 0.85 }}>
                  <a href="mailto:info@bonifridhomes.com" style={{ color: '#ffffff' }}>info@bonifridhomes.com</a>
                </span>
              </li>

              {/* Location info */}
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{ opacity: 0.85, lineHeight: '1.4', color: '#ffffff' }}>
                  Suite 309, New Home Center, Ruiru Town
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Operations */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>Business Hours</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', opacity: 0.8 }}>
              <li>Monday - Friday: <strong>8:00 AM - 5:00 PM</strong></li>
              <li>Saturdays: <strong>9:00 AM - 1:00 PM</strong></li>
              <li>Emergency Support: <strong>24/7/365 On-Call Caretakers</strong></li>
            </ul>
          </div>
        </div>

        {/* Lower row: copyright */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '30px',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '15px',
            fontSize: '0.8rem',
            opacity: 0.6,
          }}
        >
          <span>&copy; {new Date().getFullYear()} Bonifrid Homes. All rights reserved. Registered Real Estate Management Entity.</span>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" onClick={(e) => e.preventDefault()}>Terms of Service</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
            <a href="#" onClick={(e) => e.preventDefault()}>ADA Accessibility Statement</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
