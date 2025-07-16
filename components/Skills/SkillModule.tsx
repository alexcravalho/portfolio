import { skillModule } from './skills.data';

type moduleProps = {
  module: skillModule;
};

export default function SkillModule({ module }: moduleProps) {
  return (
    <div className="module-container">
      <div className="sub-heading">{module.title}</div>
      <div className="skill-container">
        {module.skillList.map((skill, i) => (
          <div className="skill" key={i}>
            <span className="skill-hover-text">{module.descList[i]}</span>
            <div className="skill-name">{skill}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
