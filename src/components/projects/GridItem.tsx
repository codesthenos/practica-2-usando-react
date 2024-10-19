function GridItem ({ projectTitle, image1, image2, image3, image4 }: { projectTitle: string, image1: string, image2: string, image3: string, image4: string }) {
  return (
    <figure className="grid-item">
      <img
        src={`${import.meta.env.BASE_URL}/${image1}`}
        alt={`${projectTitle} screenshot`}
        srcSet={`
          ${import.meta.env.BASE_URL}/${image2}   424w,
          ${import.meta.env.BASE_URL}/${image3}   867w,
          ${import.meta.env.BASE_URL}/${image4} 1023w
        `}
      />
      <figcaption>{projectTitle}</figcaption>
    </figure>
  )
}
export default GridItem
