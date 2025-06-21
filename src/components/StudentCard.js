// src/components/StudentCard.jsx
import React from "react";
import "./StudentCard.css";

const StudentCard = ({ student }) => {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p>Email : {student.email}</p>
      <p>Cours : {student.courses.join(", ")}</p>
    </div>
  );
};

export default StudentCard;
