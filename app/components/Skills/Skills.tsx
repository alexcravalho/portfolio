import SkillModule from './SkillModule';
import { modules } from './skills.data';

export default function Skills() {
  return (
    <div className="Skills">
      <div className="heading">Skills</div>
      {modules.map((module, i) => (
        <SkillModule module={module} key={i} />
      ))}
    </div>
  );
}
