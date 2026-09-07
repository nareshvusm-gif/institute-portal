import { Link } from "react-router-dom";

function Announcements() {
  return (
    <div style={styles.container}>

      <div style={styles.header}>
        <div>
          <h1>Announcements</h1>
          <p>
            Manage institute notices, events and important updates
          </p>
        </div>

        <button style={styles.addButton}>
          + New Announcement
        </button>
      </div>

      <div style={styles.grid}>

        <Link
          to="/announcements/notices"
          style={styles.link}
        >
          <div style={styles.card}>
            <div style={styles.icon}>📢</div>

            <h2>Notices</h2>

            <p>
              View and manage important institute notices.
            </p>

            <button style={styles.blueButton}>
              View Notices
            </button>
          </div>
        </Link>

        <Link
          to="/announcements/events"
          style={styles.link}
        >
          <div style={styles.card}>
            <div style={styles.icon}>📅</div>

            <h2>Events</h2>

            <p>
              View upcoming institute events and activities.
            </p>

            <button style={styles.greenButton}>
              View Events
            </button>
          </div>
        </Link>

        <div style={styles.card}>
          <div style={styles.icon}>⚠️</div>

          <h2>Important Updates</h2>

          <p>
            Important information and announcements for students
            and faculty.
          </p>

          <button style={styles.orangeButton}>
            View Updates
          </button>
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
    marginBottom: "30px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
  },

  link: {
    textDecoration: "none",
    color: "inherit",
  },

  card: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow:
      "0 3px 10px rgba(0,0,0,0.08)",
  },

  icon: {
    fontSize: "40px",
  },

  addButton: {
    padding: "12px 18px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  blueButton: {
    padding: "10px 16px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
  },

  greenButton: {
    padding: "10px 16px",
    backgroundColor: "#16a34a",
    color: "white",
    border: "none",
    borderRadius: "6px",
  },

  orangeButton: {
    padding: "10px 16px",
    backgroundColor: "#ea580c",
    color: "white",
    border: "none",
    borderRadius: "6px",
  },
};

export default Announcements;
