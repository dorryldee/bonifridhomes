import React, { useState } from 'react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  initials: string;
}

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [imgError, setImgError] = useState(false);

  // If we have an image path and it hasn't errored out, show the image; otherwise fallback to initials avatar badge.
  const displayImage = member.image && !imgError;

  const isFounder = member.initials === 'B' || member.initials === 'F';

  return (
    <div
      className="team-card"
      style={{
        backgroundColor: 'white',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-md)',
        padding: '0 ',
        textAlign: 'center',
        transition: 'var(--transition-normal)',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Avatar Container */}
     <div
  style={{
    width: '100%',
    height: '200px',
    position: 'relative',
    marginBottom: '20px',
  }}
>
        {displayImage ? (
          <img
            src={member.image ? `${import.meta.env.BASE_URL}${member.image.substring(1)}` : ''}
            alt={member.name}
            onError={() => setImgError(true)}
              style={{
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderTopLeftRadius: 'var(--radius-md)',
    borderTopRightRadius: 'var(--radius-md)',
  }}
 
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              backgroundColor: isFounder ? 'var(--color-primary)' : 'rgba(10, 25, 49, 0.05)',
              color: isFounder ? 'white' : 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.8rem',
              fontWeight: 700,
              border: isFounder ? '2px solid var(--color-accent)' : '2px dashed var(--color-border)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            {member.initials}
          </div>
        )}
      </div>

      <h4 style={{ color: 'var(--color-primary)', fontSize: '1.15rem', marginBottom: '4px', fontWeight: 600 }}>
        {member.name}
      </h4>
      <p style={{ color: 'var(--color-accent)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 700, marginBottom: '14px' }}>
        {member.role}
      </p>
      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', lineHeight: '1.6', maxWidth: '280px' }}>
        {member.bio}
      </p>
    </div>
  );
};

const AboutVision: React.FC = () => {
  const founders: TeamMember[] = [
    {
      name: 'Boniface',
      role: 'Director & Founder',
      bio: 'Providing executive strategic guidance and personalized relationship management for Nairobi real estate portfolios.',
      image: '/bo.jpeg',
      initials: 'B',
    },
    {
      name: 'Fridah',
      role: 'Director & Founder',
      bio: 'Leading direct customer success, landlord relation protocols and ensuring maximum occupancy standards.',
      image: '/oed.webp',
      initials: 'F',
    },
  ];

  const managers: TeamMember[] = [
    {
      name: 'Operations Manager',
      role: 'Vetting & Finance',
      bio: 'Manages strict profile screening, direct bank remittance protocols, and automated monthly financial statement tracking.',
      image: '/team/operations.jpg',
      initials: 'OM',
    },
    {
      name: 'Letting Specialist',
      role: 'Marketing & Placements',
      bio: 'Coordinates digital placement (Buyrent Kenya, Property24), local neighborhood ad banners, and booking tours.',
      image: '/team/marketing.jpg',
      initials: 'ML',
    },
    {
      name: 'Technical Coordinator',
      role: 'Site Support & Caretakers',
      bio: 'Supervises emergency plumbers, electricians, deep-cleaning teams, and routine physical property health audits.',
      image: '/team/maintenance.jpg',
      initials: 'TC',
    },
  ];

  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="container">
        {/* Top title */}
        <h2 className="section-title">About Bonifrid Homes</h2>
        <p className="section-subtitle">
          Established on integrity, fueled by excellence, and defined by the properties we manage.
        </p>

        {/* Split grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', alignItems: 'center' }}>
          
          {/* Left panel: Narrative */}
          <div>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '18px' }}>
              Our Story & Commitment
            </h3>
            <p style={{ color: 'var(--color-text-dark)', marginBottom: '20px', fontSize: '1.05rem', lineHeight: '1.8' }}>
              Bonifrid Homes has over six (6) years of professional experience in property management and marketing. Managing over 1,000 tenancies across Nairobi and its outcasts (like Ruiru Town), we have grown to be big enough to manage any portfolio size, yet remain small enough to adapt to every client's unique requirements.
            </p>
            <p style={{ color: 'var(--color-text-dark)', marginBottom: '30px', fontSize: '1rem', lineHeight: '1.8' }}>
              Our concept is simple: we eliminate the headaches that come with being a landlord. Through rigorous vetting, prompt rent banking directly to landlords' bank accounts, in-house technical maintenance teams, and weekly updates, we treat your property like our own.
            </p>

           
          </div>

          {/* Right panel: Vision Card */}
          <div
            style={{
              backgroundColor: 'var(--color-text-light)',
              padding: '30px',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-md)',
              borderLeft: '5px solid var(--color-accent)',
              transition: 'var(--transition-normal)',
              alignSelf: 'stretch',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            className="vision-card"
          >
            <h4 style={{ fontSize: '1.3rem', color: 'var(--color-primary)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              Our Concept & Vision
            </h4>
            <p style={{ color: 'var(--color-text-dark)', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>
              To offer personalized, high-caliber property management founded on Professionalism, Integrity, Accountability, Excellence and Quality Service. We guarantee the maximum return from your investment while maintaining your asset at peak standards to attract premium tenants.
            </p>
          </div>
        </div>

        {/* Section Spacer */}
        <div style={{ height: '70px' }} />

        {/* Core Values Section */}
        <div>
          <h3 style={{ fontSize: '2rem', color: 'var(--color-primary)', textAlign: 'center', marginBottom: '10px', fontWeight: 700, fontFamily: 'var(--font-headings)' }}>
            Our Core Values
          </h3>
          <p style={{ color: 'var(--color-text-muted)', textAlign: 'center', maxWidth: '650px', margin: '0 auto 40px', fontSize: '0.95rem', lineHeight: '1.6' }}>
            We operate with honesty, transparency and high standards in every property we manage to guarantee landlord and tenant success.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '25px' }}>
            
            {/* Card 1: Accountability (Fade Blue) */}
            <div
              className="value-card"
              style={{
                backgroundColor: 'rgba(59, 130, 246, 0.05)',
                border: '1.5px solid rgba(59, 130, 246, 0.15)',
                borderRadius: 'var(--radius-md)',
                padding: '30px 24px',
                boxShadow: 'var(--shadow-sm)',
                
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
               
                <h4 style={{ color: 'var(--color-primary)', fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>Accountability</h4>
              </div>
              <p style={{ color: 'var(--color-text-dark)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                We take ownership of every commitment we make to landlords, tenants and each other. When something goes wrong, we own it and fix it, rather than passing blame.
              </p>
            </div>

            {/* Card 2: Excellence (Fade Red) */}
            <div
              className="value-card"
              style={{
                backgroundColor: 'rgba(184, 44, 60, 0.05)',
                border: '1.5px solid rgba(184, 44, 60, 0.15)',
                borderRadius: 'var(--radius-md)',
                padding: '30px 24px',
                boxShadow: 'var(--shadow-sm)',
                transition: 'var(--transition-normal)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
               
                <h4 style={{ color: 'var(--color-primary)', fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>Excellence</h4>
              </div>
              <p style={{ color: 'var(--color-text-dark)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                We hold ourselves to a high standard in everything we do, from how we manage properties to how we communicate. We're not satisfied with "good enough" we aim to do it right.
              </p>
            </div>

            {/* Card 3: Integrity (Fade Green) */}
            <div
              className="value-card"
              style={{
                backgroundColor: 'rgba(34, 197, 94, 0.05)',
                border: '1.5px solid rgba(34, 197, 94, 0.15)',
                borderRadius: 'var(--radius-md)',
                padding: '30px 24px',
                boxShadow: 'var(--shadow-sm)',
                transition: 'var(--transition-normal)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                
                <h4 style={{ color: 'var(--color-primary)', fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>Integrity</h4>
              </div>
              <p style={{ color: 'var(--color-text-dark)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                We operate with honesty and transparency, even when no one's watching. Landlords and tenants can trust that we'll do what we say and say what we mean.
              </p>
            </div>

            {/* Card 4: Customer Satisfaction (Fade Gray) */}
            <div
              className="value-card"
              style={{
                backgroundColor: 'rgba(100, 116, 139, 0.06)',
                border: '1.5px solid rgba(100, 116, 139, 0.15)',
                borderRadius: 'var(--radius-md)',
                padding: '30px 24px',
                boxShadow: 'var(--shadow-sm)',
                transition: 'var(--transition-normal)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
               
                <h4 style={{ color: 'var(--color-primary)', fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>Customer Satisfaction</h4>
              </div>
              <p style={{ color: 'var(--color-text-dark)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                Your experience is the measure of our success. We listen, adapt and go the extra mile to make sure landlords and tenants are genuinely happy with our service.
              </p>
            </div>

          </div>
        </div>

        {/* Section Spacer */}
        <div style={{ height: '70px' }} />

        {/* OUR TEAM */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
          <div>
            <h3 style={{ fontSize: '2rem', color: 'var(--color-primary)', textAlign: 'center', marginBottom: '10px', fontWeight: 700, fontFamily: 'var(--font-headings)' }}>
              MEET THE TEAM
            </h3>
            <p style={{ color: 'var(--color-text-muted)', textAlign: 'center', maxWidth: '650px', margin: '0 auto', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Meet the founders and operational leaders coordinates at Bonifrid Homes committed to securing stable yields.
            </p>
          </div>

          {/* Group 1: Founders */}
          <div>
            <h4 style={{ fontSize: '0.85rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 800, marginBottom: '25px', textAlign: 'center' }}>
              Founders
            </h4>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
              {founders.map((founder, index) => (
                <TeamCard key={index} member={founder} />
              ))}
            </div>
          </div>

          {/* Group 2: Managers */}
          <div>
            <h4 style={{ fontSize: '0.85rem', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 800, marginBottom: '25px', textAlign: 'center' }}>
              Management & Leadership
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(235px, 1fr))', gap: '30px', justifyContent: 'center' }}>
              {managers.map((manager, index) => (
                <TeamCard key={index} member={manager} />
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .vision-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }
        .team-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-accent) !important;
          box-shadow: var(--shadow-md) !important;
        }
        .value-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md) !important;
        }
      `}</style>
    </section>
  );
};

export default AboutVision;
