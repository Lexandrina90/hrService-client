import React from "react";
import {
  BrowserRouter,
  Routes, 
  Route,
} from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import EmployeeListPage from "../pages/EmployeeListPage";
import EmployeeFormPage from "../pages/EmployeeFormPage";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/service/employees" element={<EmployeeListPage />} />
        <Route path="/service/form" element={<EmployeeFormPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;