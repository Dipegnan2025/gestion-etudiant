// src/pages/Professors.jsx
import React from "react";
import "./Professors.css";

const professors = [
  { name: "Mme Durand", subject: "Mathématiques" },
  { name: "M. Martin", subject: "Histoire" },
  { name: "Mme Leclerc", subject: "Anglais" }
];

const Professors = () => {
  return (
    <div className="professors-page">
      <h2>Liste des professeurs</h2>
      <ul>
        {professors.map((prof, idx) => (
          <li key={idx}>{prof.name} — {prof.subject}</li>
        ))}
      </ul>
    </div>
  );
};

export default Professors;
