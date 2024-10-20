function Textarea () {
  return (
    <div className="text-input">
      <label htmlFor="more-info">More info</label>
      <textarea
        id="more-info"
        name="more-info"
        maxLength={180}
        rows={7}
        required
        aria-required={true}
        aria-label="Additional information"
        placeholder="more info about you here"
      ></textarea>
    </div>
  )
}
export default Textarea
