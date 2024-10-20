import '../../styles/index/skills.css'
import SkillList from './Skills/SkillList.tsx'

function Skills () {
  return (
    <section className="skills" id="skills" aria-labelledby="skills-heading">
      <h2 id="skills-heading">My skills</h2>

      <SkillList />
    </section>
  )
}
export default Skills
