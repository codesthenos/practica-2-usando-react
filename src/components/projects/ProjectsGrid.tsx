import '../../styles/projects/projects.css'

function ProjectsGrid () {
  return (
    <section className="projects" aria-labelledby="projects-heading">
      <div className="flex-845px">
        <h2 id="projects-heading">My projects</h2>

        <div className="projects-grid">
          <figure className="grid-item">
            <img
              src={`${import.meta.env.BASE_URL}/bannerHD.png`}
              alt="Project 1 screenshot"
              srcSet={`
                  ${import.meta.env.BASE_URL}/bannerHD-424.png   424w,
                  ${import.meta.env.BASE_URL}/bannerHD-867.png   867w,
                  ${import.meta.env.BASE_URL}/bannerHD-1023.png 1023w
                `}
            />
            <figcaption>Project 1</figcaption>
          </figure>
          <figure className="grid-item">
            <img
              src={`${import.meta.env.BASE_URL}/bannerHD.png`}
              alt="Project 2 screenshot"
              srcSet={`
                  ${import.meta.env.BASE_URL}/bannerHD-424.png   424w,
                  ${import.meta.env.BASE_URL}/bannerHD-867.png   867w,
                  ${import.meta.env.BASE_URL}/bannerHD-1023.png 1023w
                `}
            />
            <figcaption>Project 2</figcaption>
          </figure>
          <figure className="grid-item">
            <img
              src={`${import.meta.env.BASE_URL}/bannerHD.png`}
              alt="Project 3 screenshot"
              srcSet={`
                  ${import.meta.env.BASE_URL}/bannerHD-424.png   424w,
                  ${import.meta.env.BASE_URL}/bannerHD-867.png   867w,
                  ${import.meta.env.BASE_URL}/bannerHD-1023.png 1023w
                `}
            />
            <figcaption>Project 3</figcaption>
          </figure>
          <figure className="grid-item">
            <img
              src={`${import.meta.env.BASE_URL}/bannerHD.png`}
              alt="Project 4 screenshot"
              srcSet={`
                  ${import.meta.env.BASE_URL}/bannerHD-424.png   424w,
                  ${import.meta.env.BASE_URL}/bannerHD-867.png   867w,
                  ${import.meta.env.BASE_URL}/bannerHD-1023.png 1023w
                `}
            />
            <figcaption>Project 4</figcaption>
          </figure>
          <figure className="grid-item">
            <img
              src={`${import.meta.env.BASE_URL}/bannerHD.png`}
              alt="Project 5 screenshot"
              srcSet={`
                  ${import.meta.env.BASE_URL}/bannerHD-424.png   424w,
                  ${import.meta.env.BASE_URL}/bannerHD-867.png   867w,
                  ${import.meta.env.BASE_URL}/bannerHD-1023.png 1023w
                `}
            />
            <figcaption>Project 5</figcaption>
          </figure>
          <figure className="grid-item">
            <img
              src={`${import.meta.env.BASE_URL}/bannerHD.png`}
              alt="Project 6 screenshot"
              srcSet={`
                  ${import.meta.env.BASE_URL}/bannerHD-424.png   424w,
                  ${import.meta.env.BASE_URL}/bannerHD-867.png   867w,
                  ${import.meta.env.BASE_URL}/bannerHD-1023.png 1023w
                `}
            />
            <figcaption>Project 6</figcaption>
          </figure>
          <figure className="grid-item">
            <img
              src={`${import.meta.env.BASE_URL}/bannerHD.png`}
              alt="Project 7 screenshot"
              srcSet={`
                  ${import.meta.env.BASE_URL}/bannerHD-424.png   424w,
                  ${import.meta.env.BASE_URL}/bannerHD-867.png   867w,
                  ${import.meta.env.BASE_URL}/bannerHD-1023.png 1023w
                `}
            />
            <figcaption>Project 7</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
export default ProjectsGrid
