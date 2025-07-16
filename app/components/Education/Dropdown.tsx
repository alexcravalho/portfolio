'use client';
import { useState } from 'react';
import { dropdown } from './education.data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type dropdownProps = {
  dropdown: dropdown;
};

export default function Dropdown({ dropdown }: dropdownProps) {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="dropdown-container">
      {hidden && (
        <div
          className="dropdown-grey"
          onClick={() => {
            setHidden((prev) => !prev);
          }}
        >
          <div className="dropdown-title">{dropdown.title}</div>
          <div className="dropdown-date-grey">{dropdown.date}</div>
          <div className="dropdown-symbol">
            <FontAwesomeIcon icon={dropdown.plus} />
          </div>
        </div>
      )}
      {!hidden && (
        <div
          className="dropdown-blue"
          onClick={() => {
            setHidden((prev) => !prev);
          }}
        >
          <div className="dropdown-title">{dropdown.title}</div>
          <div className="dropdown-date-white">{dropdown.date}</div>
          <div className="dropdown-symbol">
            <FontAwesomeIcon icon={dropdown.minus} />
          </div>
        </div>
      )}
      {!hidden && (
        <div className="invisible-dropdown">
          <div className="invisible-dropdown-title">{dropdown.descTitle}</div>
          <div className="invisible-dropdown-text">{dropdown.descText}</div>
        </div>
      )}
    </div>
  );
}
