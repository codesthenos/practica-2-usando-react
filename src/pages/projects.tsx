import Header from '../components/projects/Header'
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
