// src/pages/Students.jsx
import React from "react";
import StudentCard from "../components/StudentCard";
import "./Students.css";

const sampleStudents = [
  { id: 1, name: "Alice Dupont", email: "alice@example.com", courses: ["Math", "Physique"] },
  { id: 2, name: "Marc Bernard", email: "marc@example.com", courses: ["Histoire", "Anglais"] }
];

const Students = () => {
  return (
    <div className="students-page">
      <h2>Liste des étudiants</h2>
      {sampleStudents.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
};

export default Students;
