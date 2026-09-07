import { Link } from "react-router-dom";

function Attendance() {
  const students = [
    {
      id: 1,
      rollNo: "ST001",
      name: "Rahul Kumar",
      course: "BCA",
      present: 45,
      total: 50,
    },
    {
      id: 2,
      rollNo: "ST002",
      name: "Priya Sharma",
      course: "BSc Computer Science",
      present: 47,
      total: 50,
    },
    {
      id: 3,
      rollNo: "ST003",
      name: "Arun Kumar",
      course: "BBA",
      present: 40,
      total: 50,
    },
    {
      id: 4,
      rollNo: "ST004",
      name: "Sneha Patel",
      course: "BCA",
      present: 49,
      total: 50,
    },
  ];

  return (
    <div style={styles.container}>

      <div style={styles.header}>
        <div>
          <h1>Attendance</h1>
          <p>Student attendance management</p>
        </div>

        <Link to="/attendance/mark">
          <button style={styles.markButton}>
            + Mark Attendance
          </button>
        </Link>
      </div>

      {/* Summary Cards */}

      <div style={styles.cards}>

        <div style={styles.card}>
          <h3>Total Students</h3>
          <h2>500</h2>
        </div>

        <div style={styles.card}>
          <h3>Average Attendance</h3>
          <h2 style={{ color: "#2563eb" }}>92%</h2>
        </div>

        <div style={styles.card}>
          <h3>Present Today</h3>
          <h2 style={{ color: "#16a34a" }}>465</h2>
        </div>

        <div style={styles.card}>
          <h3>Absent Today</h3>
          <h2 style={{ color: "#dc2626" }}>35</h2>
        </div>

      </div>

      {/* Student Attendance */}

      <div style={styles.tableCard}>

        <div style={styles.tableHeader}>
          <h2>Student Attendance</h2>

          <Link to="/attendance/report">
            <button style={styles.reportButton}>
              Monthly Reports
            </button>
          </Link>
        </div>

        <table style={styles.table}>

          <thead>
            <tr>
              <th>Roll No</th>
              <th>Student</th>
              <th>Course</th>
              <th>Present</th>
              <th>Total Classes</th>
              <th>Percentage</th>
            </tr>
          </thead>

          <tbody>

            {students.map((student) => {

              const percentage =
                ((student.present / student.total) * 100).toFixed(1);

              return (
                <tr key={student.id}>

                  <td>{student.rollNo}</td>

                  <td>{student.name}</td>

                  <td>{student.course}</td>

                  <td>{student.present}</td>

                  <td>{student.total}</td>

                  <td>

                    <span
                      style={{
                        ...styles.percentage,
                        backgroundColor:
                          percentage >= 75
                            ? "#dcfce7"
                            : "#fee2e2",
                        color:
                          percentage >= 75
                            ? "#166534"
                            : "#991b1b",
                      }}
                    >
                      {percentage}%
                    </span>

                  </td>

                </tr>
              );
            })}

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
    marginBottom: "25px",
  },

  cards: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "25px",
  },

  card: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow:
      "0 3px 10px rgba(0,0,0,0.08)",
  },

  tableCard: {
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "10px",
    boxShadow:
      "0 3px 10px rgba(0,0,0,0.08)",
    overflowX: "auto",
  },

  tableHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  percentage: {
    padding: "6px 10px",
    borderRadius: "5px",
    fontWeight: "bold",
  },

  markButton: {
    padding: "12px 18px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  reportButton: {
    padding: "10px 15px",
    backgroundColor: "#7c3aed",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Attendance;
