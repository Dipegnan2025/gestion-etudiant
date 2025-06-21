// src/pages/Grades.jsx
import React from "react";
import "./Grades.css";

const gradesData = [
  { student: "Alice Dupont", course: "Math", grade: 15.5 },
  { student: "Marc Bernard", course: "Anglais", grade: 13 }
];

const Grades = () => {
  return (
    <div className="grades-page">
      <h2>Notes des étudiants</h2>
      <table>
        <thead>
          <tr>
            <th>Étudiant</th>
            <th>Cours</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {gradesData.map((entry, i) => (
            <tr key={i}>
              <td>{entry.student}</td>
              <td>{entry.course}</td>
              <td>{entry.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Grades;
