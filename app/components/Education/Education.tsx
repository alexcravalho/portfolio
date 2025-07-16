import Dropdown from './Dropdown';
import { dropdownList } from './education.data';

export default function Education() {
  return (
    <div className="Education">
      <div className="heading">Education</div>
      {dropdownList.map((dropdown, i) => (
        <Dropdown dropdown={dropdown} key={i} />
      ))}
    </div>
  );
}
