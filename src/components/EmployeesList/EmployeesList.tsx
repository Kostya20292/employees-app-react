import { EmployeesListItem } from '../EmployeesListItem/EmployeesListItem';

import './EmployeesList.css';

interface Employee {
  name: string;
  salary: number;
  increase: boolean;
}

interface Props {
  data: Employee[];
}

export const EmployeesList = ({ data }: Props) => (
  <ul className="app-list list-group">
    {data.map((item) => (
      <EmployeesListItem key={item.name} {...item} />
    ))}
  </ul>
);
