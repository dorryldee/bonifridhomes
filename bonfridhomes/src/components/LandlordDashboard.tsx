import React from 'react';

interface OwnerProperty {
  id: number;
  name: string;
  tenant: string;
  monthlyRent: number;
  occupancyStatus: 'Occupied' | 'Vacant';
  maintenanceIssues: number;
  netRevenueThisYear: number;
}

const LandlordDashboard: React.FC = () => {
  const properties: OwnerProperty[] = [
    { id: 1, name: 'Runda Sapphire Estate', tenant: 'Richard & Mary Vance', monthlyRent: 350000, occupancyStatus: 'Occupied', maintenanceIssues: 0, netRevenueThisYear: 3990000 },
    { id: 2, name: 'Kilimani Heights Apartment', tenant: 'Sarah Jenkins', monthlyRent: 130000, occupancyStatus: 'Occupied', maintenanceIssues: 1, netRevenueThisYear: 1482000 },
    { id: 3, name: 'Ruiru Heritage Townhouse', tenant: 'David & Amanda Miller', monthlyRent: 85000, occupancyStatus: 'Occupied', maintenanceIssues: 0, netRevenueThisYear: 969000 }
  ];

  const totalRevenue = properties.reduce((acc, curr) => acc + curr.monthlyRent, 0);
  const totalNetYearly = properties.reduce((acc, curr) => acc + curr.netRevenueThisYear, 0);

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)', marginTop: '60px', minHeight: '80vh' }}>
      <div className="container">
        {/* Landlord Header Banner */}
        <div
          style={{
            backgroundColor: 'var(--color-secondary)',
            color: 'white',
            padding: '40px 30px',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-md)',
            marginBottom: '30px',
            background: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)',
          }}
        >
          <span style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.8rem' }}>
            Secure Owner Portal
          </span>
          <h2 style={{ color: 'white', fontSize: '2rem', marginTop: '5px' }}>Welcome Back, Bonifrid Investments Ltd.</h2>
          <p style={{ opacity: 0.8, fontSize: '0.95rem', marginTop: '5px' }}>
            Portfolio Health: <strong>Excellent</strong> &bull; Landlord payouts processed by 10th of every month.
          </p>
        </div>

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '30px' }}>
          
          {/* Stat 1 */}
          <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: 500 }}>Monthly Collections</span>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginTop: '8px' }}>KSh {totalRevenue.toLocaleString()}</h3>
            <span style={{ fontSize: '0.75rem', color: 'green', fontWeight: 600 }}>&uarr; 100% Occupied</span>
          </div>

          {/* Stat 2 */}
          <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: 500 }}>Net Yearly Cashflow</span>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginTop: '8px' }}>KSh {totalNetYearly.toLocaleString()}</h3>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-accent)', fontWeight: 600 }}>After 5% commission fee</span>
          </div>

          {/* Stat 3 */}
          <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: 500 }}>Active Assets</span>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginTop: '8px' }}>3 Properties</h3>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>0 Vacant Units</span>
          </div>

          {/* Stat 4 */}
          <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: 500 }}>Active Repairs</span>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-accent)', marginTop: '8px' }}>1 Pending</h3>
            <span style={{ fontSize: '0.75rem', color: 'orange', fontWeight: 600 }}>Handled by caretakers</span>
          </div>

        </div>

        {/* Portfolio Table and Financial Breakdown Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px', alignItems: 'start' }}>
          
          {/* Left Panel: Properties List */}
          <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)', overflowX: 'auto' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '20px' }}>Managed Assets Status</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '500px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--color-border)', color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
                  <th style={{ padding: '12px 8px' }}>Property Name</th>
                  <th style={{ padding: '12px 8px' }}>Active Tenant</th>
                  <th style={{ padding: '12px 8px' }}>Monthly Rent</th>
                  <th style={{ padding: '12px 8px' }}>Maintenance</th>
                  <th style={{ padding: '12px 8px' }}>Net YTD</th>
                </tr>
              </thead>
              <tbody>
                {properties.map((prop) => (
                  <tr key={prop.id} style={{ borderBottom: '1px solid var(--color-border)', fontSize: '0.9rem' }} className="table-row">
                    <td style={{ padding: '16px 8px', fontWeight: 600, color: 'var(--color-primary)' }}>{prop.name}</td>
                    <td style={{ padding: '16px 8px', color: 'var(--color-text-dark)' }}>{prop.tenant}</td>
                    <td style={{ padding: '16px 8px', fontWeight: 600 }}>KSh {prop.monthlyRent.toLocaleString()}</td>
                    <td style={{ padding: '16px 8px' }}>
                      {prop.maintenanceIssues > 0 ? (
                        <span style={{ color: 'orange', fontWeight: 600, fontSize: '0.8rem', backgroundColor: 'rgba(249, 115, 22, 0.1)', padding: '2px 8px', borderRadius: 'var(--radius-full)' }}>
                          {prop.maintenanceIssues} Active
                        </span>
                      ) : (
                        <span style={{ color: 'green', fontSize: '0.8rem', backgroundColor: 'rgba(34, 197, 94, 0.1)', padding: '2px 8px', borderRadius: 'var(--radius-full)' }}>
                          Clear
                        </span>
                      )}
                    </td>
                    <td style={{ padding: '16px 8px', color: 'var(--color-accent)', fontWeight: 600 }}>KSh {prop.netRevenueThisYear.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right Panel: Simulated Revenue Visual Chart */}
          <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '20px' }}>Collections Split</h3>
            
            {/* Visual breakdown using HTML/CSS stacked bars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {properties.map((prop) => {
                const percentage = (prop.monthlyRent / totalRevenue) * 100;
                return (
                  <div key={prop.id}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '6px', fontWeight: 500 }}>
                      <span style={{ color: 'var(--color-text-dark)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '180px' }}>{prop.name}</span>
                      <span style={{ color: 'var(--color-primary)' }}>{Math.round(percentage)}%</span>
                    </div>
                    {/* Progress Bar Container */}
                    <div style={{ height: '8px', backgroundColor: 'var(--color-bg-alt)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                      <div
                        style={{
                          height: '100%',
                          width: `${percentage}%`,
                          backgroundColor: prop.id === 1 ? 'var(--color-primary)' : prop.id === 2 ? 'var(--color-accent)' : 'var(--color-secondary)',
                          borderRadius: 'var(--radius-full)',
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Invoices Download Panel */}
            <div style={{ borderTop: '1px solid var(--color-border)', marginTop: '25px', paddingTop: '20px' }}>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--color-primary)', marginBottom: '12px' }}>Download Statements</h4>
              <button
                className="btn btn-outline"
                style={{ width: '100%', fontSize: '0.85rem', padding: '10px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                onClick={() => alert('Computerized statement logs, vacancy briefs, deposit refunds, and walk-in inspection reports compiled.')}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Monthly Statements (PDF)
              </button>
            </div>
          </div>

        </div>
      </div>
      <style>{`
        .table-row:hover {
          background-color: var(--color-bg-alt);
        }
      `}</style>
    </section>
  );
};

export default LandlordDashboard;
