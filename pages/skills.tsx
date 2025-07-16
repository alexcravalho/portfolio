import SkillModule from '../components/Skills/SkillModule';
import { modules } from '../components/Skills/skills.data';

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
