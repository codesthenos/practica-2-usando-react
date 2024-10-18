import '../../styles/projects/video.css'

function Video () {
  return (
    <section className="video" aria-labelledby="video-heading">
      <h2 id="video-heading" className="sr-only">VIDEO</h2>

      <div>
        <iframe
          src="https://www.youtube.com/embed/HEMvsJTBweY?si=Pa0EOvC7rheS72gu&autoplay=1&mute=1"
          title="Midudev portfolio tutorial"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          aria-describedby="video-description"
        ></iframe>
        <p id="video-description" className="sr-only">
            tutorial by Midudev on how to create a portfolio website in Spanish.
        </p>
      </div>
    </section>
  )
}
export default Video
