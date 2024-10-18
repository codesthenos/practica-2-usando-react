import '../../styles/index/header-burger-menu.css'

function Header () {
  return (
    <header className="body-header">
      <h1 className="sr-only">CODESTHENOS PORTFOLIO</h1>
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

      <nav aria-label="Main web navigation" role="navigation">
        <input type="checkbox" id="navigation-menu" />
        <label
          htmlFor="navigation-menu"
          aria-label="Main menu"
          role="button"
        ></label>
        <ul>
          <li>
            <a className="link" href="#skills">Skills</a>
          </li>

          <li>
            <a className="link" href="#projects">Projects</a>
          </li>

          <li>
            <a className="link" href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
