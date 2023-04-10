import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { saveEmployee, getEmployee } from '../services/employee';

const EmployeeForm = ({ id }) => {
  const [fio, setFio] = useState('');
  const [position, setPosition] = useState('');
  const [gender, setGender] = useState('');
  const [education, setEducation] = useState('');
  const [grade, setGrade] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [startDate, setStartDate] = useState('');
