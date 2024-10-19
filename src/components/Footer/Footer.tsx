import '../../styles/common/footer.css'
import GithubLink from './GithubLink.tsx'
import LinkedinLink from './LinkedinLink.tsx'
import RightsReserved from './RightsReserved.tsx'
import Thanks from './Thanks.tsx'

function Footer () {
  return (
    <footer className="footer">
      <Thanks />
      <nav
        aria-label="Footer navigation to my social networks"
        role="navigation"
      >
        <ul>
          <GithubLink />
          <LinkedinLink />
        </ul>
      </nav>
      <RightsReserved />
    </footer>
  )
}
export default Footer
