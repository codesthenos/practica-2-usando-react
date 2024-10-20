import '../../styles/index/contact.css'
import RadioInput from './Contact/RadioInput.tsx'
import Textarea from './Contact/Textarea.tsx'
import Newsletter from './Contact/Newsletter.tsx'
import FormButtons from './Contact/FormButtons.tsx'
import TextInput from './Contact/TextInput.tsx'
import GitHubInput from './Contact/GitHubInput.tsx'

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
          <TextInput title='Name ' type='text' id='name' name='name' placeholder='put your name here (required)' />

          <TextInput title='Surname ' type='text' id='surname' name='surname' placeholder='put your surname here (required)' />
        </div>

        <div className="group-2-fields">
          <TextInput title='Phone ' type='tel' id='phone' name='phone' placeholder='put your phone here (required)' />

          <GitHubInput />
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

          <RadioInput title='University ' id='university' value='university' checked={false} />

          <RadioInput title='Keepcoding kick-off ' id='keepcoding' value='Keepcoding kick-off'checked={true} />

          <RadioInput title='School ' id='school' value='school' checked={false} />

          <RadioInput title='Github ' id='github' value='github' checked={false} />
        </fieldset>

        <Textarea />

        <Newsletter />

        <FormButtons />
      </form>
    </section>
  )
}
export default Contact
