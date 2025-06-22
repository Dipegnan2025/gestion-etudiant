// src/components/Rapport/Rapport.jsx
import React from "react";
import styles from "./Rapport.module.css";

const Rapport = () => {
  const stats = {
    totalStudents: 120,
    totalCourses: 8,
    averageGrade: 14.3,
    highestGrade: 19,
    lowestGrade: 7,
  };

  return (
    <div className={styles.container}>
      <h2>Rapport général</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>Étudiants inscrits</h3>
          <p>{stats.totalStudents}</p>
        </div>
        <div className={styles.card}>
          <h3>Cours disponibles</h3>
          <p>{stats.totalCourses}</p>
        </div>
        <div className={styles.card}>
          <h3>Moyenne générale</h3>
          <p>{stats.averageGrade.toFixed(2)}</p>
        </div>
        <div className={styles.card}>
          <h3>Meilleure note</h3>
          <p>{stats.highestGrade}</p>
        </div>
        <div className={styles.card}>
          <h3>Plus basse note</h3>
          <p>{stats.lowestGrade}</p>
        </div>
      </div>
    </div>
  );
};

export default Rapport;
