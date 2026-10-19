'use client';

import Link from 'next/link';

// Navbar shown at the top of every page
export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="nav-left">
          <Link href="/docs" className="nav-brand">
            DriftWay Docs
          </Link>

          <nav className="nav-links">
            <Link href="/docs" className="nav-link">
              Documentation
            </Link>
            <Link href="/docs/guides/dynamic-routing" className="nav-link">
              Guides
            </Link>
          </nav>
        </div>

        <div className="nav-right">
          <div className="version-pill">Version 1.0</div>
        </div>
      </div>
    </header>
  );
}
