function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-copy">© 2026 Tejas Shirasagar</p>
        <div className="footer-socials">
          <a
            href="#"
            className="footer-social"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            in
          </a>
          <a
            href="#"
            className="footer-social"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            ⌨
          </a>
          <a
            href="mailto:tejasshirasagar@gmail.com"
            className="footer-social"
            aria-label="Email"
          >
            ✉
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
