import { Link } from "react-router-dom";

function StudentDashboard() {
  return (
    <div style={styles.container}>

      {/* Header */}
      <div style={styles.header}>
        <div>
          <h1>Student Dashboard</h1>
          <p>Welcome back, Student!</p>
        </div>

        <div style={styles.profile}>
          🎓 <strong>Student</strong>
        </div>
      </div>

      {/* Student Information */}
      <div style={styles.studentInfo}>

        <div>
          <span style={styles.label}>Student Name</span>
          <strong>Rahul Kumar</strong>
        </div>

        <div>
          <span style={styles.label}>Roll Number</span>
          <strong>ST001</strong>
        </div>

        <div>
          <span style={styles.label}>Course</span>
          <strong>BCA</strong>
        </div>

        <div>
          <span style={styles.label}>Semester</span>
          <strong>1st Semester</strong>
        </div>

      </div>

      {/* Summary */}
      <div style={styles.summary}>

        <div style={styles.summaryCard}>
          <div style={styles.icon}>📚</div>
          <div>
            <p>My Courses</p>
            <h2>5</h2>
          </div>
        </div>

        <div style={styles.summaryCard}>
          <div style={styles.icon}>✅</div>
          <div>
            <p>Attendance</p>
            <h2>87%</h2>
          </div>
        </div>

        <div style={styles.summaryCard}>
          <div style={styles.icon}>📝</div>
          <div>
            <p>Average Marks</p>
            <h2>82%</h2>
          </div>
        </div>

        <div style={styles.summaryCard}>
          <div style={styles.icon}>📅</div>
          <div>
            <p>Upcoming Exams</p>
            <h2>3</h2>
          </div>
        </div>

      </div>

      {/* Quick Actions */}
      <h2 style={styles.sectionTitle}>
        Quick Actions
      </h2>

      <div style={styles.grid}>

        {/* Profile */}
        <Link
          to="/student-profile"
          style={styles.link}
        >
          <div style={styles.card}>
            <div style={styles.cardIcon}>👤</div>
            <h2>My Profile</h2>
            <p>
              View your personal and academic information.
            </p>

            <button style={styles.blueButton}>
              View Profile
            </button>
          </div>
        </Link>

        {/* Courses */}
        <Link
          to="/student-courses"
          style={styles.link}
        >
          <div style={styles.card}>
            <div style={styles.cardIcon}>📚</div>
            <h2>My Courses</h2>
            <p>
              View your enrolled courses and subjects.
            </p>

            <button style={styles.purpleButton}>
              View Courses
            </button>
          </div>
        </Link>

        {/* Attendance */}
        <Link
          to="/attendance"
          style={styles.link}
        >
          <div style={styles.card}>
            <div style={styles.cardIcon}>✅</div>
            <h2>Attendance</h2>
            <p>
              Check your attendance percentage and reports.
            </p>

            <button style={styles.greenButton}>
              View Attendance
            </button>
          </div>
        </Link>

        {/* Exam Schedule */}
        <Link
          to="/examinations/schedule"
          style={styles.link}
        >
          <div style={styles.card}>
            <div style={styles.cardIcon}>📅</div>
            <h2>Exam Schedule</h2>
            <p>
              View your upcoming examination schedule.
            </p>

            <button style={styles.orangeButton}>
              View Schedule
            </button>
          </div>
        </Link>

        {/* Results */}
        <Link
          to="/examinations/results"
          style={styles.link}
        >
          <div style={styles.card}>
            <div style={styles.cardIcon}>📊</div>
            <h2>My Results</h2>
            <p>
              View your examination marks and grades.
            </p>

            <button style={styles.redButton}>
              View Results
            </button>
          </div>
        </Link>

        {/* Announcements */}
        <Link
          to="/announcements"
          style={styles.link}
        >
          <div style={styles.card}>
            <div style={styles.cardIcon}>📢</div>
            <h2>Announcements</h2>
            <p>
              View notices, events and important updates.
            </p>

            <button style={styles.tealButton}>
              View Announcements
            </button>
          </div>
        </Link>

      </div>

      {/* Upcoming Exams */}
      <h2 style={styles.sectionTitle}>
        Upcoming Exams
      </h2>

      <div style={styles.tableCard}>

        <table style={styles.table}>

          <thead>
            <tr>
              <th>Date</th>
              <th>Subject</th>
              <th>Code</th>
              <th>Time</th>
              <th>Room</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>15 Sep 2026</td>
              <td>Programming Fundamentals</td>
              <td>BCA101</td>
              <td>10:00 AM</td>
              <td>Room 101</td>
            </tr>

            <tr>
              <td>18 Sep 2026</td>
              <td>Mathematics</td>
              <td>BCA102</td>
              <td>10:00 AM</td>
              <td>Room 102</td>
            </tr>

            <tr>
              <td>22 Sep 2026</td>
              <td>Database Management</td>
              <td>BCA201</td>
              <td>02:00 PM</td>
              <td>Room 201</td>
            </tr>

          </tbody>

        </table>

      </div>

      {/* Recent Announcements */}
      <h2 style={styles.sectionTitle}>
        Recent Announcements
      </h2>

      <div style={styles.announcements}>

        <div style={styles.announcement}>
          <span style={styles.announcementIcon}>
            📢
          </span>

          <div>
            <h3>Mid-Term Examination Notice</h3>
            <p>
              Mid-term examinations will begin from
              15 September 2026.
            </p>
            <small>07 September 2026</small>
          </div>
        </div>

        <div style={styles.announcement}>
          <span style={styles.announcementIcon}>
            📅
          </span>

          <div>
            <h3>Annual Sports Day</h3>
            <p>
              Annual Sports Day will be conducted on
              20 September 2026.
            </p>
            <small>05 September 2026</small>
          </div>
        </div>

        <div style={styles.announcement}>
          <span style={styles.announcementIcon}>
            📚
          </span>

          <div>
            <h3>Library Timing Update</h3>
            <p>
              Library will remain open from 8:00 AM
              to 7:00 PM.
            </p>
            <small>02 September 2026</small>
          </div>
        </div>

      </div>

    </div>
  );
}

const styles = {

  container: {
    minHeight: "100vh",
    padding: "30px",
    backgroundColor: "#f1f5f9",
    fontFamily: "Arial, sans-serif",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "25px",
  },

  profile: {
    backgroundColor: "white",
    padding: "12px 18px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },

  studentInfo: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "25px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
  },

  label: {
    display: "block",
    color: "#64748b",
    fontSize: "13px",
    marginBottom: "6px",
  },

  summary: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },

  summaryCard: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    gap: "15px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
  },

  icon: {
    fontSize: "35px",
  },

  sectionTitle: {
    marginTop: "35px",
    marginBottom: "20px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },

  link: {
    textDecoration: "none",
    color: "inherit",
  },

  card: {
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
  },

  cardIcon: {
    fontSize: "40px",
  },

  blueButton: {
    padding: "10px 15px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
  },

  purpleButton: {
    padding: "10px 15px",
    backgroundColor: "#7c3aed",
    color: "white",
    border: "none",
    borderRadius: "6px",
  },

  greenButton: {
    padding: "10px 15px",
    backgroundColor: "#16a34a",
    color: "white",
    border: "none",
    borderRadius: "6px",
  },

  orangeButton: {
    padding: "10px 15px",
    backgroundColor: "#ea580c",
    color: "white",
    border: "none",
    borderRadius: "6px",
  },

  redButton: {
    padding: "10px 15px",
    backgroundColor: "#dc2626",
    color: "white",
    border: "none",
    borderRadius: "6px",
  },

  tealButton: {
    padding: "10px 15px",
    backgroundColor: "#0f766e",
    color: "white",
    border: "none",
    borderRadius: "6px",
  },

  tableCard: {
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
    overflowX: "auto",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  announcements: {
    display: "grid",
    gap: "15px",
  },

  announcement: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    display: "flex",
    gap: "15px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
  },

  announcementIcon: {
    fontSize: "30px",
  },
};

export default StudentDashboard;
