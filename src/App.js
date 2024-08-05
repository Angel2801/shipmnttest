import { useState, useEffect } from 'react';
import React from 'react';
// import EmployeeList from './EmployeeList'; 
import Filter from './Filter';

const App = () => {
  const [filters, setFilters] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch('https://run.mocky.io/v3/69f60a58-3a36-48c5-a9cf-b100b015950c');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setEmployees(data);
      setFilteredRows(data); 
    } catch (error) {
    }
  };

  const handleFilterChange = (newFilter) => {
    const updatedFilters = [...filters.filter(f => f.column !== newFilter.column), newFilter]
    setFilters(updatedFilters);
    applyFilters(updatedFilters);
  };

  const applyFilters = (currentFilters) => {
    const filtered = employees.filter(row => {
      return currentFilters.every(filter => {
        const value = row[filter.column];
        switch (filter.type) {
          case 'equals':
            return value == filter.value;
          case 'notEqual':
            return value != filter.value;
          case 'contains':
            return String(value).includes(filter.value);
          case 'notContains':
            return !String(value).includes(filter.value);
          case 'startsWith':
            return String(value).startsWith(filter.value);
          case 'endsWith':
            return String(value).endsWith(filter.value);
          case 'lessThan':
            return value < filter.value;
          case 'lessThanOrEqual':
            return value <= filter.value;
          case 'greaterThan':
            return value > filter.value;
          case 'greaterThanOrEqual':
            return value >= filter.value;
          case 'range':
            return value >= filter.value.min && value <= filter.value.max;
          case 'in':
            return filter.value.split(',').map(v => v.trim()).includes(String(value));
          case 'notIn':
            return !filter.value.split(',').map(v => v.trim()).includes(String(value));
          case 'isNull':
            return value === null || value === undefined;
          case 'isNotNull':
            return value !== null && value !== undefined;
          case 'dateIs':
          case 'dateRange':
            return true;
          default:
            return true;
        }
      });
    });
    setFilteredRows(filtered);
  };
  return (
    <div>
      <h1>Filterable Table</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* {columns.map(column => (
            <Filter
              key={column.name}
              column={column}
              onFilterChange={handleFilterChange}
            />
          ))} */}
      </div>
      {/* <EmployeeList rows={filteredRows} /> */}
    </div>
  );
};

export default App;
