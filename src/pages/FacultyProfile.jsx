import { Link, useParams } from "react-router-dom";

function FacultyProfile() {
  const { id } = useParams();

  return (
    <div style={styles.container}>

      <div style={styles.card}>

        <div style={styles.profileHeader}>
          <div style={styles.avatar}>
            AS
          </div>

          <div>
            <h1>Dr. Anil Sharma</h1>
            <p>Professor - Computer Science</p>
          </div>
        </div>

        <hr />

        <h2>Faculty Information</h2>

        <div style={styles.infoGrid}>

          <p>
            <strong>Employee ID:</strong>
            <br />
            FAC00{id}
          </p>

          <p>
            <strong>Department:</strong>
            <br />
            Computer Science
          </p>

          <p>
            <strong>Designation:</strong>
            <br />
            Professor
          </p>

          <p>
            <strong>Email:</strong>
            <br />
            anil@example.com
          </p>

          <p>
            <strong>Phone:</strong>
            <br />
            9876543210
          </p>

          <p>
            <strong>Experience:</strong>
            <br />
            10 Years
          </p>

        </div>

        <div style={styles.actions}>

          <Link to={`/faculty/subjects/${id}`}>
            <button style={styles.subjectButton}>
              Assigned Subjects
            </button>
          </Link>

          <Link to={`/faculty/attendance/${id}`}>
            <button style={styles.attendanceButton}>
              Attendance
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
}

const styles = {

  container: {
    minHeight: "100vh",
    padding: "40px",
    backgroundColor: "#f1f5f9",
  },

  card: {
    maxWidth: "800px",
    margin: "auto",
    padding: "30px",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
  },

  profileHeader: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },

  avatar: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    backgroundColor: "#2563eb",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    fontWeight: "bold",
  },

  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
  },

  actions: {
    marginTop: "25px",
    display: "flex",
    gap: "10px",
  },

  subjectButton: {
    padding: "12px 18px",
    backgroundColor: "#7c3aed",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  attendanceButton: {
    padding: "12px 18px",
    backgroundColor: "#16a34a",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default FacultyProfile;
