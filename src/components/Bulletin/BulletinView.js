// src/components/Bulletin/BulletinView.jsx
import React from "react";
import "./BulletinView.css";

const BulletinView = () => {
  // ➤ Exemple de données fictives
  const student = {
    name: "Fatou Diop",
    class: "Terminale S2",
    notes: [
      { subject: "Mathématiques", grade: 16 },
      { subject: "Physique", grade: 14 },
      { subject: "Français", grade: 12 },
      { subject: "Histoire", grade: 13 },
    ],
  };

  const average =
    student.notes.reduce((acc, item) => acc + item.grade, 0) /
    student.notes.length;

  return (
    <div className="bulletin-container">
      <h2>Bulletin de notes</h2>
      <p><strong>Nom :</strong> {student.name}</p>
      <p><strong>Classe :</strong> {student.class}</p>
      <table className="bulletin-table">
        <thead>
          <tr>
            <th>Matière</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {student.notes.map((item, index) => (
            <tr key={index}>
              <td>{item.subject}</td>
              <td>{item.grade}</td>
            </tr>
          ))}
          <tr className="average-row">
            <td><strong>Moyenne</strong></td>
            <td><strong>{average.toFixed(2)}</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BulletinView;
