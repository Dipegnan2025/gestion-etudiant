// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUserGraduate,
  FaUserPlus,
  FaBook,
  FaChalkboardTeacher,
  FaClipboardList
} from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <Link to="/"><FaHome className="icon" /> Dashboard</Link>
        </li>
        <li>
          <Link to="/students"><FaUserGraduate className="icon" /> Étudiants</Link>
        </li>
        <li>
          <Link to="/students/new"><FaUserPlus className="icon" /> Ajouter un étudiant</Link>
        </li>
        <li>
          <Link to="/courses"><FaBook className="icon" /> Cours</Link>
        </li>
        <li>
          <Link to="/professors"><FaChalkboardTeacher className="icon" /> Professeurs</Link>
        </li>
        <li>
          <Link to="/grades"><FaClipboardList className="icon" /> Notes</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
