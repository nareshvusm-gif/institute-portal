import { Link } from "react-router-dom";

function Students() {

  const students = [
    {
      id: 1,
      name: "Rahul Kumar",
      rollNo: "ST001",
      course: "BCA",
      year: "1st Year",
    },
    {
      id: 2,
      name: "Priya Sharma",
      rollNo: "ST002",
      course: "BSc Computer Science",
      year: "2nd Year",
    },
    {
      id: 3,
      name: "Arun Kumar",
      rollNo: "ST003",
      course: "BBA",
      year: "3rd Year",
    },
  ];

  return (
    <div style={styles.container}>

      <div style={styles.header}>
        <div>
          <h1>Student Management</h1>
          <p>Manage institute students</p>
        </div>

        <Link to="/students/add">
          <button style={styles.addButton}>
            + Add Student
          </button>
        </Link>
      </div>

      <div style={styles.card}>

        <input
          type="text"
          placeholder="Search student..."
          style={styles.search}
        />

        <table style={styles.table}>

          <thead>
            <tr>
              <th>Roll No</th>
              <th>Name</th>
              <th>Course</th>
              <th>Year</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {students.map((student) => (

              <tr key={student.id}>

                <td>{student.rollNo}</td>

                <td>{student.name}</td>

                <td>{student.course}</td>

                <td>{student.year}</td>

                <td>

                  <Link to={`/students/profile/${student.id}`}>
                    <button style={styles.viewButton}>
                      View
                    </button>
                  </Link>

                  <button style={styles.editButton}>
                    Edit
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

const styles = {

  container: {
    padding: "30px",
    backgroundColor: "#f1f5f9",
    minHeight: "100vh",
    fontFamily: "Arial",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "25px",
  },

  card: {
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
  },

  search: {
    width: "300px",
    padding: "12px",
    marginBottom: "20px",
    border: "1px solid #ddd",
    borderRadius: "6px",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  addButton: {
    padding: "12px 18px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  viewButton: {
    padding: "7px 12px",
    backgroundColor: "#16a34a",
    color: "white",
    border: "none",
    borderRadius: "5px",
    marginRight: "5px",
    cursor: "pointer",
  },

  editButton: {
    padding: "7px 12px",
    backgroundColor: "#f59e0b",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Students;