import Link from 'next/link';
import { notFound } from 'next/navigation';
import Sidebar from '../../../../components/Sidebar';
import { guides } from '../../../../data/guides';

// This page shows a single guide (like a tutorial with steps)
// The [slug] in the URL is matched against the guides list
export default async function GuideDetailPage({ params }) {
  const { slug } = await params;

  // Find the guide that matches the URL slug
  const guide = guides.find((g) => g.slug === slug);

  // If no guide found, show 404 page
  if (!guide) {
    notFound();
  }

  return (
    <div className="docs-shell">
      <Sidebar currentSlug="routing" />

      <main className="docs-main-content">
        {/* Breadcrumb path */}
        <div className="breadcrumbs">{guide.category}</div>

        {/* Guide type label and read time */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <span style={{
            background: '#eff6ff',
            color: '#2563eb',
            fontWeight: 700,
            fontSize: 11,
            padding: '3px 8px',
            borderRadius: 4,
          }}>
            GUIDE
          </span>
          <span style={{ fontSize: 12, color: '#6b7280' }}>
            Read time: {guide.readTime}
          </span>
        </div>

        <h1 className="page-title">{guide.title}</h1>
        <p className="page-subtitle">{guide.subtitle}</p>

        {/* Prerequisite box, if the guide has one */}
        {guide.prereq && (
          <div className="callout-box">
            <div className="callout-title">Before you start:</div>
            <p className="callout-body">{guide.prereq}</p>
          </div>
        )}

        <div className="section-divider"></div>

        {/* Numbered steps */}
        {guide.steps.map((step) => (
          <div key={step.num} className="step-item">
            <div className="step-header">
              <span className="step-badge">{step.num}</span>
              <h2 className="step-title">{step.title}</h2>
            </div>

            <p className="section-desc">{step.desc}</p>

            {/* Code block if this step has code */}
            {step.code && (
              <div className="code-block">
                <div className="code-header">
                  <span>Code Example</span>
                </div>
                <pre className="code-pre">
                  <code>{step.code}</code>
                </pre>
              </div>
            )}

            {/* Table if this step has rows */}
            {step.tableRows && (
              <div className="doc-table-wrap">
                <table className="doc-table">
                  <thead>
                    <tr>
                      <th>Route Pattern</th>
                      <th>Example URL</th>
                      <th>Resolved Params</th>
                    </tr>
                  </thead>
                  <tbody>
                    {step.tableRows.map((row, idx) => (
                      <tr key={idx}>
                        <td className="code-cell">{row.pattern}</td>
                        <td>{row.url}</td>
                        <td className="code-cell">{row.resolved}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Warning box if this step has a safety tip */}
            {step.safetyTip && (
              <div className="callout-box callout-yellow">
                <div className="callout-title">Warning</div>
                <p className="callout-body">{step.safetyTip}</p>
              </div>
            )}
          </div>
        ))}

        {/* Bottom navigation */}
        <div className="prev-next-nav">
          {guide.prev ? (
            <Link href={guide.prev.url} className="prev-next-link">
              <span className="prev-next-label">Previous</span>
              <span className="prev-next-title">{guide.prev.title}</span>
            </Link>
          ) : <div></div>}

          {guide.next && (
            <Link href={guide.next.url} className="prev-next-link" style={{ textAlign: 'right' }}>
              <span className="prev-next-label">Next</span>
              <span className="prev-next-title">{guide.next.title}</span>
            </Link>
          )}
        </div>

        {/* Feedback widget */}
        <div className="feedback-box">
          <span className="feedback-label">Was this guide helpful?</span>
          <div>
            <button type="button" className="feedback-btn">Yes</button>
            <button type="button" className="feedback-btn">Could be better</button>
          </div>
        </div>
      </main>
    </div>
  );
}
