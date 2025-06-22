// src/App.jsx
import React from "react";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useAuth } from "./context/AuthContext";
import "./App.css";

function App() {
  const { user } = useAuth();

  return (
    <div className="app-layout">
      {/* N'affiche Navbar et Sidebar que si connecté */}
      {user && <Navbar />}
      <div className="main-layout">
        {user && <Sidebar />}
        <main className="main-content">
          <AppRoutes />
        </main>
      </div>
    </div>
  );
}

export default App;
