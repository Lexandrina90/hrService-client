import React from "react";
import {
  BrowserRouter,
  Routes, 
  Route,
} from "react-router-dom";

import Login from "./service/Login";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;