import React, { useState } from 'react';

interface Request {
  id: number;
  issue: string;
  category: string;
  status: 'Completed' | 'In Progress' | 'Scheduled';
  date: string;
  priority: string;
}

const TenantDashboard: React.FC = () => {
  const [requests, setRequests] = useState<Request[]>([
    { id: 1, issue: 'Kitchen sink faucet dripping slightly', category: 'Plumbing', status: 'Completed', date: '2026-06-18', priority: 'Low' },
    { id: 2, issue: 'Common area water pipe pressure check', category: 'Utility Maintenance', status: 'Scheduled', date: '2026-07-15', priority: 'Medium' }
  ]);

  const [issue, setIssue] = useState('');
  const [category, setCategory] = useState('Plumbing');
  const [priority, setPriority] = useState('Medium');
  const [isSuccess, setIsSuccess] = useState(false);
  const [paySuccess, setPaySuccess] = useState(false);

  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault();
    const newRequest: Request = {
      id: Date.now(),
      issue,
      category,
      status: 'In Progress',
      date: new Date().toISOString().split('T')[0],
      priority
    };
    setRequests([newRequest, ...requests]);
    setIssue('');
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
  };

  const handlePayRent = () => {
    setPaySuccess(true);
    setTimeout(() => setPaySuccess(false), 3000);
  };

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)', marginTop: '60px', minHeight: '80vh' }}>
      <div className="container">
        {/* Header Banner */}
        <div
          style={{
            backgroundColor: 'var(--color-primary)',
            color: 'white',
            padding: '40px 30px',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-md)',
            marginBottom: '30px',
            background: 'linear-gradient(135deg, var(--color-primary) 0%, #1c3d70 100%)',
          }}
        >
          <span style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.8rem' }}>
            Secure Tenant Portal
          </span>
          <h2 style={{ color: 'white', fontSize: '2rem', marginTop: '5px' }}>Welcome Back, Sarah</h2>
          <p style={{ opacity: 0.8, fontSize: '0.95rem', marginTop: '5px' }}>
            Tenant of <strong>Kilimani Heights Apartment (Apt 4C)</strong> &bull; Leased since Jan 2025
          </p>
        </div>

        {/* Dashboard Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          
          {/* Left Side: Rent & Lease Stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {/* Rent Card */}
            <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '20px' }}>Rent & Payments</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', display: 'block' }}>Monthly Rent</span>
                  <strong style={{ fontSize: '1.8rem', color: 'var(--color-primary)' }}>KSh 130,000</strong>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', display: 'block' }}>Status</span>
                  <span
                    style={{
                      display: 'inline-block',
                      backgroundColor: 'rgba(34, 197, 94, 0.1)',
                      color: 'rgb(21, 128, 61)',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-full)',
                      fontWeight: 600,
                      fontSize: '0.8rem',
                    }}
                  >
                    Paid (July)
                  </span>
                </div>
              </div>
              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '20px', marginBottom: '20px', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ color: 'var(--color-text-muted)' }}>Payment Due:</span>
                  <span style={{ fontWeight: 600 }}>By 5th of every Month</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--color-text-muted)' }}>Payment Channel:</span>
                  <span style={{ fontWeight: 600 }}>Direct Bank Slip Submission</span>
                </div>
              </div>
              {paySuccess ? (
                <div style={{ color: 'green', fontSize: '0.9rem', fontWeight: 500, textAlign: 'center', padding: '10px 0' }}>
                  Transaction logged. Please present your original bank slip for verification.
                </div>
              ) : (
                <button onClick={handlePayRent} className="btn btn-primary" style={{ width: '100%' }}>
                  Submit Rent Bank Slip
                </button>
              )}
            </div>

            {/* Tenancy Code of Conduct */}
            <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '15px' }}>Tenant Code of Conduct</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '12px' }}>
                To ensure a cohesive and conducive environment, all Bonifrid Homes tenants adhere to strict tenancy regulations:
              </p>
              <ul style={{ paddingLeft: '20px', fontSize: '0.85rem', color: 'var(--color-text-dark)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Noisy disruptions and public nuisance are prohibited (subject to formal warnings/evictions).</li>
                <li>No unauthorized structural or interior alterations are permitted within premises.</li>
                <li>Lease terminations require a minimum 1-month written calendar notice to avoid deposit forfeiture.</li>
              </ul>
            </div>
          </div>

          {/* Right Side: Maintenance Requests */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {/* Submit Maintenance Request */}
            <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '20px' }}>Submit Maintenance Request</h3>
              <form onSubmit={handleSubmitRequest}>
                <div className="form-group">
                  <label className="form-label">Describe the Issue</label>
                  <textarea
                    rows={3}
                    placeholder="Provide details about the repairs needed..."
                    value={issue}
                    onChange={(e) => setIssue(e.target.value)}
                    required
                    className="form-control"
                    style={{ resize: 'none' }}
                  ></textarea>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                  <div>
                    <label className="form-label">Category</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} className="form-control" style={{ padding: '10px' }}>
                      <option>Plumbing</option>
                      <option>Electrical/Appliance</option>
                      <option>Utility Maintenance</option>
                      <li>Garbage / Drainage</li>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Priority</label>
                    <select value={priority} onChange={(e) => setPriority(e.target.value)} className="form-control" style={{ padding: '10px' }}>
                      <option>Low (Routine)</option>
                      <option>Medium (Urgent)</option>
                      <option>High (Emergency)</option>
                    </select>
                  </div>
                </div>
                {isSuccess && (
                  <div style={{ color: 'green', fontSize: '0.9rem', marginBottom: '10px', fontWeight: 500 }}>
                    Maintenance request logged. Unified caretakers will attend to it.
                  </div>
                )}
                <button type="submit" className="btn btn-accent" style={{ width: '100%' }}>
                  Log Repair Ticket
                </button>
              </form>
            </div>

            {/* Repair Log */}
            <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '15px' }}>Maintenance Log</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {requests.map((req) => (
                  <div
                    key={req.id}
                    style={{
                      padding: '15px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border)',
                      backgroundColor: 'var(--color-bg-light)',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-accent)', textTransform: 'uppercase' }}>
                        {req.category}
                      </span>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          padding: '3px 8px',
                          borderRadius: 'var(--radius-full)',
                          backgroundColor:
                            req.status === 'Completed'
                              ? 'rgba(34, 197, 94, 0.1)'
                              : req.status === 'Scheduled'
                              ? 'rgba(59, 130, 246, 0.1)'
                              : 'rgba(234, 179, 8, 0.1)',
                          color:
                            req.status === 'Completed'
                              ? 'rgb(21, 128, 61)'
                              : req.status === 'Scheduled'
                              ? 'rgb(29, 78, 216)'
                              : 'rgb(161, 98, 7)',
                        }}
                      >
                        {req.status}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-dark)', marginBottom: '6px', fontWeight: 500 }}>{req.issue}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                      <span>Reported: {req.date}</span>
                      <span>Priority: <strong>{req.priority}</strong></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TenantDashboard;
