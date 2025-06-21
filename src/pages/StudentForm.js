// src/pages/StudentForm.jsx
import React, { useState } from "react";
import "./StudentForm.css";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    courses: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Étudiant ajouté :", formData);
    setFormData({ name: "", email: "", courses: "" });
  };

  return (
    <div className="student-form">
      <h2>Ajouter un étudiant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nom" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="courses" placeholder="Cours (séparés par des virgules)" value={formData.courses} onChange={handleChange} required />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default StudentForm;
