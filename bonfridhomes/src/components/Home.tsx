import React from 'react';
import Hero from './Hero';
import ContactQuickBar from './ContactQuickBar';

interface HomeProps {
  setView: (view: string) => void;
}

const Home: React.FC<HomeProps> = ({ setView }) => {
  const handleNavigate = (viewName: string) => {
    setView(viewName);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  return (
    <div>
      {/* 1. Hero Carousel */}
      <Hero setView={setView} />

      {/* 2. Horizontal Bare Contact Details Bar */}
      <ContactQuickBar />

      {/* 3. About Elevator Pitch */}
      <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
            {/* Left Image Column */}
            <div style={{ position: 'relative' }}>
              <img
                src={`${import.meta.env.BASE_URL}HERO.jpeg`}
                alt="Bonifrid Homes Suburban Management"
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-md)',
                }}
              />
          
            </div>

            {/* Right Text Column */}
            <div>
              <span
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'var(--color-accent)',
                  letterSpacing: '2px',
                  display: 'block',
                  marginBottom: '12px',
                }}
              >
                Who We Are
              </span>
              <h2 style={{ fontSize: '2.2rem', color: 'var(--color-primary)', marginBottom: '20px', fontWeight: 700, lineHeight: '1.25' }}>
                Big Enough to Manage, Small Enough to Adapt
              </h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '24px' }}>
                Bonifrid Homes is a premier property management partner in Nairobi and Ruiru. We offer executive guidance, tailored landlord relations, and in-house caretaking to maximize the yield of your investment property while maintaining it at the highest standards.
              </p>
              <button
                onClick={() => handleNavigate('about')}
                className="btn btn-accent"
                style={{ padding: '14px 28px', fontSize: '0.92rem' }}
              >
                Our Vision & Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Overview (Elevator Pitch Grid) */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--color-bg-light)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
                letterSpacing: '2px',
                display: 'block',
                marginBottom: '12px',
              }}
            >
              What We Offer
            </span>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--color-primary)', fontWeight: 700 }}>
              Tailored Property Management Solutions
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginBottom: '40px' }}>
            {/* Service 1 */}
            <div style={{ backgroundColor: '#ffffff', padding: '35px 30px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <div style={{ color: 'var(--color-accent)', marginBottom: '18px' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <polyline points="16 11 18 13 22 9" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary)', marginBottom: '12px', fontWeight: 700 }}>
                Strict Tenant Screening
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                We conduct 100% background checks, employment vetting, and utility history evaluations to safeguard your rental yields.
              </p>
            </div>

            {/* Service 2 */}
            <div style={{ backgroundColor: '#ffffff', padding: '35px 30px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <div style={{ color: 'var(--color-accent)', marginBottom: '18px' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary)', marginBottom: '12px', fontWeight: 700 }}>
                Rent Banking & Remittance
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Timely rent collection directly into landlord bank accounts by the 10th of every month with absolute financial accountability.
              </p>
            </div>

            {/* Service 3 */}
            <div style={{ backgroundColor: '#ffffff', padding: '35px 30px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <div style={{ color: 'var(--color-accent)', marginBottom: '18px' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary)', marginBottom: '12px', fontWeight: 700 }}>
                In-House Technical Support
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                24/7 plumbers, site caretakers, and engineers coordinate ongoing utility checkups and emergency plumber repairs.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => handleNavigate('services')}
              className="btn btn-outline"
              style={{
                border: '2px solid var(--color-primary)',
                color: 'white',
                backgroundColor: 'var(--color-secondary)',
                padding: '14px 28px',
                fontSize: '0.92rem',
                fontWeight: 600,
              }}
            >
              Explore All Services & Packages
            </button>
          </div>
        </div>
      </section>

      {/* 5. Trust & Social Proof Preview */}
      <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', alignItems: 'center' }}>
            {/* Left Column: Stat block */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div>
                <span
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--color-accent)',
                    letterSpacing: '2px',
                    display: 'block',
                    marginBottom: '10px',
                  }}
                >
                  Our Track Record
                </span>
                <h2 style={{ fontSize: '2rem', color: 'var(--color-primary)', fontWeight: 700, lineHeight: '1.3', marginBottom: '15px' }}>
                  Why Property Owners Partner With Us
                </h2>
              </div>
              
              <div style={{ display: 'flex', gap: '40px' }}>
                
                <div>
                  <strong style={{ display: 'block', fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-primary)' }}>98%</strong>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Collection Success</span>
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-primary)' }}>24/7</strong>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Caretaker Support</span>
                </div>
              </div>
            </div>

            {/* Right Column: Highlight Review */}
            <div
              style={{
                backgroundColor: 'var(--color-bg-light)',
                border: '1px solid var(--color-border)',
                padding: '40px',
                borderRadius: 'var(--radius-md)',
                position: 'relative',
              }}
            >
              {/* Quote Mark */}
              <span
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '30px',
                  fontSize: '4.5rem',
                  fontFamily: 'Georgia, serif',
                  color: 'rgba(184, 44, 60, 0.15)',
                  lineHeight: 1,
                  pointerEvents: 'none',
                }}
              >
                “
              </span>

              <div style={{ color: '#fbbf24', fontSize: '1.1rem', marginBottom: '15px' }}>★ ★ ★ ★ ★</div>
              <p style={{ fontStyle: 'italic', color: 'var(--color-primary)', fontSize: '0.98rem', lineHeight: '1.6', marginBottom: '24px' }}>
                "We signed up Bonifrid Homes for our Ruiru residential block. Their tenant screening process is rigorous; we haven't experienced utility defaults or payment delays. Outstanding support."
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-primary)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                  }}
                >
                  JK
                </div>
                <div>
                  <strong style={{ display: 'block', color: 'var(--color-primary)', fontSize: '0.9rem' }}>Joseph Kamau</strong>
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Apartment Block Owner, Ruiru</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
