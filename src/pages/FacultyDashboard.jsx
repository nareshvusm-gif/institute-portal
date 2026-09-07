import { Link } from "react-router-dom";

function FacultyDashboard() {
  return (
    <div style={styles.container}>

      {/* Header */}
      <div style={styles.header}>
        <div>
          <h1>Faculty Dashboard</h1>
          <p>Welcome, Faculty</p>
        </div>

        <div style={styles.profile}>
          👨‍🏫 <strong>Faculty</strong>
        </div>
      </div>

      {/* Summary Cards */}
      <div style={styles.summary}>

        <div style={styles.summaryCard}>
          <div style={styles.icon}>📚</div>
          <div>
            <p>My Subjects</p>
            <h2>4</h2>
          </div>
        </div>

        <div style={styles.summaryCard}>
          <div style={styles.icon}>🎓</div>
          <div>
            <p>Total Students</p>
            <h2>120</h2>
          </div>
        </div>

        <div style={styles.summaryCard}>
          <div style={styles.icon}>✅</div>
          <div>
            <p>Today's Attendance</p>
            <h2>92%</h2>
          </div>
        </div>

        <div style={styles.summaryCard}>
          <div style={styles.icon}>📝</div>
          <div>
            <p>Pending Marks</p>
            <h2>8</h2>
          </div>
        </div>

      </div>

      {/* Quick Actions */}
      <h2 style={styles.sectionTitle}>
        Quick Actions
      </h2>

      <div style={styles.grid}>

        <Link
          to="/attendance/mark"
          style={styles.link}
        >
          <div style={styles.card}>
            <div style={styles.cardIcon}>✅</div>
            <h2>Mark Attendance</h2>
            <p>
              Mark today's attendance for your students.
            </p>
            <button style={styles.greenButton}>
              Mark Attendance
            </button>
          </div>
        </Link>

        <Link
          to="/examinations/marks"
          style={styles.link}
        >
          <div style={styles.card}>
            <div style={styles.cardIcon}>📝</div>
            <h2>Marks Entry</h2>
            <p>
              Enter and update examination marks.
            </p>
            <button style={styles.blueButton}>
              Enter Marks
            </button>
          </div>
        </Link>

        <Link
          to="/faculty"
          style={styles.link}
        >
          <div style={styles.card}>
            <div style={styles.cardIcon}>📚</div>
            <h2>My Subjects</h2>
            <p>
              View your assigned subjects and courses.
            </p>
            <button style={styles.purpleButton}>
              View Subjects
            </button>
          </div>
        </Link>

        <Link
          to="/examinations/schedule"
          style={styles.link}
        >
          <div style={styles.card}>
            <div style={styles.cardIcon}>📅</div>
            <h2>Exam Schedule</h2>
            <p>
              View upcoming examination schedules.
            </p>
            <button style={styles.orangeButton}>
              View Schedule
            </button>
          </div>
        </Link>

        <Link
          to="/announcements"
          style={styles.link}
        >
          <div style={styles.card}>
            <div style={styles.cardIcon}>📢</div>
            <h2>Announcements</h2>
            <p>
              View institute notices and important updates.
            </p>
            <button style={styles.redButton}>
              View Announcements
            </button>
          </div>
        </Link>

      </div>

      {/* Today's Classes */}
      <h2 style={styles.sectionTitle}>
        Today's Classes
      </h2>

      <div style={styles.tableCard}>

        <table style={styles.table}>

          <thead>
            <tr>
              <th>Time</th>
              <th>Subject</th>
              <th>Course</th>
              <th>Room</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>09:00 AM - 10:00 AM</td>
              <td>Programming Fundamentals</td>
              <td>BCA</td>
              <td>Room 101</td>
              <td>
                <span style={styles.completed}>
                  Completed
                </span>
              </td>
            </tr>

            <tr>
              <td>11:00 AM - 12:00 PM</td>
              <td>Database Management</td>
              <td>BCA</td>
              <td>Room 201</td>
              <td>
                <span style={styles.upcoming}>
                  Upcoming
                </span>
              </td>
            </tr>

            <tr>
              <td>02:00 PM - 03:00 PM</td>
              <td>Web Development</td>
              <td>BSc CS</td>
              <td>Computer Lab</td>
              <td>
                <span style={styles.upcoming}>
                  Upcoming
                </span>
              </td>
            </tr>

          </tbody>

        </table>

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
    marginBottom: "30px",
  },

  profile: {
    backgroundColor: "white",
    padding: "12px 18px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },

  summary: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "35px",
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
    marginTop: "30px",
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

  greenButton: {
    padding: "10px 15px",
    backgroundColor: "#16a34a",
    color: "white",
    border: "none",
    borderRadius: "6px",
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

  completed: {
    backgroundColor: "#dcfce7",
    color: "#166534",
    padding: "6px 10px",
    borderRadius: "5px",
  },

  upcoming: {
    backgroundColor: "#dbeafe",
    color: "#1d4ed8",
    padding: "6px 10px",
    borderRadius: "5px",
  },
};

export default FacultyDashboard;
