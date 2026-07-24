import React, { useState, useEffect, useRef } from 'react';

interface HeroProps {
  setView: (view: string) => void;
}

interface SlideItem {
  tag: string;
  headline: React.ReactNode;
  subtitle: string;
  image: string;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayTimerRef = useRef<any>(null);

  const slides: SlideItem[] = [
    {
      tag: 'Big enough to manage, Small enough to adapt',
      headline: (
        <>
          Elevating the Standards of{' '}
          <span style={{ color: 'var(--color-accent)', fontStyle: 'italic', fontFamily: 'var(--font-headings)' }}>
            Property Management
          </span>
        </>
      ),
      subtitle:
        'At Bonifrid Homes, we offer our expertise and personalized techniques of managing your property. Our concept guarantees the maximum return from your investment, while maintaining your property at the highest standards.',
      image: '/hero_house.jpg',
    },
    {
      tag: 'Rigorous Vetting & Direct Rent Banking',
      headline: (
        <>
          Maximize Yields with{' '}
          <span style={{ color: 'var(--color-accent)', fontStyle: 'italic', fontFamily: 'var(--font-headings)' }}>
            Strict Tenant Screening
          </span>
        </>
      ),
      subtitle:
        "We handle legally binding lease agreements, strict background screening, and direct banking to landlords' accounts by the 10th of every month with full financial accountability.",
      image: '/modern_villa.jpg',
    },
    {
      tag: 'In-House Maintenance & 24/7 Support',
      headline: (
        <>
          Maintaining Your Assets at{' '}
          <span style={{ color: 'var(--color-accent)', fontStyle: 'italic', fontFamily: 'var(--font-headings)' }}>
            Peak Standards
          </span>
        </>
      ),
      subtitle:
        'Our in-house technical caretaker teams supervise utility controls, emergency plumbers, and routine audits. We also provide complimentary professional building cleaning and pest control.',
      image: '/luxury_apartment.jpg',
    },
  ];

  // Auto-play interval timer (resets on index changes to prevent click skips, and pauses on hover/touch)
  useEffect(() => {
    if (isPaused) return;

    autoplayTimerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(autoplayTimerRef.current);
  }, [currentSlide, isPaused]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleTouchStart = () => {
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    // 4-second delay before resuming auto-play on touch lift
    setTimeout(() => setIsPaused(false), 4000);
  };

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        position: 'relative',
        height: '90vh',
        minHeight: '600px',
        color: 'var(--color-text-light)',
        marginTop: '70px',
        overflow: 'hidden',
      }}
    >
      {/* Background Slides (Cross-Fade Transition with centered overlay) */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `linear-gradient(rgba(10, 25, 49, 0.78), rgba(10, 25, 49, 0.78)), url('${import.meta.env.BASE_URL}${slide.image.substring(1)}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: idx === currentSlide ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: idx === currentSlide ? 1 : 0,
          }}
        />
      ))}

      {/* Visual floating decoration */}
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          width: '100%',
          height: '150px',
          background: 'linear-gradient(to top, var(--color-bg-light), transparent)',
          zIndex: 2,
        }}
      ></div>

      {/* Left Navigation Arrow (Bare, thin, large) */}
      <button
        onClick={prevSlide}
        className="hero-nav-btn btn-prev"
        style={{
          position: 'absolute',
          left: '30px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '60px',
          height: '60px',
          backgroundColor: 'transparent',
          border: 'none',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10,
          transition: 'transform 0.2s ease',
        }}
        aria-label="Previous Slide"
      >
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Right Navigation Arrow (Bare, thin, large) */}
      <button
        onClick={nextSlide}
        className="hero-nav-btn btn-next"
        style={{
          position: 'absolute',
          right: '30px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '60px',
          height: '60px',
          backgroundColor: 'transparent',
          border: 'none',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10,
          transition: 'transform 0.2s ease',
        }}
        aria-label="Next Slide"
      >
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Slide Content Container */}
      <div className="container" style={{ position: 'relative', zIndex: 3, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '100%', padding: '0 40px', textAlign: 'center' }}>
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="fade-in"
              style={{
                maxWidth: '780px',
                margin: '0 auto',
                display: idx === currentSlide ? 'block' : 'none',
                animation: idx === currentSlide ? 'fadeInUp 0.6s ease forwards' : 'none',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <span
                  style={{
                    textTransform: 'uppercase',
                    letterSpacing: '3px',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    color: 'var(--color-accent)',
                    backgroundColor: 'rgba(184, 44, 60, 0.1)',
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid rgba(184, 44, 60, 0.2)',
                  }}
                >
                  {slide.tag}
                </span>
              </div>
              <h1
                style={{
                  fontSize: 'clamp(2.3rem, 5vw, 3.8rem)',
                  color: 'var(--color-text-light)',
                  lineHeight: '1.15',
                  marginBottom: '24px',
                  fontWeight: 700,
                }}
              >
                {slide.headline}
              </h1>
              <p
                style={{
                  fontSize: '1.2rem',
                  color: 'rgba(255, 255, 255, 0.85)',
                  marginBottom: '40px',
                  fontWeight: 300,
                  lineHeight: '1.7',
                  maxWidth: '680px',
                  margin: '0 auto 40px',
                }}
              >
                {slide.subtitle}
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <button
                  onClick={() => {
                    setView('about');
                    window.scrollTo(0, 0);
                  }}
                  className="btn btn-accent"
                  style={{ padding: '16px 36px', fontSize: '1rem', boxShadow: '0 4px 14px rgba(184, 44, 60, 0.4)' }}
                >
                  Explore More
                </button>
                <button
                  onClick={() => {
                    setView('contact');
                    window.scrollTo(0, 0);
                  }}
                  className="btn btn-outline"
                  style={{
                    padding: '16px 36px',
                    fontSize: '1rem',
                    border: '2px solid rgba(255, 255, 255, 0.8)',
                    color: 'white',
                  }}
                >
                  Get In Touch
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global CSS animations integration */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .hero-nav-btn:hover {
          transform: translateY(-50%) !important;
          color: #ffffff !important;
        }
        .hero-nav-btn:active {
          transform: translateY(-50%) scale(0.92) !important;
        }
        @media (max-width: 768px) {
          .hero-nav-btn {
            width: 40px !important;
            height: 40px !important;
          }
          .hero-nav-btn svg {
            width: 28px !important;
            height: 28px !important;
          }
          .btn-prev {
            left: 10px !important;
          }
          .btn-next {
            right: 10px !important;
          }
          .container {
            padding: 0 15px !important;
          }
          div[style*="padding: 0 40px"] {
            padding: 0 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
