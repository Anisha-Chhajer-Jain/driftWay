import Link from 'next/link';
import Sidebar from '../../components/Sidebar';

// This is the main /docs overview page
export default function DocsOverviewPage() {
  return (
    <div className="docs-shell">
      <Sidebar currentSlug="introduction" />

      <main className="docs-main-content">
        <div className="breadcrumbs">DriftWay Docs / Overview</div>

        <h1 className="page-title">Documentation</h1>
        <p className="page-subtitle">
          Welcome to DriftWay Docs. Learn about routing, layouts, data fetching, and configuration.
        </p>

        <div className="section-divider"></div>

        {/* Three overview cards */}
        <div className="cards-grid">
          <Link href="/docs/guides/getting-started" className="doc-card">
            <div className="doc-card-title">Getting Started</div>
            <p className="doc-card-desc">
              Quickstart guides, prerequisites, and initial project setup.
            </p>
            <div className="doc-card-action">Start reading</div>
          </Link>

          <Link href="/docs/routing" className="doc-card">
            <div className="doc-card-title">Core Concepts</div>
            <p className="doc-card-desc">
              Learn about routing, nested layouts, catch-all paths, and data loading.
            </p>
            <div className="doc-card-action">Explore concepts</div>
          </Link>

          <Link href="/docs/configuration" className="doc-card">
            <div className="doc-card-title">Reference</div>
            <p className="doc-card-desc">
              Configuration parameters, environment variables, and CLI commands.
            </p>
            <div className="doc-card-action">View reference</div>
          </Link>
        </div>

        {/* Info callout */}
        <div className="callout-box">
          <div className="callout-title">Note</div>
          <p className="callout-body">
            DriftWay uses unified server-driven component composition. Review the configuration section before migrating existing projects.
          </p>
        </div>

        {/* Quick setup code */}
        <div className="code-block">
          <div className="code-header">
            <span>Terminal - Quick Setup</span>
          </div>
          <pre className="code-pre">
            <code>
{`$ npx driftway create my-app
$ cd my-app && npm run dev`}
            </code>
          </pre>
        </div>

        <footer className="docs-footer">
          <div>DriftWay v1.0.4</div>
          <div className="footer-links">
            <a href="#" className="footer-link">License</a>
            <a href="#" className="footer-link">Changelog</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
