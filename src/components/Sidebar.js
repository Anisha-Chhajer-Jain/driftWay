import Link from 'next/link';

// All sidebar nav items in one place
const navSections = [
  {
    title: 'Getting Started',
    items: [
      { label: 'Introduction', slug: 'introduction', href: '/docs/introduction' },
      { label: 'Installation', slug: 'installation', href: '/docs/installation' },
      { label: 'Project Setup', slug: 'project-setup', href: '/docs/project-setup' },
    ],
  },
  {
    title: 'Core Concepts',
    items: [
      { label: 'Routing', slug: 'routing', href: '/docs/routing' },
      { label: 'Layouts', slug: 'layouts', href: '/docs/layouts' },
      { label: 'Data Fetching', slug: 'data-fetching', href: '/docs/data-fetching' },
    ],
  },
  {
    title: 'Reference',
    items: [
      { label: 'Configuration', slug: 'configuration', href: '/docs/configuration' },
      { label: 'CLI Commands', slug: 'cli-commands', href: '/docs/cli-commands' },
    ],
  },
];

// currentSlug tells us which link to highlight as active
export default function Sidebar({ currentSlug = '' }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-title">Documentation</div>
        <div className="sidebar-version">v1.0</div>
      </div>

      <div className="sidebar-nav">
        {navSections.map((section) => (
          <div key={section.title} className="sidebar-group">
            <div className="sidebar-group-title">{section.title}</div>
            <ul className="sidebar-list">
              {section.items.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={item.href}
                    className={`sidebar-link ${currentSlug === item.slug ? 'active' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="sidebar-footer">
        <a href="https://github.com" target="_blank" rel="noreferrer" className="sidebar-footer-link">
          GitHub
        </a>
      </div>
    </aside>
  );
}
