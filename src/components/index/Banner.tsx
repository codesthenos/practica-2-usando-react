//import { Link } from 'codesthenos-07-midu-router'
import '../../styles/index/banner.css'

function Banner () {
  return (
    <section className="banner" id="projects" aria-labelledby="projects-heading">
      <h2 className="sr-only" id="projects-heading">Projects</h2>
      <div
        className="banner-image"
        role="img"
        aria-label="Banner image with background illustration."
      ></div>
      <a className="button" href="/practica-2-usando-react/projects.html">Codesthenos portfolio</a>
      {/*<Link className="button" to="/practica-2-usando-react/projects">Codesthenos portfolio</Link>*/}
    </section>
  )
}
export default Banner
