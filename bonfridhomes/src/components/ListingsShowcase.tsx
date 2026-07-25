import React, { useState } from 'react';

interface Property {
  id: number;
  title: string;
  type: 'Villa' | 'Apartment' | 'Townhouse';
  price: number;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  tag: string;
  description: string;
}

const propertiesData: Property[] = [
  {
    id: 1,
    title: 'Runda Sapphire Estate',
    type: 'Villa',
    price: 50000,
    location: 'Runda, Nairobi',
    beds: 5,
    baths: 5.5,
    sqft: 4500,
    image: '/modern_villa.jpg',
    tag: 'Premium Luxury',
    description: 'An architectural masterpiece in Runda Estate, featuring expansive glass facades, detailed cedar trim finishes, mature landscaped gardens, and a pool. Equipped with full electric fencing, alarm integrations, and KRA-approved tax documentation structures.',
  },
  {
    id: 2,
    title: 'Kilimani Heights Apartment',
    type: 'Apartment',
    price: 40000,
    location: 'Kilimani, Nairobi',
    beds: 3,
    baths: 3,
    sqft: 1850,
    image: '/luxury_apartment.jpg',
    tag: 'Executive Suite',
    description: 'Located in the popular Kilimani area, this executive flat features high-speed lifts, solar water heating systems, backup generator connection, and double balconies. Professionally deep-cleaned and fumigated prior to move-in.',
  },
  {
    id: 3,
    title: 'Ruiru Heritage Townhouse',
    type: 'Townhouse',
    price: 35000,
    location: 'Ruiru Town, Nairobi Outcasts',
    beds: 3,
    baths: 3.5,
    sqft: 2100,
    image: '/suburban_townhouse.jpg',
    tag: 'Strategic Hub',
    description: 'Perfect family home situated near Ruiru Town, New Home Center. Combines stone cladding accents with a modern open-plan kitchen, secure driveway, county water storage tank systems, and a private rear garden.',
  }
];

const ListingsShowcase: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('All');
  const [maxPrice, setMaxPrice] = useState<number>(300000);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [inquirySuccess, setInquirySuccess] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>('');

  // Inquiry form states
  const [inqName, setInqName] = useState('');
  const [inqEmail, setInqEmail] = useState('');
  const [inqPhone, setInqPhone] = useState('');

  const filteredProperties = propertiesData.filter((prop) => {
    const matchesType = filterType === 'All' || prop.type === filterType;
    const matchesPrice = prop.price <= maxPrice;
    return matchesType && matchesPrice;
  });

  const handleInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: inqName,
          email: inqEmail,
          phone: inqPhone,
          message: `Inquiry regarding property listing: ${selectedProperty?.title} (${selectedProperty?.location})`
        })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setInquirySuccess(true);
        setInqName('');
        setInqEmail('');
        setInqPhone('');
        setTimeout(() => {
          setInquirySuccess(false);
          setSelectedProperty(null);
        }, 4000);
      } else {
        setSubmitError(data.error || 'Failed to submit. Server returned an error.');
      }
    } catch (err) {
      console.error('Error submitting client inquiry:', err);
      setSubmitError('Unable to connect to backend server. Please verify the backend is running.');
    }
  };

  return (
    <section id="portfolio" className="section" style={{ backgroundColor: 'var(--color-bg-light)', marginTop: '60px' }}>
      <div className="container">
        <h2 className="section-title">Exclusive Rentals Portfolio</h2>
        <p className="section-subtitle">
          Browse our high-occupancy listings. Every unit is fully managed under our vetted tenancy regulations and maintenance guarantees.
        </p>

        {/* Filters and Controls */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
            marginBottom: '40px',
            padding: '20px',
            backgroundColor: 'var(--color-bg-alt)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-border)',
          }}
        >
          {/* Tabs */}
          <div style={{ display: 'flex', gap: '10px' }}>
            {['All', 'Villa', 'Apartment', 'Townhouse'].map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                style={{
                  padding: '10px 20px',
                  borderRadius: 'var(--radius-sm)',
                  border: 'none',
                  backgroundColor: filterType === type ? 'var(--color-primary)' : 'white',
                  color: filterType === type ? 'white' : 'var(--color-primary)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.2s',
                }}
              >
                {type}s
              </button>
            ))}
          </div>

          {/* Price Range Filter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-dark)' }}>
              Max Price: <strong>KSh {maxPrice.toLocaleString()}</strong>
            </span>
            <input
              type="range"
              min="20000"
              max="150000"
              step="5000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              style={{ accentColor: 'var(--color-accent)', cursor: 'pointer' }}
            />
          </div>
        </div>

        {/* Grid of Listings */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <div
                key={property.id}
                style={{
                  backgroundColor: 'var(--color-text-light)',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-md)',
                  overflow: 'hidden',
                  border: '1px solid var(--color-border)',
                  transition: 'var(--transition-normal)',
                }}
                className="property-card"
              >
                {/* Image & Tag */}
                <div style={{ position: 'relative', overflow: 'hidden', height: '220px' }}>
                  <img
                    src={property.image.startsWith('/') ? `${import.meta.env.BASE_URL}${property.image.substring(1)}` : property.image}
                    alt={property.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition-slow)' }}
                    className="prop-img"
                  />
                  <span
                    style={{
                      position: 'absolute',
                      top: '15px',
                      left: '15px',
                      backgroundColor: 'var(--color-primary)',
                      color: 'var(--color-text-light)',
                      padding: '5px 12px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                    }}
                  >
                    {property.tag}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-accent)', textTransform: 'uppercase' }}>
                      {property.type}
                    </span>
                    <span style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                      KSh {property.price.toLocaleString()}
                      <span style={{ fontSize: '0.75rem', fontWeight: 400, color: 'var(--color-text-muted)' }}>/mo</span>
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary)', marginBottom: '8px', fontWeight: 600 }}>
                    {property.title}
                  </h3>

                  <p style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '18px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {property.location}
                  </p>

                  {/* Specs */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      borderTop: '1px solid var(--color-border)',
                      paddingTop: '15px',
                      marginBottom: '20px',
                      fontSize: '0.85rem',
                      color: 'var(--color-text-dark)',
                    }}
                  >
                    <span><strong>{property.beds}</strong> Beds</span>
                    <span><strong>{property.baths}</strong> Baths</span>
                    <span><strong>{property.sqft}</strong> Sqft</span>
                  </div>

                  <button
                    onClick={() => setSelectedProperty(property)}
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '12px 0', fontSize: '0.9rem' }}
                  >
                    View Details & Inquire
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px 0', color: 'var(--color-text-muted)' }}>
              No properties match your filter preferences.
            </div>
          )}
        </div>

        {/* Modal Detail Screen */}
        {selectedProperty && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(10, 25, 49, 0.75)',
              backdropFilter: 'blur(5px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2000,
              padding: '20px',
            }}
          >
            <div
              style={{
                backgroundColor: 'white',
                maxWidth: '750px',
                width: '100%',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                animation: 'fadeIn 0.3s ease',
                maxHeight: '90vh',
                overflowY: 'auto',
              }}
            >
              {/* Modal Image */}
              <div style={{ position: 'relative', height: '300px' }}>
                <img
                  src={selectedProperty.image.startsWith('/') ? `${import.meta.env.BASE_URL}${selectedProperty.image.substring(1)}` : selectedProperty.image}
                  alt={selectedProperty.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <button
                  onClick={() => setSelectedProperty(null)}
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    backgroundColor: 'white',
                    color: 'var(--color-primary)',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    boxShadow: 'var(--shadow-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    border: 'none',
                  }}
                >
                  &times;
                </button>
              </div>

              {/* Modal Body */}
              <div style={{ padding: '30px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {selectedProperty.type} &bull; {selectedProperty.tag}
                </span>
                <h2 style={{ fontSize: '1.75rem', color: 'var(--color-primary)', margin: '5px 0 15px' }}>
                  {selectedProperty.title}
                </h2>

                <p style={{ color: 'var(--color-text-dark)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '20px' }}>
                  {selectedProperty.description}
                </p>

                {/* Inquiry Form */}
                <div style={{ backgroundColor: 'var(--color-bg-alt)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                  <h4 style={{ color: 'var(--color-primary)', marginBottom: '15px' }}>Inquire About This Space</h4>
                  {submitError && (
                    <div style={{ backgroundColor: 'rgba(184, 44, 60, 0.08)', color: 'var(--color-accent)', padding: '10px 14px', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', marginBottom: '15px', border: '1px solid rgba(184, 44, 60, 0.2)', gridColumn: '1 / -1' }}>
                      {submitError}
                    </div>
                  )}
                  {inquirySuccess ? (
                    <div style={{ color: 'green', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Thank you! A Bonifrid Homes site representative will contact you within 2 hours.
                    </div>
                  ) : (
                    <form onSubmit={handleInquiry} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                      <input
                        type="text"
                        placeholder="Full Name"
                        required
                        value={inqName}
                        onChange={(e) => setInqName(e.target.value)}
                        className="form-control"
                        style={{ gridColumn: '1 / -1', padding: '10px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        required
                        value={inqEmail}
                        onChange={(e) => setInqEmail(e.target.value)}
                        className="form-control"
                        style={{ padding: '10px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        required
                        value={inqPhone}
                        onChange={(e) => setInqPhone(e.target.value)}
                        className="form-control"
                        style={{ padding: '10px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}
                      />
                      <button type="submit" className="btn btn-accent" style={{ gridColumn: '1 / -1', padding: '12px 0' }}>
                        Submit Inquiry
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .property-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }
        .property-card:hover .prop-img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default ListingsShowcase;
