export default function SiteFooter() {
  return (
    <footer className="footer-bar">
      <div>
        <div className="footer-cta-label">Partner Brief</div>
        <a className="footer-cta-email" href="mailto:partners@primalabs.io">
          partners@primalabs.io
        </a>

        <div className="val-row">
          <div className="val-item">No incremental power</div>
          <div className="val-item">No cooling spend</div>
          <div className="val-item">No CapEx</div>
        </div>
      </div>

      <div className="footer-meta">
        <p>Confidential · 2026</p>
      </div>
    </footer>
  );
}
