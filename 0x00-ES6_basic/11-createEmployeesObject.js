// Objective: create an object with a key named as the first parameter and a value as the second parameter.

  export default function createEmployeesObject(departmentName, employees) {
    const obj = {};
    obj[departmentName] = employees;
    
    return obj; 
  }