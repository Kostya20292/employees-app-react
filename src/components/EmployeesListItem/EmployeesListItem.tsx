import clsx from 'clsx';
import './EmployeesListItem.css';

interface Props {
  name: string;
  salary: number;
  increase: boolean;
}

export const EmployeesListItem = ({ name, salary, increase }: Props) => {
  const className = clsx('list-group-item d-flex justify-content-between', increase && 'increase');

  return (
    <li className={className}>
      <span className="list-group-item-label">{name}</span>
      <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn-cookie btn-sm ">
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
