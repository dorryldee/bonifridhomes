import React, { useState, useEffect, useRef } from 'react';

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features?: string[];
}

interface Testimonial {
  id: number;
  name: string;
  profession: string;
  comment: string;
  rating: number;
  image?: string;
}

// Move static data outside component to avoid hoist/reference errors on render
const servicesList: ServiceItem[] = [
  {
    id: 1,
    title: 'Marketing & Rapid Letting',
    description: 'We ensure full occupancy by filling vacancies in a record two months using advanced local and digital campaigns.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    features: ['Listings on Buyrent Kenya, Property24, OLX & Pigiame', 'Social Media Ads & strategic neighborhood boards', 'Weekly briefs on marketing progression']
  },
  {
    id: 2,
    title: 'Tenant Vetting & Administration',
    description: 'Stringent screening and legally sound lease signing process protecting your income and premises.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 11l-4 4-2-2" />
      </svg>
    ),
    features: ['Colored photo & ID verification (National / Alien ID)', 'Drafting & execution of binding leases', 'Legal eviction and dispute administration']
  },
  {
    id: 3,
    title: 'Rent Collections & Accounting',
    description: 'Transparent automated accounting ensuring landlords get paid by the 10th of every month.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    features: ['Option A: Direct banking into landlord account', 'Option B: Collection into agent account with guaranteed monthly payout', 'Interim statements by 11th, final by 20th']
  },
  {
    id: 4,
    title: 'Asset Maintenance & Utility Supervision',
    description: 'Qualified in-house team of workmen handling regular checkups and utility invoice settlements.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    features: ['24/7 emergency response protocols', 'Weekly field and site safety inspections', 'Management of garbage, county water, lift, and KPLC common areas']
  }
];

const testimonialsList: Testimonial[] = [
  {
    id: 1,
    name: 'Jane Kamau',
    profession: 'Apartment Owner, Ruiru',
    comment: 'Bonifrid Homes completely turned my apartments around. They filled all 12 vacant units in Ruiru within 5 weeks, and rent deposits hit my bank account without fail by the 9th of every month. I highly recommend them.',
    rating: 5,
    image: '/team/testimonial1.jpg'
  },
  {
    id: 2,
    name: 'David Mwanza',
    profession: 'Landlord, Nairobi Outskirts',
    comment: 'The vetting process is top-notch. I previously had tenants who default on utilities, but Bonifrid\'s strict screening has given me zero issues for two years. A game changer.',
    rating: 5,
    image: '/team/testimonial2.jpg'
  },
  {
    id: 3,
    name: 'Emily Otieno',
    profession: 'Commercial Manager',
    comment: 'Outstanding communication and maintenance. Their caretaker team handles utility repairs, painting, and water supervision with complete transparency. Excellent service!',
    rating: 5,
    image: '/team/testimonial3.jpg'
  },
  {
    id: 4,
    name: 'James Githua',
    profession: 'Tenant, Ruiru',
    comment: 'Renting with Bonifrid Homes has been a breeze. Prompt responses to repairs and straightforward deposits return when moving. Definitely the best agency I have dealt with.',
    rating: 5,
    image: '/team/testimonial4.jpg'
  }
];

const TestimonialCard: React.FC<{
  item: Testimonial;
  style: React.CSSProperties;
  onClick?: () => void;
}> = ({ item, style, onClick }) => {
  const [imgError, setImgError] = useState(false);
  const initials = item.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <div style={style} onClick={onClick}>
      {/* Quote Symbol */}
      <span
        style={{
          position: 'absolute',
          top: '10px',
          right: '25px',
          fontSize: '5.5rem',
          color: 'rgba(184, 44, 60, 0.45)',
          fontFamily: 'Georgia, serif',
          fontWeight: 'bold',
          lineHeight: 1,
          pointerEvents: 'none',
        }}
      >
        ”
      </span>

      {/* Header Info */}
      <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '18px' }}>
        <div
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid var(--color-accent)',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f1f5f9',
          }}
        >
          {item.image && !imgError ? (
            <img
              src={`${import.meta.env.BASE_URL}${item.image.substring(1)}`}
              alt={item.name}
              onError={() => setImgError(true)}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <span style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '1.2rem' }}>{initials}</span>
          )}
        </div>
        <div>
          <h4 style={{ color: 'var(--color-primary)', fontSize: '1.05rem', fontWeight: 700, margin: '0 0 2px 0' }}>
            {item.name}
          </h4>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            {item.profession}
          </p>
        </div>
      </div>

      {/* Five Star Rating */}
      <div style={{ color: '#ffc107', fontSize: '1rem', marginBottom: '12px', display: 'flex', gap: '3px' }}>
        {Array.from({ length: item.rating }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>

      {/* Comment Body */}
      <p style={{ color: 'var(--color-text-dark)', fontSize: '0.88rem', lineHeight: '1.6', margin: 0, fontStyle: 'italic' }}>
        "{item.comment}"
      </p>
    </div>
  );
};

const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const resumeTimeoutRef = useRef<any>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  // Autoplay timer: auto-advances every 6 seconds, pauses on hover or touch interaction
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsList.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [activeIndex, isPaused]);

  const handleTouchStart = () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    // Persist pause on mobile for 4 seconds after touch lifts to allow comfortable reading
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 4000);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsList.length) % testimonialsList.length);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsList.length);
  };

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  const getCardStyle = (index: number) => {
    let diff = index - activeIndex;

    // Restore circular array wraps for infinite loop offsets
    if (diff < -1 && diff < -testimonialsList.length / 2) {
      diff += testimonialsList.length;
    } else if (diff > 1 && diff > testimonialsList.length / 2) {
      diff -= testimonialsList.length;
    }

    const isCenter = diff === 0;
    const isLeft = diff === -1;
    const isRight = diff === 1;
    const isVisible = isCenter || isLeft || isRight;

    // Calculate responsive slide distances
    const offsetDistance = windowWidth < 600 ? 170 : windowWidth < 992 ? 240 : 360;

    let leftPosition = '50%';
    if (isLeft) {
      leftPosition = `calc(50% - ${offsetDistance}px)`;
    } else if (isRight) {
      leftPosition = `calc(50% + ${offsetDistance}px)`;
    }

    return {
      position: 'absolute' as const,
      left: leftPosition,
      top: '50%',
      transform: `translate(-50%, -55%) scale(${isCenter ? 1.05 : 0.85})`,
      opacity: isCenter ? 1 : isVisible ? 0.35 : 0,
      zIndex: isCenter ? 5 : isVisible ? 3 : 1,
      visibility: isVisible ? ('visible' as const) : ('hidden' as const),
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      width: '90%',
      maxWidth: '430px',
      height: '250px',
      backgroundColor: 'white',
      padding: '30px',
      borderRadius: 'var(--radius-md)',
      boxShadow: isCenter ? '0 15px 30px rgba(10, 25, 49, 0.12)' : '0 5px 15px rgba(10, 25, 49, 0.04)',
      border: isCenter ? '1px solid rgba(184, 44, 60, 0.15)' : '1px solid var(--color-border)',
      cursor: isVisible && !isCenter ? 'pointer' : 'default',
      overflow: 'hidden',
    };
  };

  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Core Management Services</h2>
        <p className="section-subtitle">
          From marketing vacant blocks to processing tax compliance filings, we handle the full life cycle of your real estate investment.
        </p>

        {/* Services Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginBottom: '60px' }}>
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="service-card"
              style={{
                backgroundColor: 'var(--color-text-light)',
                padding: '40px 30px',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--color-border)',
                transition: 'var(--transition-normal)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '4px',
                  backgroundColor: service.id % 2 === 0 ? 'var(--color-accent)' : 'var(--color-primary)',
                }}
              ></div>

              <div
                style={{
                  color: service.id % 2 === 0 ? 'var(--color-accent)' : 'var(--color-primary)',
                  backgroundColor: service.id % 2 === 0 ? 'rgba(184, 44, 60, 0.05)' : 'rgba(10, 25, 49, 0.05)',
                  padding: '16px',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {service.icon}
              </div>

              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '12px', fontWeight: 600 }}>
                {service.title}
              </h3>
              
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '20px' }}>
                {service.description}
              </p>

              {/* Bullet Features */}
              <ul style={{ listStyleType: 'none', width: '100%', display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '1px solid #f1f5f9', paddingTop: '15px' }}>
                {service.features?.map((feat, idx) => (
                  <li key={idx} style={{ fontSize: '0.82rem', color: 'var(--color-text-dark)', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>&bull;</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Free Complementary Services Panel */}
        <div
          style={{
            backgroundColor: 'var(--color-primary)',
            color: 'white',
            borderRadius: 'var(--radius-md)',
            padding: '40px',
            boxShadow: 'var(--shadow-md)',
            background: 'linear-gradient(135deg, var(--color-primary) 0%, #15325c 100%)',
            marginBottom: '70px',
          }}
        >
          <span
            style={{
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '2px',
              display: 'block',
              marginBottom: '8px',
            }}
          >
            Exclusive Client Perks
          </span>
          <h3 style={{ color: 'white', fontSize: '1.75rem', marginBottom: '16px', fontFamily: 'var(--font-headings)' }}>
            Free Complementary Services
          </h3>
          <p style={{ opacity: 0.8, marginBottom: '24px', maxWidth: '800px', fontSize: '0.95rem', lineHeight: '1.7' }}>
            We go a step further. Bonifrid Homes provides the following high-value property setups completely free of charge when you sign up with our standard 5-10% property management package:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '20px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '6px' }}>One-time Professional Cleaning</strong>
              <span style={{ opacity: 0.7, fontSize: '0.82rem' }}>Uniformed staff will deep-clean the building to be occupancy-ready.</span>
            </div>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '20px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '6px' }}>Fumigation & Pest Control</strong>
              <span style={{ opacity: 0.7, fontSize: '0.82rem' }}>Routine and emergency outbreak pest control protecting tenants.</span>
            </div>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '20px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '6px' }}>Consultancy & Advisory</strong>
              <span style={{ opacity: 0.7, fontSize: '0.82rem' }}>Complementary guidance on local market trends, valuation, and Real Estate Laws.</span>
            </div>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <h3 style={{ fontSize: '2rem', color: 'var(--color-primary)', textAlign: 'center', marginBottom: '10px', fontWeight: 700, fontFamily: 'var(--font-headings)' }}>
            TESTIMONIAL
          </h3>
          <p style={{ color: 'var(--color-text-muted)', textAlign: 'center', maxWidth: '650px', margin: '0 auto 40px', fontSize: '0.95rem', lineHeight: '1.6' }}>
            Hear directly from property owners, landlords, and tenants who experience Bonifrid Homes' high-caliber management services.
          </p>

          {/* Testimonial Track Window (Pauses auto-rotation on mouse hover or mobile touch) */}
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{
              position: 'relative',
              width: '100%',
              height: '340px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {testimonialsList.map((item, index) => (
              <TestimonialCard
                key={item.id}
                item={item}
                style={getCardStyle(index)}
                onClick={() => handleCardClick(index)}
              />
            ))}
          </div>

          {/* Slider Circular Navigation Buttons */}
          <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
            <button
              className="slider-btn"
              onClick={prevSlide}
              aria-label="Previous Testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              className="slider-btn"
              onClick={nextSlide}
              aria-label="Next Testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(10, 25, 49, 0.15);
        }
        .slider-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: white;
          border: 1px solid var(--color-border);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justifyContent: center;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: var(--shadow-sm);
        }
        .slider-btn:hover {
          background-color: var(--color-accent);
          color: white;
          border-color: var(--color-accent);
          transform: scale(1.08);
          box-shadow: var(--shadow-md);
        }
        .slider-btn:active {
          transform: scale(0.95);
        }
      `}</style>
    </section>
  );
};

export default Services;
