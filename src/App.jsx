import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import StudentProfile from "./pages/StudentProfile";
import Results from "./pages/Results";

import Faculty from "./pages/Faculty";
import Courses from "./pages/Courses";
import Attendance from "./pages/Attendance";
import Exams from "./pages/Exams";
import FacultyProfile from "./pages/FacultyProfile";
import FacultySubjects from "./pages/FacultySubjects";
import FacultyAttendance from "./pages/FacultyAttendance";
import CourseDetails from "./pages/CourseDetails";
import CourseSubjects from "./pages/CourseSubjects";
import MarkAttendance from "./pages/MarkAttendance";
import AttendanceReport from "./pages/AttendanceReport";
import Examinations from "./pages/Examinations";
import ExamSchedule from "./pages/ExamSchedule";
import MarksEntry from "./pages/MarksEntry";
import ExamResults from "./pages/ExamResults";
import Announcements from "./pages/Announcements";
import Notices from "./pages/Notices";
import Events from "./pages/Events";
import FacultyDashboard from "./pages/FacultyDashboard";
import StudentDashboard from "./pages/StudentDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/student/:id" element={<StudentProfile />} />
        <Route path="/results" element={<Results />} />
        <Route path="/faculty/:id" element={<FacultyProfile />} />
        <Route path="/faculty/:id/subjects" element={<FacultySubjects />} />
        <Route path="/faculty/:id/attendance" element={<FacultyAttendance />} />  
      <Route path="/courses/:id" element={<CourseDetails />} />
      <Route path="/courses/:id/subjects" element={<CourseSubjects />} />
      <Route path="/mark-attendance" element={<MarkAttendance />} />
      <Route path="/attendance-report" element={<AttendanceReport />} />
      <Route path="/examinations" element={<Examinations />} />
      <Route path="/exam-schedule" element={<ExamSchedule />} />
      <Route path="/marks-entry" element={<MarksEntry />} />
      <Route path="/exam-results" element={<ExamResults />} />
      <Route path="/announcements" element={<Announcements />} />
      <Route path="/notices" element={<Notices />} />
      <Route path="/events" element={<Events />} />
      <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
      <Route path="/student-dashboard" element={<StudentDashboard />} />

      </Routes>
    </BrowserRouter>
  );
}
export default App;
