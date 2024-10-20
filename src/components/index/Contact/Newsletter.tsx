function Newsletter () {
  return (
    <div>
      <input
        type="checkbox"
        id="newsletter"
        name="newsletter"
        aria-labelledby="newsletter-label"
      />
      <label id="newsletter-label" htmlFor="newsletter"
      > I want to subscribe to the newsletter</label>
    </div>
  )
}
export default Newsletter
