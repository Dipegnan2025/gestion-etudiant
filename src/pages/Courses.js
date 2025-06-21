// src/pages/Courses.jsx
import React from "react";
import "./Courses.css";

const Courses = () => {
  const courses = ["Mathématiques", "Physique", "Informatique", "Anglais"];
  return (
    <div className="courses-page">
      <h2>Liste des cours</h2>
      <ul>
        {courses.map((course, index) => <li key={index}>{course}</li>)}
      </ul>
    </div>
  );
};

export default Courses;
