import React, { useState, useEffect } from 'react';
import { saveEmployee, getEmployee } from '../service/Employee';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Segment, Grid} from "semantic-ui-react";

const EmployeeForm = ({ id }) => {
  const [fio, setFio] = useState('');
  const [position, setPosition] = useState('');
  const [gender, setGender] = useState('');
  const [education, setEducation] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getEmployee(id).then((employee) => {
        setFio(employee.fio);
        setPosition(employee.position);
        setGender(employee.gender);
        setEducation(employee.education);
        setBirthDate(employee.birthDate);
        setStartDate(employee.startDate);
      });
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const employee = { fio, position, gender, education, birthDate, startDate };
    saveEmployee(employee).then(() => {
      navigate('/service/employees');
    });
    navigate('/service/employees');
  };

  return (
    <Grid centered>
      <Grid.Column style={{maxWidth: 800}}>
        <Segment inverted  style={{margin: 'auto', marginTop: "20px", backgroundColor: "teal"}}>
          <Form inverted onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Input
                fluid label='ФИО'
                placeholder='ФИО'
                value={fio}
                onChange={(e) => setFio(e.target.value)}
                width={10}
              />
              <Form.Input
                fluid label='Пол'
                placeholder='Пол'
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                width="4"
              />
               <Form.Input
                fluid label='Дата Рождения'
                placeholder='Дата Рождения'
                type='date'
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                width={4}
              />
            </Form.Group>
              <Form.Input
                fluid label='Должность'
                placeholder='Должность'
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
              <Form.Input
                fluid label='Образование'
                placeholder='Образование'
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                
              />
              <Form.Input
                fluid label='Дата приема на работу'
                placeholder='Дата приема на работу'
                type='date'
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                width={4}
              />
            <Button.Group fluid>
              <Button type='submit'>Сохранить</Button>
              <Button.Or />
              <Button type="button" onClick={() => navigate('/service/employees')}>Отмена</Button>
            </Button.Group>
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  )
}
export default EmployeeForm;