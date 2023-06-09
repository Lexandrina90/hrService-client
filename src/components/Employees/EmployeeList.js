import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Table, Button} from 'semantic-ui-react';
import { deleteEmployee, getEmployees } from '../../services/Employee';
import axios from 'axios';

const EmployeeList = () => {
  const [employees, setEmployees] =useState([]);

  useEffect(() => {
    getEmployees()
      .then(response => setEmployees(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteEmployee(id);
      setEmployees(employees.filter(e => e.id !== id))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Table striped >
      <Table.Header>
        <Table.Row >
          <Table.HeaderCell>ФИО</Table.HeaderCell>
          <Table.HeaderCell>Пол</Table.HeaderCell>
          <Table.HeaderCell>Дата Рождения</Table.HeaderCell>
          <Table.HeaderCell>Должность</Table.HeaderCell>
          <Table.HeaderCell>Грейд</Table.HeaderCell>
          <Table.HeaderCell>Образование</Table.HeaderCell>
          <Table.HeaderCell>Дата приема на работу</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {employees.map((employee) => (
          <Table.Row key={employee.id}>
            <Table.Cell>{employee.fio}</Table.Cell>
            <Table.Cell>{employee.gender}</Table.Cell>
            <Table.Cell>{employee.birthDate}</Table.Cell>
            <Table.Cell>{employee.position}</Table.Cell>
            <Table.Cell>{employee.grade}</Table.Cell>
            <Table.Cell>{employee.education}</Table.Cell>
            <Table.Cell>{employee.startDate}</Table.Cell>
            <Table.Cell>
              <Button onClick={() => handleDelete(employee.id)} color="red" icon="trash alternate" />
              <Link to={`/employees/form/${employee.id}`}>Редактировать</Link>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

export default EmployeeList;