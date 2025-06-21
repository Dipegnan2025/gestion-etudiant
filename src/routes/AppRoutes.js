import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Students from "../pages/Students";
import StudentForm from "../pages/StudentForm";
import Courses from "../pages/Courses";
import Professors from "../pages/Professors";
import Grades from "../pages/Grades";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/students" element={<Students />} />
      <Route path="/students/new" element={<StudentForm />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/professors" element={<Professors />} />
      <Route path="/grades" element={<Grades />} />
    </Routes>
  );
}
