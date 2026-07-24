import React from 'react';

interface PlanStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const LettingPlan: React.FC = () => {
  const steps: PlanStep[] = [
    {
      title: '1. Comparative Market Analysis (CMA)',
      description: 'We suggest and advise on amenities or changes to make your property competitive, arriving at the premium market rent.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      )
    },
    {
      title: '2. Aggressive Multi-Channel Marketing',
      description: 'We list vacant spaces on top platforms (Buyrent Kenya, Property24, OLX, Pigiame) and launch targeted social media campaigns.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      )
    },
    {
      title: '3. Strategic Physical Ads',
      description: 'Placing descriptive "TO LET" banners on your block, strategic neighborhood boards, and generating fliers in malls & social centers.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 17V7l7 5-7 5z" />
        </svg>
      )
    },
    {
      title: '4. Direct Outreach & Booking',
      description: 'We contact at least 25 prospects daily, appointing a site representative to handle walkthroughs and capture tenant feedback.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      )
    }
  ];

  return (
    <section id="letting-plan" className="section" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="container">
        <h2 className="section-title">The Letting Strategy</h2>
        <p className="section-subtitle">
          How we achieve full occupancy and source verified tenants for your property.
        </p>

        {/* Dynamic horizontal steps / cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px', marginTop: '30px' }}>
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="letting-step-card"
              style={{
                backgroundColor: 'white',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '30px',
                boxShadow: 'var(--shadow-sm)',
                transition: 'var(--transition-normal)',
                position: 'relative',
              }}
            >
              {/* Highlight number overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '20px',
                  fontSize: '3rem',
                  fontWeight: 800,
                  color: 'rgba(10, 25, 49, 0.03)',
                  lineHeight: '1',
                  userSelect: 'none',
                }}
              >
                0{idx + 1}
              </div>

              <div
                style={{
                  color: 'var(--color-accent)',
                  backgroundColor: 'rgba(184, 44, 60, 0.06)',
                  width: '50px',
                  height: '50px',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                {step.icon}
              </div>

              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary)', marginBottom: '10px', fontWeight: 600 }}>
                {step.title}
              </h3>
              
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Vetting Detail Callout */}
        <div
          style={{
            marginTop: '50px',
            backgroundColor: 'var(--color-bg-alt)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            padding: '35px',
            display: 'flex',
            alignItems: 'center',
            gap: '30px',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              backgroundColor: 'var(--color-accent)',
              color: 'white',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 4px 10px rgba(184, 44, 60, 0.25)',
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
            </svg>
          </div>
          <div style={{ flex: '1' }}>
            <h4 style={{ color: 'var(--color-primary)', fontSize: '1.25rem', marginBottom: '8px' }}>
              Rigorous Tenant Vetting Guarantee
            </h4>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>
              We require colored passport photos, copies of National ID or Alien cards (for international students/tenants), and completed tenancy profiles. Before move-in, we sign leases and conduct thorough checks on next of kin for safety.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .letting-step-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
          border-color: rgba(184, 44, 60, 0.2);
        }
      `}</style>
    </section>
  );
};

export default LettingPlan;
