import React from "react";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserGraduate,
  FaUserPlus, // 👈 Icône pour "Ajouter un étudiant"
  FaBook,
  FaChalkboardTeacher,
  FaFileAlt,
  FaClipboard,
  FaChartBar,
} from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li><Link to="/"><FaTachometerAlt /> Dashboard</Link></li>
        <li><Link to="/students"><FaUserGraduate /> Étudiants</Link></li>
        <li><Link to="/students/new"><FaUserPlus /> Ajouter un étudiant</Link></li> {/* ✅ Ajout ici */}
        <li><Link to="/courses"><FaBook /> Cours</Link></li>
        <li><Link to="/professors"><FaChalkboardTeacher /> Professeurs</Link></li>
        <li><Link to="/grades"><FaClipboard /> Notes</Link></li>
        <li><Link to="/bulletin"><FaFileAlt /> Bulletin</Link></li>
        <li><Link to="/rapport"><FaChartBar /> Rapport</Link></li>
      </ul>
    </nav>
  );
}

export default Sidebar;
