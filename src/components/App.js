import React from "react";
import {
  BrowserRouter,
  Routes, 
  Route,
} from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import EmployeeForm from "./service/EmployeeForm";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/service/form" element={<EmployeeForm />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;