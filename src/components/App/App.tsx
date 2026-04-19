import { EmployeesAddForm } from '../EmployeesAddForm/EmployeesAddForm';
import { EmployeesList } from '../EmployeesList/EmployeesList';
import { Filter } from '../Filter/Filter';
import { Info } from '../Info/Info';
import { SearchPanel } from '../SearchPanel/SearchPanel';

import './App.css';

export const App = () => (
  <div className="app">
    <Info />

    <div className="search-panel">
      <SearchPanel />
      <Filter />
    </div>

    <EmployeesList />
    <EmployeesAddForm />
  </div>
);
