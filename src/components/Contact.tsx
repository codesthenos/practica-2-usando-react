import '../styles/index/contact.css'

function Contact () {
  return (
    <section
      className="contact"
      id="contact"
      aria-labelledby="contact-form-heading"
    >
      <h2 className="sr-only" id="contact-form-heading">Contact form</h2>
      <form role="form" aria-label="Contact me form" method="post" action="">
        <div className="group-2-fields">
          <div className="text-input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              aria-required="true"
              placeholder="put your name here (required)"
            />
          </div>

          <div className="text-input">
            <label htmlFor="surname">Surname</label>
            <input
              type="text"
              id="surname"
              name="surname"
              required
              aria-required="true"
              placeholder="put your surname here (required)"
            />
          </div>
        </div>

        <div className="group-2-fields">
          <div className="text-input">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              aria-required="true"
              placeholder="put your phone here (required)"
            />
          </div>

          <div className="text-input">
            <label htmlFor="github-user">Github username</label>
            <input
              type="text"
              id="github-user"
              name="github-user"
              required
              pattern="^@[^\s]+"
              title="Username must start with @. Example: @username"
              aria-describedby="github-username-info"
              aria-label="Github username (starting with @)"
              aria-required="true"
              placeholder="put your github username here (@<username>) (required)"
            />
            <span className="sr-only" id="github-username-info">
                Github usernames must start with @
            </span>
          </div>
        </div>

        <fieldset
          aria-labelledby="meeting-question"
          aria-describedby="meeting-info"
        >
          <div>
            <legend id="meeting-question">How did you meet me?</legend>
            <span id="meeting-info" className="sr-only">
                Please choose how we met
            </span>
          </div>
          <div>
            <label htmlFor="university">University </label>
            <input
              type="radio"
              id="university"
              name="meeting-way"
              value="university"
              required
              aria-required="true"
              aria-label="Met at University"
            />
          </div>

          <div>
            <label htmlFor="keepcoding">Keepcoding kick-off </label>
            <input
              checked
              type="radio"
              id="keepcoding"
              name="meeting-way"
              value="keepcoding kick off"
              required
              aria-required="true"
              aria-label="Met at Keepcoding kick-off"
            />
          </div>

          <div>
            <label htmlFor="school">School </label>
            <input
              type="radio"
              id="school"
              name="meeting-way"
              value="school"
              required
              aria-required="true"
              aria-label="Met at School"
            />
          </div>

          <div>
            <label htmlFor="github">Github </label>
            <input
              type="radio"
              id="github"
              name="meeting-way"
              value="github"
              required
              aria-required="true"
              aria-label="Met via Github"
            />
          </div>
        </fieldset>

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

        <div className="form-buttons">
          <button
            className="button"
            type="submit"
            aria-label="Submit the contact form"
          >
              Submit
          </button>
          <button
            className="button"
            type="reset"
            aria-label="Reset the contact form fields"
          >
              Reset
          </button>
        </div>
      </form>
    </section>
  )
}
export default Contact
