import { skills } from "../../constants/data";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <div id="skills">
      <div className="mx-auto p-10 sm:py-10 lg:py-20 skills-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-teal-600">
              Here’s what I can bring to the table!
            </h2>
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
              My Skills
            </p>
          </div>
          <div className="pt-5 text-gray-600">
            {skills.map(({ title, skill }, index) => (
              <SkillCard key={title} title={title} skill={skill} stripe={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} />
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}
