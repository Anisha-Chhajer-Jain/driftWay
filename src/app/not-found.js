import Link from 'next/link';
import Sidebar from '../components/Sidebar';

// This page shows when a URL doesn't match any page
export default function NotFound() {
  return (
    <div className="docs-shell">
      <Sidebar currentSlug="" />

      <main className="docs-main-content">
        <div className="breadcrumbs">Documentation / 404 Not Found</div>

        <div className="status-badge">404 - PAGE NOT FOUND</div>

        <h1 className="page-title">Page not found</h1>
        <p className="page-subtitle">
          The page you requested could not be found. The URL may have changed or the slug might be invalid.
        </p>

        <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 16 }}>
          <Link href="/docs" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 600, fontSize: 14 }}>
            Back to Documentation
          </Link>
          <span style={{ color: '#9ca3af' }}>|</span>
          <Link href="/" style={{ color: '#4b5563', textDecoration: 'none', fontWeight: 600, fontSize: 14 }}>
            Home Page
          </Link>
        </div>

        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 6, padding: '10px 14px', fontSize: 13, color: '#475569', marginBottom: 20 }}>
          Tip: Check the URL for typos, or browse the suggested pages below to find what you are looking for.
        </div>

        {/* Quick search box */}
        <div className="lookup-card">
          <div className="lookup-header">
            <span>QUICK SEARCH</span>
            <span>Search by path</span>
          </div>
          <div className="lookup-input-row">
            <input
              type="text"
              defaultValue="/docs/routing"
              className="lookup-input"
            />
            <button className="lookup-btn">Search</button>
          </div>
        </div>

        {/* Suggested pages */}
        <div style={{ margin: '24px 0 14px' }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>Suggested pages</h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Link href="/docs/installation" className="doc-card" style={{ padding: '14px 18px' }}>
              <div style={{ fontWeight: 700, fontSize: 14 }}>Quickstart and Installation</div>
              <div style={{ fontSize: 12.5, color: '#6b7280', marginTop: 2 }}>
                Step-by-step guide to initialize your project.
              </div>
            </Link>

            <Link href="/docs/routing" className="doc-card" style={{ padding: '14px 18px' }}>
              <div style={{ fontWeight: 700, fontSize: 14 }}>Routing</div>
              <div style={{ fontSize: 12.5, color: '#6b7280', marginTop: 2 }}>
                Learn about file-based routing, dynamic segments, and 404 fallbacks.
              </div>
            </Link>

            <Link href="/docs/configuration" className="doc-card" style={{ padding: '14px 18px' }}>
              <div style={{ fontWeight: 700, fontSize: 14 }}>Configuration Reference</div>
              <div style={{ fontSize: 12.5, color: '#6b7280', marginTop: 2 }}>
                Configuration parameters and environment variables.
              </div>
            </Link>
          </div>
        </div>

        {/* Diagnostic code block */}
        <div className="code-block" style={{ marginTop: 24 }}>
          <div className="code-header">
            <span>diagnostic.log</span>
            <span style={{ color: '#ef4444' }}>HTTP 404</span>
          </div>
          <pre className="code-pre" style={{ color: '#94a3b8' }}>
            <code>
{`ERR_ROUTER_SLUG_UNMATCHED: No route matching the requested path.
Suggested fix: Check the URL or run npm run build to refresh the route manifest.`}
            </code>
          </pre>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#6b7280', marginTop: 24, borderTop: '1px solid #e5e7eb', paddingTop: 14 }}>
          <span>Looking for something that should be here?</span>
          <a href="#" style={{ color: '#6b7280', textDecoration: 'none' }}>Report broken link</a>
        </div>
      </main>
    </div>
  );
}
