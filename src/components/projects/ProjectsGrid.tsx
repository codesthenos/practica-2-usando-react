import '../../styles/projects/projects.css'
import GridItem from './GridItem'

function ProjectsGrid () {
  return (
    <section className="projects" aria-labelledby="projects-heading">
      <div className="flex-845px">
        <h2 id="projects-heading">My projects</h2>

        <div className="projects-grid">
          <GridItem projectTitle='Project 1' image1='bannerHD.png' image2='bannerHD-424.png' image3='bannerHD-867.png' image4='bannerHD-1023.png' />
          <GridItem projectTitle='Project 2' image1='bannerHD.png' image2='bannerHD-424.png' image3='bannerHD-867.png' image4='bannerHD-1023.png' />
          <GridItem projectTitle='Project 3' image1='bannerHD.png' image2='bannerHD-424.png' image3='bannerHD-867.png' image4='bannerHD-1023.png' />
          <GridItem projectTitle='Project 4' image1='bannerHD.png' image2='bannerHD-424.png' image3='bannerHD-867.png' image4='bannerHD-1023.png' />
          <GridItem projectTitle='Project 5' image1='bannerHD.png' image2='bannerHD-424.png' image3='bannerHD-867.png' image4='bannerHD-1023.png' />
          <GridItem projectTitle='Project 6' image1='bannerHD.png' image2='bannerHD-424.png' image3='bannerHD-867.png' image4='bannerHD-1023.png' />
          <GridItem projectTitle='Project 7' image1='bannerHD.png' image2='bannerHD-424.png' image3='bannerHD-867.png' image4='bannerHD-1023.png' />
          <GridItem projectTitle='Project 8' image1='bannerHD.png' image2='bannerHD-424.png' image3='bannerHD-867.png' image4='bannerHD-1023.png' />
          <GridItem projectTitle='Project 9' image1='bannerHD.png' image2='bannerHD-424.png' image3='bannerHD-867.png' image4='bannerHD-1023.png' />
        </div>
      </div>
    </section>
  )
}
export default ProjectsGrid
