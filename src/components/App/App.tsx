import { EmployeesAddForm } from '../EmployeesAddForm/EmployeesAddForm';
import { EmployeesList } from '../EmployeesList/EmployeesList';
import { Filter } from '../Filter/Filter';
import { Info } from '../Info/Info';
import { SearchPanel } from '../SearchPanel/SearchPanel';

import './App.css';

export const App = () => {
  const data = [
    { id: 1, name: 'John C.', salary: 800, increase: false },
    { id: 2, name: 'Alex M.', salary: 3000, increase: true },
    { id: 3, name: 'Carl W.', salary: 5000, increase: false },
  ];

  return (
    <div className="app">
      <Info />

      <div className="search-panel">
        <SearchPanel />
        <Filter />
      </div>

      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
};
