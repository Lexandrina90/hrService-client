import React from "react";

export async function saveEmployee(employee) {
  const response = await fetch('/api/service/employees', {
    method: 'POST',
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify(employee),
  });
  const data = await response.json();
  return data;
}

export async function getEmployee(id) {
  const response = await fetch('/api/service/employees/${id}');
  const data = await response.json();
  return data;
}