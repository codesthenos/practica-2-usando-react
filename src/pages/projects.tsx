import Header from '../components/Header/Header'
import ProjectsGrid from '../components/projects/ProjectsGrid'
import Video from '../components/projects/Video'

function Projects () {
  return (
    <>
      <Header />
      <main id='projectsMain' role='main'>
        <Video />
        <ProjectsGrid />   
      </main>
    </>
  )
}

export default Projects
