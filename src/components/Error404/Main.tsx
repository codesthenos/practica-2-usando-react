import '../../styles/Error/main404.css'

function Main () {
  return (
    <main id="main404" role="main">
      <figure>
        <img
          src={`${import.meta.env.BASE_URL}/404-travolta-universe.gif`}
          alt=""
          decoding="async"
          id="error-gif"
        />
        <figcaption className="sr-only">Travolta lost in the universe</figcaption>
      </figure>
      <h1>
        <span className="error-404">ERROR 404</span>
        <span className="error-not-found">ERROR NOT FOUND</span>
      </h1>
      <label htmlFor="error-gif">WHERE IS TRAVOLTA?</label>
    </main>
  )
}
export default Main
