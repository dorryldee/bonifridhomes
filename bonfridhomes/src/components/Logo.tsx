import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  lightText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 80, lightText = false }) => {
  return (
    <div className={`logo-container ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
      {/* Uploaded official circular logo image */}
      <img
        src={`${import.meta.env.BASE_URL}logobf.jpeg`}
        alt="Bonifrid Homes Official Logo"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '50%',
          objectFit: 'cover',
          border: '1.5px solid rgba(255, 255, 255, 0.2)',
          boxShadow: 'var(--shadow-sm)',
          backgroundColor: 'var(--color-primary)',
          padding: '3px',
        }}
      />
      {/* Dynamic text watermark side-label */}
      <span
        style={{
          fontFamily: 'var(--font-headings)',
          fontWeight: 700,
          fontSize: size * 0.55 + 'px',
          letterSpacing: '2px',
          color: lightText ? '#ffffff' : 'var(--color-primary)',
          display: 'flex',
          flexDirection: 'column',
          lineHeight: '1',
          transition: 'var(--transition-fast)',
        }}
      >
        BONIFRID
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 400,
            fontSize: size * 0.22 + 'px',
            letterSpacing: '4px',
            color: 'var(--color-accent)',
            textTransform: 'uppercase',
            marginTop: '2px',
          }}
        >
          Homes
        </span>
      </span>
    </div>
  );
};

export default Logo;
