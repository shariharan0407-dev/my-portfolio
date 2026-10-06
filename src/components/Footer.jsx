import footerFigure from '../assets/portfolio/footer-figure.png'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <img className="footer-figure" src={footerFigure} alt="" />
        <div className="footer-copy">
          <div>
            <p className="footer-title">thanks for stopping by.</p>
            <p className="footer-subtitle">made with care, caffine and a good playlist.</p>
          </div>
          <nav className="social-links" aria-label="Social links">
            <a href="mailto:ihariharan47@gmail.com">Email</a>
            <a href="https://www.instagram.com/hari_pixels/" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/hari-haran-7b2032244/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
