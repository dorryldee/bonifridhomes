import React from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  icon: React.ReactNode;
}

const Blog: React.FC = () => {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: 'Landlord Survival Guide: 5 Rules for Seamless Rent Banking',
      excerpt:
        'Managing rent remittances can be a headache. Learn how automated monthly direct banking can secure your yields and prevent payment delays.',
      date: 'July 14, 2026',
      category: 'Property Management',
      readTime: '4 min read',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'How Rigorous Vetting Saves You Thousands in Utility Defaults',
      excerpt:
        'Many landlords overlook tenant profile checks, only to face utility arrears and repair costs. Discover our top screening criteria protecting Ruiru blocks.',
      date: 'June 28, 2026',
      category: 'Tenant Screening',
      readTime: '6 min read',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 11l-4 4-2-2" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Why Ruiru Town is Nairobi Outskirts Hottest Rental Market in 2026',
      excerpt:
        'With infrastructural developments and growing demand for premium suburban housing, Ruiru has become a goldmine for real estate investors.',
      date: 'May 19, 2026',
      category: 'Market Trends',
      readTime: '5 min read',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    },
  ];

  return (
    <section id="blog" className="section" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="container">
        <h2 className="section-title">Bonifrid Homes Blog</h2>
        <p className="section-subtitle">
          Professional insights, local landlord guides, and property market updates for Nairobi and Ruiru real estate owners.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>
          {posts.map((post) => (
            <article
              key={post.id}
              className="blog-card"
              style={{
                backgroundColor: 'white',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '35px 30px',
                boxShadow: 'var(--shadow-sm)',
                transition: 'var(--transition-normal)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Category tag */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--color-accent)',
                    backgroundColor: 'rgba(184, 44, 60, 0.06)',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-full)',
                    letterSpacing: '1px',
                  }}
                >
                  {post.category}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{post.readTime}</span>
              </div>

              {/* Icon / Brand Detail */}
              <div
                style={{
                  color: 'var(--color-primary)',
                  backgroundColor: 'rgba(10, 25, 49, 0.04)',
                  width: '46px',
                  height: '46px',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                {post.icon}
              </div>

              {/* Title */}
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '14px', lineHeight: '1.4', fontWeight: 700 }}>
                {post.title}
              </h3>

              {/* Excerpt */}
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '25px', flexGrow: 1 }}>
                {post.excerpt}
              </p>

              {/* Footer */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid #f1f5f9',
                  paddingTop: '20px',
                }}
              >
                <span style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>{post.date}</span>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  style={{
                    color: 'var(--color-primary)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    transition: 'color 0.2s',
                  }}
                  className="read-more-link"
                >
                  Read Article
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .blog-card:hover {
          transform: translateY(-6px);
          border-color: var(--color-accent);
          box-shadow: var(--shadow-md);
        }
        .read-more-link:hover {
          color: var(--color-accent) !important;
        }
      `}</style>
    </section>
  );
};

export default Blog;
