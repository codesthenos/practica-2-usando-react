import { SKILLS } from '../../../consts.ts'

function SkillList () {
  return (
    <ul>
      {
        SKILLS.map((skill, index) => (
          <li key={index}>
            <h4>{skill.skillTitle}</h4>
            <div className="total-progress">
              <div
                className="current-progress"
                role="progressbar"
                aria-valuemin={skill.valueMin}
                aria-valuemax={skill.valueMax}
                aria-valuenow={skill.valueNow}
                id={skill.id}
              ></div>
            </div>
          </li>
        ))
      }
    </ul>
  )
}
export default SkillList
