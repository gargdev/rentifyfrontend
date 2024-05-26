import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import PropertyList from "./components/PropertyList";
import PropertyForm from "./components/PropertyForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/properties" element={<PropertyList />} />
          <Route path="/properties/:id" element={<PropertyForm />} /> {/* Corrected path */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
