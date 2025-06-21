// src/App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Navbar />
        <div className="main-layout">
          <Sidebar />
          <main className="main-content">
            <AppRoutes />
    
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
