function LinkedinLink () {
  return (
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
          src={`${import.meta.env.BASE_URL}/linkedin-letras-logo-dark.png`}
          alt="LinkedIn text logo dark mode"
        />

        <img
          className="light-mode narrow-logo narrow-linkedin-logo"
          src={`${import.meta.env.BASE_URL}/linkedin-logo-dark.png`}
          alt="LinkedIn logo dark mode"
        />

        <img
          className="dark-mode wide-logo"
          src={`${import.meta.env.BASE_URL}/linkedin-letras-logo-white.png`}
          alt="LinkedIn text logo white mode"
        />

        <img
          className="dark-mode narrow-logo narrow-linkedin-logo"
          src={`${import.meta.env.BASE_URL}/linkedin-logo-white.png`}
          alt="LinkedIn logo white mode"
        />
      </a>
    </li>
  )
}
export default LinkedinLink
