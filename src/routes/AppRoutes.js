// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Students from "../pages/Students";
import StudentForm from "../pages/StudentForm";
import Courses from "../pages/Courses";
import Professors from "../pages/Professors";
import Grades from "../pages/Grades";
import Bulletin from "../components/Bulletin/BulletinView";
import Rapport from "../components/Rapport/Rapport"; // <-- Import Rapport
import Login from "../components/Auth/Login";
import PrivateRoute from "./PrivateRoute";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public route */}
      <Route path="/login" element={<Login />} />

      {/* Private routes */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/students"
        element={
          <PrivateRoute>
            <Students />
          </PrivateRoute>
        }
      />
      <Route
        path="/students/new"
        element={
          <PrivateRoute>
            <StudentForm />
          </PrivateRoute>
        }
      />
      <Route
        path="/courses"
        element={
          <PrivateRoute>
            <Courses />
          </PrivateRoute>
        }
      />
      <Route
        path="/professors"
        element={
          <PrivateRoute>
            <Professors />
          </PrivateRoute>
        }
      />
      <Route
        path="/grades"
        element={
          <PrivateRoute>
            <Grades />
          </PrivateRoute>
        }
      />
      <Route
        path="/bulletin"
        element={
          <PrivateRoute>
            <Bulletin />
          </PrivateRoute>
        }
      />
      <Route
        path="/rapport"
        element={
          <PrivateRoute>
            <Rapport />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
