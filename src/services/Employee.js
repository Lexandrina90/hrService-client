import React from "react";
import axios from "axios";
import ApiClient from "./ApiClient";

const client = new ApiClient('http://localhost:3001/api');

export async function saveEmployee(employee) {
  try {
    if (employee.id) {
      const data = await client.put(`/employees/${employee.id}`, employee);
      return data;
    } else {
      const data = await client.post('/employees', employee);
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getEmployee(id) {
  try {
    const data = await client.get(`/employees/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getEmployees() {
  try {
    const data = await client.get('/employees');
    return data;
  } catch (error) {
    console.error(error);
  }
}

export const deleteEmployee = async (employeeId) => {
  try {
    const response = await client.delete(`/employees/${employeeId}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};


// import React from "react";

// export async function saveEmployee(employee) {
//   const response = await fetch('/api/employees', {
//     method: 'POST',
//     headers: {'Content-Type' : 'application/json'},
//     body: JSON.stringify(employee),
//   });
//   const data = await response.json();
//   return data;
// }

// export async function getEmployee(id) {
//   const response = await fetch('/api/employees/${id}');
//   const data = await response.json();
//   return data;
// }

// export async function getEmployees() {
//   const response = await fetch('/api/employees');
//   const data = await response.json();
//   return data;
// }