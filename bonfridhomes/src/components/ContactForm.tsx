import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('Property Owner');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          message: `[Role: ${role}] ${message}`
        })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitted(true);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        setSubmitError(data.error || 'Failed to submit. Server returned an error.');
      }
    } catch (err) {
      console.error('Error submitting contact inquiry:', err);
      setSubmitError('Unable to connect to the backend server. Please verify that the backend is running on port 5000.');
    }
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="container">
        <h2 className="section-title">If You Have Any Query, Please Contact Us</h2>
        <p className="section-subtitle">
          Ready to experience hassle-free real estate management? Request a free portfolio quotation from Bonifrid Homes today.
        </p>


        {/* Main Grid: Form on Left, Map on Right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
            alignItems: 'stretch',
          }}
        >
          {/* Left Column: Contact Form */}
          <div
            style={{
              backgroundColor: 'white',
              padding: '40px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '24px', fontWeight: 600 }}>
              Inquiry Request
            </h3>

            {submitError && (
              <div
                style={{
                  backgroundColor: 'rgba(184, 44, 60, 0.08)',
                  color: 'var(--color-accent)',
                  padding: '14px 18px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.88rem',
                  marginBottom: '20px',
                  border: '1px solid rgba(184, 44, 60, 0.2)',
                  lineHeight: '1.4'
                }}
              >
                {submitError}
              </div>
            )}
            
            {submitted ? (
              <div
                style={{
                  backgroundColor: 'rgba(34, 197, 94, 0.1)',
                  color: 'rgb(21, 128, 61)',
                  padding: '24px',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'center',
                  fontWeight: 500,
                  animation: 'fadeIn 0.5s ease',
                }}
              >
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ margin: '0 auto 12px' }}>
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="16 12 12 8 8 12" />
                  <line x1="12" y1="16" x2="12" y2="8" />
                </svg>
                <h4>Thank You For Reaching Out!</h4>
                <p style={{ fontSize: '0.9rem', marginTop: '6px' }}>Your request has been received. Our site team will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 0712345678"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">I am a...</label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="form-control"
                    style={{ padding: '12px' }}
                  >
                    <option>Property Owner / Landlord</option>
                    <option>Prospective Tenant</option>
                    <option>Real Estate Partner</option>
                    <option>Other / General Inquiry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Message Details</label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your request or property specifications..."
                    className="form-control"
                    style={{ resize: 'none' }}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-accent" style={{ width: '100%', padding: '14px 0', marginTop: '10px' }}>
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Google Maps Live Location Embed */}
          <div
            style={{
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--color-border)',
              minHeight: '400px',
              height: '100%',
              width: '100%',
            }}
          >
            <iframe
              title="Bonifrid Homes Office Location"
              src="https://maps.google.com/maps?q=New%20Home%20Center,%20Ruiru,%20Kenya&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px', display: 'block' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
