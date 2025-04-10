import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
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
      ],
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((item) => item.id !== id),
    }));
  };

  addNewEmployee = (employee) => {
    this.setState(({ data }) => ({
      data: [
        ...data,
        {
          id: uuidv4(),
          ...employee,
          increase: false,
        },
      ],
    }));
  };

  render() {
    const { data } = this.state;

    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList data={data} onDelete={this.deleteItem} />
        <EmployeesAddForm onAdd={this.addNewEmployee} />
      </div>
    );
  }
}

export default App;
