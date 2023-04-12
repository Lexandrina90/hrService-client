import React from "react";
import EmployeeList from "../components/Employees/EmployeeList";

const EmployeeListPage = () => {
  return (
    <div>
      <h1 style={{color: "teal", textAlign: "center", marginTop: "20px"}}>Список сотрудников</h1>
      <EmployeeList />
    </div>
  )
}

export default EmployeeListPage;