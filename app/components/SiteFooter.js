export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <nav className="site-footer-links" aria-label="Footer">
          <a href="/privacy" className="site-footer-link">
            Privacy
          </a>
          <a href="/terms" className="site-footer-link">
            Terms
          </a>
         
        </nav>
        <p className="site-footer-copy">© 2026 PrimaLabs, Inc.</p>
      </div>
    </footer>
  );
}
