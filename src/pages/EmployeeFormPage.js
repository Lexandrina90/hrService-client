import React from "react";
import EmployeeForm from "../components/service/EmployeeForm";

const EmployeeFormPage = () => {
  return (
    <div>
      <h2 style={{color: "teal", textAlign: "center",marginTop: "20px"}}>Форма для добавления/редактирования сотрудника</h2>
      <EmployeeForm />
    </div>
  )
}
export default EmployeeFormPage;