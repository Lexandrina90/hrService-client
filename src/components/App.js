import React from "react";
import {
  BrowserRouter,
  Routes, 
  Route,
} from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import EmployeeForm from "./service/EmployeeForm";
import EmployeeList from "./service/EmployeeList";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/service/form" element={<EmployeeForm />} />
        <Route path="/service/employees" element={<EmployeeList />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;