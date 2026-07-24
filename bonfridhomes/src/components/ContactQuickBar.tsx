import React from 'react';

const ContactQuickBar: React.FC = () => {
  return (
    <section
      style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid var(--color-border)',
        padding: '30px 0',
      }}
    >
      <div className="container">
        <div className="quickbar-grid">
          {/* Phone Detail */}
          <div className="quickbar-item">
            <div className="quickbar-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <span className="quickbar-label">Call Us Anytime</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <a href="tel:0715241591" className="quickbar-link">0715241591</a>
                <a href="tel:0713868501" className="quickbar-link">0713868501</a>
              </div>
            </div>
          </div>

          {/* Email Detail */}
          <div className="quickbar-item">
            <div className="quickbar-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div>
              <span className="quickbar-label">Email Us</span>
              <a href="mailto:info@bonifridhomes.com" className="quickbar-link">info@bonifridhomes.com</a>
            </div>
          </div>

          {/* Working Hours Detail */}
          <div className="quickbar-item">
            <div className="quickbar-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <span className="quickbar-label">Working Hours</span>
              <span className="quickbar-value">Mon–Sat 8:00–18:00</span>
              <span className="quickbar-value" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Sunday closed</span>
            </div>
          </div>

          {/* Location Detail */}
          <div className="quickbar-item">
            <div className="quickbar-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <span className="quickbar-label">Location</span>
              <span className="quickbar-value">Suite 309, New Home Center, Ruiru Town</span>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded QuickBar layout styles */}
      <style>{`
        .quickbar-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          align-items: flex-start;
        }
        .quickbar-item {
          display: flex;
          gap: 15px;
          align-items: flex-start;
        }
        .quickbar-icon {
          background-color: rgba(184, 44, 60, 0.05);
          width: 48px;
          height: 48px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justifyContent: center;
          flex-shrink: 0;
        }
        .quickbar-label {
          display: block;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--color-text-muted);
          font-weight: 700;
          margin-bottom: 4px;
        }
        .quickbar-value, .quickbar-link {
          display: block;
          font-size: 0.95rem;
          color: var(--color-primary);
          font-weight: 500;
          text-decoration: none;
          line-height: 1.4;
        }
        .quickbar-link {
          transition: color 0.2s ease;
        }
        .quickbar-link:hover {
          color: var(--color-accent);
        }
        @media (max-width: 992px) {
          .quickbar-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px 20px;
          }
        }
        @media (max-width: 576px) {
          .quickbar-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactQuickBar;
