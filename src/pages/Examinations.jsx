import { Link } from "react-router-dom";

function Examinations() {
  return (
    <div style={styles.container}>

      <div style={styles.header}>
        <div>
          <h1>Examinations</h1>
          <p>Manage exams, marks and student results</p>
        </div>
      </div>

      <div style={styles.cards}>

        <Link
          to="/examinations/schedule"
          style={styles.link}
        >
          <div style={styles.card}>
            <div style={styles.icon}>📅</div>
            <h2>Exam Schedule</h2>
            <p>
              View upcoming and completed examinations.
            </p>
            <button style={styles.blueButton}>
              View Schedule
            </button>
          </div>
        </Link>

        <Link
          to="/examinations/marks"
          style={styles.link}
        >
          <div style={styles.card}>
            <div style={styles.icon}>📝</div>
            <h2>Marks Entry</h2>
            <p>
              Enter and update student examination marks.
            </p>
            <button style={styles.greenButton}>
              Enter Marks
            </button>
          </div>
        </Link>

        <Link
          to="/examinations/results"
          style={styles.link}
        >
          <div style={styles.card}>
            <div style={styles.icon}>📊</div>
            <h2>Results</h2>
            <p>
              View student results and grades.
            </p>
            <button style={styles.purpleButton}>
              View Results
            </button>
          </div>
        </Link>

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
    marginBottom: "30px",
  },

  cards: {
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

  blueButton: {
    padding: "10px 16px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  greenButton: {
    padding: "10px 16px",
    backgroundColor: "#16a34a",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  purpleButton: {
    padding: "10px 16px",
    backgroundColor: "#7c3aed",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Examinations;
