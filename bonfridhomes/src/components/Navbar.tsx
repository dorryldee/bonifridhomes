import React, { useState, useEffect } from 'react';
import Logo from './Logo';

interface NavbarProps {
  currentView: string;
  setView: (view: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close Pages dropdown menu on clicking outside of it
  useEffect(() => {
    const handleOutsideClick = () => {
      setPagesDropdownOpen(false);
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, viewName: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setPagesDropdownOpen(false);
    setMobilePagesOpen(false);
    setView(viewName);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  const getLinkStyle = (viewName: string) => {
    const isActive = currentView === viewName;
    return {
      fontWeight: 600,
      color: isActive ? 'var(--color-accent)' : 'rgba(255, 255, 255, 0.85)',
      borderBottom: 'none',
      paddingBottom: '4px',
      fontSize: '0.95rem',
      letterSpacing: '0.5px',
      transition: 'all 0.2s ease',
    };
  };

  const isSecondaryActive =
    currentView === 'letting-plan' || currentView === 'portfolio' || currentView === 'blog' || currentView === 'admin';

  return (
    <nav
      className={`glass ${isScrolled ? 'nav-scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'var(--transition-normal)',
        padding: isScrolled ? '12px 0' : '20px 0',
        boxShadow: 'var(--shadow-md)',
        backgroundColor: isScrolled ? 'rgba(4, 33, 140, 0.95)' : 'var(--color-primary)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" onClick={(e) => handleNavClick(e, 'home')}>
          <Logo size={50} lightText={true} />
        </a>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
          <a
            href="#"
            onClick={(e) => handleNavClick(e, 'home')}
            style={getLinkStyle('home')}
            className="nav-link"
          >
            Home
          </a>
          <a
            href="#"
            onClick={(e) => handleNavClick(e, 'about')}
            style={getLinkStyle('about')}
            className="nav-link"
          >
            About
          </a>
          <a
            href="#"
            onClick={(e) => handleNavClick(e, 'services')}
            style={getLinkStyle('services')}
            className="nav-link"
          >
            Services
          </a>

          {/* Secondary Pages Dropdown Menu Container */}
          <div
            style={{ position: 'relative', display: 'inline-block' }}
          >
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setPagesDropdownOpen(!pagesDropdownOpen);
              }}
              style={{
                fontWeight: 600,
                color: isSecondaryActive ? 'var(--color-accent)' : 'rgba(255, 255, 255, 0.85)',
                borderBottom: 'none',
                paddingBottom: '4px',
                fontSize: '0.95rem',
                letterSpacing: '0.5px',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              PAGES
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                style={{
                  transform: pagesDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease',
                }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </a>

            {/* Dropdown Menu Block */}
            {pagesDropdownOpen && (
              <div
                onClick={(e) => e.stopPropagation()}
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: 'var(--color-primary)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: 'var(--radius-sm)',
                  boxShadow: 'var(--shadow-lg)',
                  padding: '10px 0',
                  minWidth: '170px',
                  zIndex: 100,
                  marginTop: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <a
                  href="#"
                  onClick={(e) => handleNavClick(e, 'blog')}
                  style={{
                    padding: '10px 20px',
                    color: currentView === 'blog' ? 'var(--color-accent)' : '#ffffff',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                  className="dropdown-item"
                >
                  Blog
                </a>
                <a
                  href="#"
                  onClick={(e) => handleNavClick(e, 'portfolio')}
                  style={{
                    padding: '10px 20px',
                    color: currentView === 'portfolio' ? 'var(--color-accent)' : '#ffffff',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                  className="dropdown-item"
                >
                  Portfolio
                </a>
                <a
                  href="#"
                  onClick={(e) => handleNavClick(e, 'letting-plan')}
                  style={{
                    padding: '10px 20px',
                    color: currentView === 'letting-plan' ? 'var(--color-accent)' : '#ffffff',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                  className="dropdown-item"
                >
                  Letting Plan
                </a>
              </div>
            )}
          </div>

          {/* Social Links Container */}
          <div style={{ display: 'flex', gap: '14px', alignItems: 'center', marginLeft: '10px' }}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-nav-link social-nav-ig" aria-label="Instagram" style={{ color: 'rgba(255, 255, 255, 0.8)', display: 'flex' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-nav-link social-nav-fb" aria-label="Facebook" style={{ color: 'rgba(255, 255, 255, 0.8)', display: 'flex' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-nav-link social-nav-tw" aria-label="X (formerly Twitter)" style={{ color: 'rgba(255, 255, 255, 0.8)', display: 'flex' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-nav-link social-nav-yt" aria-label="YouTube" style={{ color: 'rgba(255, 255, 255, 0.8)', display: 'flex' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
            </a>
          </div>

          <a
            href="#"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="btn btn-accent"
            style={{ padding: '8px 20px', fontSize: '0.9rem', marginLeft: '10px' }}
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '6px',
            width: '30px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <span style={{ width: '100%', height: '2px', backgroundColor: '#ffffff', transition: 'var(--transition-fast)', transform: mobileMenuOpen ? 'rotate(45deg) translate(6px, 5px)' : 'none' }}></span>
          <span style={{ width: '100%', height: '2px', backgroundColor: '#ffffff', opacity: mobileMenuOpen ? 0 : 1, transition: 'var(--transition-fast)' }}></span>
          <span style={{ width: '100%', height: '2px', backgroundColor: '#ffffff', transition: 'var(--transition-fast)', transform: mobileMenuOpen ? 'rotate(-45deg) translate(6px, -5px)' : 'none' }}></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'var(--color-primary)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            boxShadow: 'var(--shadow-lg)',
            animation: 'fadeIn 0.3s ease',
          }}
        >
          <a href="#" onClick={(e) => handleNavClick(e, 'home')} style={{ padding: '8px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', color: currentView === 'home' ? 'var(--color-accent)' : '#ffffff', fontWeight: 600 }}>Home</a>
          <a href="#" onClick={(e) => handleNavClick(e, 'about')} style={{ padding: '8px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', color: currentView === 'about' ? 'var(--color-accent)' : '#ffffff', fontWeight: 600 }}>About</a>
          <a href="#" onClick={(e) => handleNavClick(e, 'services')} style={{ padding: '8px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', color: currentView === 'services' ? 'var(--color-accent)' : '#ffffff', fontWeight: 600 }}>Services</a>

          {/* Expandable Mobile Pages Drawer */}
          <div>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); setMobilePagesOpen(!mobilePagesOpen); }}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                color: isSecondaryActive ? 'var(--color-accent)' : '#ffffff',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              <span>Pages</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transform: mobilePagesOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </a>
            
            {mobilePagesOpen && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: '15px', paddingTop: '10px' }}>
                <a href="#" onClick={(e) => handleNavClick(e, 'blog')} style={{ padding: '6px 0', color: currentView === 'blog' ? 'var(--color-accent)' : 'rgba(255, 255, 255, 0.75)', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none' }}>Blog</a>
                <a href="#" onClick={(e) => handleNavClick(e, 'portfolio')} style={{ padding: '6px 0', color: currentView === 'portfolio' ? 'var(--color-accent)' : 'rgba(255, 255, 255, 0.75)', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none' }}>Portfolio</a>
                <a href="#" onClick={(e) => handleNavClick(e, 'letting-plan')} style={{ padding: '6px 0', color: currentView === 'letting-plan' ? 'var(--color-accent)' : 'rgba(255, 255, 255, 0.75)', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none' }}>Letting Plan</a>
              </div>
            )}
          </div>

          <a href="#" onClick={(e) => handleNavClick(e, 'contact')} className="btn btn-accent" style={{ marginTop: '10px' }}>Get In Touch</a>

          {/* Mobile Social Links Row */}
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '10px', paddingTop: '15px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-nav-link social-nav-ig" aria-label="Instagram" style={{ color: '#ffffff', display: 'flex' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-nav-link social-nav-fb" aria-label="Facebook" style={{ color: '#ffffff', display: 'flex' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-nav-link social-nav-tw" aria-label="X (formerly Twitter)" style={{ color: '#ffffff', display: 'flex' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-nav-link social-nav-yt" aria-label="YouTube" style={{ color: '#ffffff', display: 'flex' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
            </a>
          </div>
        </div>
      )}

      {/* CSS injection for responsive display and hovers */}
      <style>{`
        @media (max-width: 992px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
        .nav-link {
          transition: var(--transition-fast);
        }
        .nav-link:hover {
          color: var(--color-accent) !important;
        }
        .social-nav-link {
          transition: all 0.2s ease-in-out;
        }
        .social-nav-link:hover {
          transform: translateY(-2px);
        }
        .social-nav-ig:hover {
          color: #e1306c !important;
        }
        .social-nav-fb:hover {
          color: #1877f2 !important;
        }
        .social-nav-tw:hover {
          color: #ffffff !important;
        }
        .social-nav-yt:hover {
          color: #ff0000 !important;
        }
        .dropdown-item {
          transition: all 0.2s ease;
        }
        .dropdown-item:hover {
          background-color: rgba(255, 255, 255, 0.08) !important;
          color: var(--color-accent) !important;
          padding-left: 24px !important;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
