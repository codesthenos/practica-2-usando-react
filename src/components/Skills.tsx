function Skills () {
  return (
    <section className="skills" id="skills" aria-labelledby="skills-heading">
      <h2 id="skills-heading">My skills</h2>

      <ul>
        <li>
          <h4>Git - GitHub</h4>
          <div className="total-progress">
            <div
              className="current-progress"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={50}
              id="git-github-progress"
            ></div>
          </div>
        </li>

        <li>
          <h4>HTML</h4>
          <div className="total-progress">
            <div
              className="current-progress"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={65}
              id="html-progress"
            ></div>
          </div>
        </li>

        <li>
          <h4>CSS</h4>
          <div className="total-progress">
            <div
              className="current-progress"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={55}
              id="css-progress"
            ></div>
          </div>
        </li>

        <li>
          <h4>JavaScript</h4>
          <div className="total-progress">
            <div
              className="current-progress"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={80}
              id="javascript-progress"
            ></div>
          </div>
        </li>

        <li>
          <h4>NodeJS</h4>
          <div className="total-progress">
            <div
              className="current-progress"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={25}
              id="nodejs-progress"
            ></div>
          </div>
        </li>

        <li>
          <h4>ReactJS</h4>
          <div className="total-progress">
            <div
              className="current-progress"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={35}
              id="reactjs-progress"
            ></div>
          </div>
        </li>
      </ul>
    </section>
  )
}
export default Skills
