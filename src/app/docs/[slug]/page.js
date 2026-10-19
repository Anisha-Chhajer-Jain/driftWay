import Link from 'next/link';
import { notFound } from 'next/navigation';
import Sidebar from '../../../components/Sidebar';
import { articles } from '../../../data/articles';

// This page shows a single documentation article
// The [slug] in the URL is matched against the articles list
export default async function DocArticlePage({ params }) {
  const { slug } = await params;

  // Find the article that matches the current URL slug
  const article = articles.find((a) => a.slug === slug);

  // If no article found, show the 404 page
  if (!article) {
    notFound();
  }

  return (
    <div className="docs-shell">
      <Sidebar currentSlug={article.slug} />

      <div className="docs-with-toc">
        <main className="docs-article-body">
          {/* Breadcrumb path at the top */}
          <div className="breadcrumbs">
            Documentation / {article.category} / {article.title}
          </div>

          <h1 className="page-title">{article.title}</h1>
          <p className="page-subtitle">{article.subtitle}</p>

          <div className="section-divider"></div>

          {/* Overview section */}
          <section id="overview">
            <h2 className="section-heading">Overview</h2>
            <p className="section-desc">{article.overview}</p>

            {article.conventionNote && (
              <div className="callout-box">
                <div className="callout-title">{article.conventionNote}</div>
              </div>
            )}
          </section>

          {/* Main topic section */}
          {article.catchAllHeading && (
            <section id="catch-all">
              <h2 className="section-heading">{article.catchAllHeading}</h2>
              <p className="section-desc">{article.catchAllDesc}</p>

              {article.codeSnippet && (
                <div className="code-block">
                  <div className="code-header">
                    <span>Code Example</span>
                  </div>
                  <pre className="code-pre">
                    <code>{article.codeSnippet}</code>
                  </pre>
                </div>
              )}

              {article.patterns && article.patterns.length > 0 && (
                <div className="doc-table-wrap">
                  <table className="doc-table">
                    <thead>
                      <tr>
                        <th>Route Pattern</th>
                        <th>Example URL</th>
                        <th>Params</th>
                      </tr>
                    </thead>
                    <tbody>
                      {article.patterns.map((row, idx) => (
                        <tr key={idx}>
                          <td className="code-cell">{row.pattern}</td>
                          <td>{row.url}</td>
                          <td className="code-cell">{row.params}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          )}

          {/* Extra section */}
          {article.routeGroupsHeading && (
            <section id="route-groups">
              <h2 className="section-heading">{article.routeGroupsHeading}</h2>
              <p className="section-desc">{article.routeGroupsDesc}</p>
            </section>
          )}

          {/* Bottom navigation - previous and next article */}
          <div className="prev-next-nav">
            {article.prev ? (
              <Link href={article.prev.url} className="prev-next-link">
                <span className="prev-next-label">Previous</span>
                <span className="prev-next-title">{article.prev.title}</span>
              </Link>
            ) : <div></div>}

            {article.next && (
              <Link href={article.next.url} className="prev-next-link" style={{ textAlign: 'right' }}>
                <span className="prev-next-label">Next</span>
                <span className="prev-next-title">{article.next.title}</span>
              </Link>
            )}
          </div>
        </main>

        {/* Right side table of contents */}
        <aside className="docs-toc">
          <div className="toc-title">On this page</div>
          <ul className="toc-list">
            <li><a href="#overview" className="toc-link">Overview</a></li>
            {article.catchAllHeading && (
              <li><a href="#catch-all" className="toc-link active">{article.catchAllHeading}</a></li>
            )}
            {article.routeGroupsHeading && (
              <li><a href="#route-groups" className="toc-link">{article.routeGroupsHeading}</a></li>
            )}
          </ul>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="toc-footer-link"
          >
            Edit on GitHub
          </a>
        </aside>
      </div>
    </div>
  );
}
