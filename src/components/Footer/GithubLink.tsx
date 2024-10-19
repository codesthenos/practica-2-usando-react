function GithubLink () {
  return (
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
          src={`${import.meta.env.BASE_URL}/github-letras-logo-dark.png`}
          alt="Github text logo dark mode"
        />

        <img
          className="light-mode narrow-logo"
          src={`${import.meta.env.BASE_URL}/github-logo-dark.png`}
          alt="Github logo dark mode"
        />

        <img
          className="dark-mode wide-logo wide-github-logo"
          src={`${import.meta.env.BASE_URL}/github-letras-logo-white.png`}
          alt="Github text logo white mode"
        />

        <img
          className="dark-mode narrow-logo"
          src={`${import.meta.env.BASE_URL}/github-logo-white.png`}
          alt="Github logo white mode"
        />
      </a>
    </li>
  )
}
export default GithubLink
