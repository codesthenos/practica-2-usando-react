import '../styles/common/footer.css'

function Footer () {
  return (
    <footer className="footer">
      <div className="block">
        <p>
          <span className="inline-block">Special thanks</span> to
          <a
            className="link"
            href="https://github.com/kevinccbsg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kevin's Github profile"
            title="to Kevin's Github profile"
          >
            <strong>@kevinccbsg</strong>
          </a>
        </p>
      </div>

      <nav
        aria-label="Footer navigation to my social networks"
        role="navigation"
      >
        <ul>
          <li>
            <a
              href="https://github.com/codesthenos"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Codestheno's Github profile"
              title="to Codesthenos' Github profile"
            >
              <img
                className="light-mode wide-logo wide-github-logo"
                src="/github-letras-logo-dark.png"
                alt="Github text logo dark mode"
              />

              <img
                className="light-mode narrow-logo"
                src="/github-logo-dark.png"
                alt="Github logo dark mode"
              />

              <img
                className="dark-mode wide-logo wide-github-logo"
                src="/github-letras-logo-white.png"
                alt="Github text logo white mode"
              />

              <img
                className="dark-mode narrow-logo"
                src="/github-logo-white.png"
                alt="Github logo white mode"
              />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/codesthenos"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Codestheno's linkedIn profile"
              title="to Codesthenos' LinkedIn profile"
            >
              <img
                className="light-mode wide-logo"
                src="/linkedin-letras-logo-dark.png"
                alt="LinkedIn text logo dark mode"
              />

              <img
                className="light-mode narrow-logo narrow-linkedin-logo"
                src="/linkedin-logo-dark.png"
                alt="LinkedIn logo dark mode"
              />

              <img
                className="dark-mode wide-logo"
                src="/linkedin-letras-logo-white.png"
                alt="LinkedIn text logo white mode"
              />

              <img
                className="dark-mode narrow-logo narrow-linkedin-logo"
                src="/linkedin-logo-white.png"
                alt="LinkedIn logo white mode"
              />
            </a>
          </li>
        </ul>
      </nav>

      <div className="block">
        <p>
          © <strong>codesthenos</strong>
          <span className="inline-block">Almost all rights reserved | 2024</span>
        </p>
      </div>
    </footer>
  )
}
export default Footer
