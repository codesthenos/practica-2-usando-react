import '../../styles/Error404/header.css'

function Header () {
  return (
    <header className="body-header">
      <img
        className="dark-mode"
        id="white-header-logo"
        src={`${import.meta.env.BASE_URL}/strength-gains-white-icon.png`}
        alt="Strength-gains branding logo in white: two people forming a headstand pyramid."
      />
      <img
        className="light-mode"
        id="dark-header-logo"
        src={`${import.meta.env.BASE_URL}/strength-gains-dark-icon.png`}
        alt="Strength-gains branding logo in dark: two people forming a headstand pyramid."
      />

      <h1 className="sr-only">CODESTHENOS PROJECTS</h1>

      <nav aria-label="Back to landing page navigation" role="navigation">
        <a
          aria-label="Navigate back to landing page"
          className="button"
          href="index.html"
          title="to landing page"
        >
            To Home
        </a>
      </nav>
    </header>
  )
}
export default Header
