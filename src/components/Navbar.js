'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Navbar shown at the top of every page
export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="nav-left">
          <Link href="/docs" className="nav-brand">
            DriftWay Docs
          </Link>

          <nav className="nav-links">
            <Link
              href="/docs"
              className={`nav-link ${pathname === '/docs' ? 'nav-link-active' : ''}`}
            >
              Documentation
            </Link>
            <Link
              href="/docs/guides/dynamic-routing"
              className={`nav-link ${pathname?.startsWith('/docs/guides') ? 'nav-link-active' : ''}`}
            >
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
