import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div style={styles.container}>
      <h1>Institute Portal</h1>
      <p style={styles.welcome}>Welcome to the Admin Dashboard</p>

      {/* Summary Cards */}
      <div style={styles.cards}>
        <div style={styles.card}>
          <h3>Total Students</h3>
          <h2>500</h2>
          <Link to="/students">View Students</Link>
        </div>

        <div style={styles.card}>
          <h3>Total Faculty</h3>
          <h2>50</h2>
          <Link to="/faculty">View Faculty</Link>
        </div>

        <div style={styles.card}>
          <h3>Total Courses</h3>
          <h2>20</h2>
          <Link to="/courses">View Courses</Link>
        </div>

        <div style={styles.card}>
          <h3>Attendance</h3>
          <h2>92%</h2>
          <Link to="/attendance">View Attendance</Link>
        </div>
      </div>

      {/* Dashboard Sections */}
      <div style={styles.sections}>

        {/* Attendance */}
        <div style={styles.section}>
          <h2>Attendance</h2>

          <div style={styles.attendanceRow}>
            <span>Present</span>
            <strong style={{ color: "#16a34a" }}>92%</strong>
          </div>

          <div style={styles.attendanceRow}>
            <span>Absent</span>
            <strong style={{ color: "#dc2626" }}>8%</strong>
          </div>

          <div style={styles.progressBackground}>
            <div style={styles.progress}></div>
          </div>

          <Link to="/attendance">
            <button style={styles.button}>View Attendance</button>
          </Link>
        </div>

        {/* Upcoming Exams */}
        <div style={styles.section}>
          <h2>Upcoming Exams</h2>

          <div style={styles.exam}>
            <strong>Mathematics</strong>
            <p>September 15, 2026</p>
          </div>

          <div style={styles.exam}>
            <strong>Computer Science</strong>
            <p>September 18, 2026</p>
          </div>

          <div style={styles.exam}>
            <strong>Physics</strong>
            <p>September 22, 2026</p>
          </div>

          <Link to="/examinations">
            <button style={styles.button}>View All Exams</button>
          </Link>
        </div>

        {/* Recent Announcements */}
        <div style={styles.section}>
          <h2>Recent Announcements</h2>

          <div style={styles.announcement}>
            <strong>📢 Semester Examination</strong>
            <p>Semester exams will begin from September 15.</p>
          </div>

          <div style={styles.announcement}>
            <strong>📢 Holiday Notice</strong>
            <p>The institute will remain closed on September 25.</p>
          </div>

          <div style={styles.announcement}>
            <strong>📢 Staff Meeting</strong>
            <p>Faculty meeting scheduled for September 10.</p>
          </div>
    
          <Link  to="/announcements">
            <button style={styles.button}>View Announcements</button>
          </Link>
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

  welcome: {
    color: "#64748b",
    marginBottom: "30px",
  },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "30px",
  },

  card: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
  },

  sections: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },

  section: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
  },

  attendanceRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },

  progressBackground: {
    width: "100%",
    height: "10px",
    backgroundColor: "#e5e7eb",
    borderRadius: "10px",
    marginBottom: "20px",
  },

  progress: {
    width: "92%",
    height: "10px",
    backgroundColor: "#16a34a",
    borderRadius: "10px",
  },

  exam: {
    padding: "12px",
    marginBottom: "10px",
    backgroundColor: "#eff6ff",
    borderRadius: "6px",
  },

  announcement: {
    padding: "12px",
    marginBottom: "10px",
    backgroundColor: "#f8fafc",
    borderLeft: "4px solid #2563eb",
  },

  button: {
    padding: "10px 15px",
    marginTop: "10px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Dashboard;