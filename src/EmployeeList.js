import React, { useState, useEffect } from 'react';

function EmployeeList() {
const [employees, setEmployees] = useState([]);
const fetchEmployees = async () => {  
  try {
    const response = await fetch('https://run.mocky.io/v3/69f60a58-3a36-48c5-a9cf-b100b015950c');
    const data = await response.json();
    console.log('Fetched data:', data);
    if (Array.isArray(data)) {
      setEmployees(data);
    } else {
      throw new Error('Fetched data is not an array');
    }
  } catch (error) {
    console.error('Error fetching employees:', error);
  }
};
return (
  <ul>
    {employees.map(employee => (
      <li key={employee.id}>
        {employee.name} - {employee.role}
      </li>
    ))}
  </ul>
);
}


export default EmployeeList,fetchEmployees;