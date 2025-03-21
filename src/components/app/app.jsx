import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

const App = () => {
  const data = [
    {
      id: 1,
      name: 'John C.',
      salary: 800,
      increase: true,
    },
    {
      id: 2,
      name: 'Alex M.',
      salary: 3000,
      increase: false,
    },
    {
      id: 3,
      name: 'Carl W.',
      salary: 5000,
      increase: true,
    },
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
};

export default App;
