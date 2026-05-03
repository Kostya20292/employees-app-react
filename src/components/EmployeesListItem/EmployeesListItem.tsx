import clsx from 'clsx';
import './EmployeesListItem.css';
import { useState } from 'react';

interface Props {
  name: string;
  salary: number;
}

export const EmployeesListItem = ({ name, salary }: Props) => {
  const [increase, setIncrease] = useState(false);
  const [rise, setRise] = useState(false);
  const className = clsx(
    'list-group-item d-flex justify-content-between',
    increase && 'increase',
    rise && 'like',
  );

  const handleIncrease = () => setIncrease((increase) => !increase);

  const handleRise = () => setRise((rise) => !rise);

  return (
    <li className={className}>
      <span className="list-group-item-label" onClick={handleRise}>
        {name}
      </span>
      <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn-cookie btn-sm " onClick={handleIncrease}>
          <i className="fas fa-cookie" />
        </button>

        <button type="button" className="btn-trash btn-sm ">
          <i className="fas fa-trash" />
        </button>
        <i className="fas fa-star" />
      </div>
    </li>
  );
};
