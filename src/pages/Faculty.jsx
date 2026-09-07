import { Link } from "react-router-dom";

function Faculty() {
  const faculty = [
    {
      id: 1,
      name: "Dr. Anil Sharma",
      employeeId: "FAC001",
      department: "Computer Science",
      designation: "Professor",
    },
    {
      id: 2,
      name: "Ms. Priya Singh",
      employeeId: "FAC002",
      department: "Mathematics",
      designation: "Assistant Professor",
    },
    {
      id: 3,
      name: "Mr. Raj Kumar",
      employeeId: "FAC003",
      department: "Physics",
      designation: "Lecturer",
    },
  ];

  return (
    <div style={styles.container}>

      <div style={styles.header}>
        <div>
          <h1>Faculty Management</h1>
          <p>Manage institute faculty members</p>
        </div>

        <button style={styles.addButton}>
          + Add Faculty
        </button>
      </div>

      <div style={styles.card}>

        <input
          type="text"
          placeholder="Search faculty..."
          style={styles.search}
        />

        <table style={styles.table}>

          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {faculty.map((member) => (

              <tr key={member.id}>

                <td>{member.employeeId}</td>

                <td>{member.name}</td>

                <td>{member.department}</td>

                <td>{member.designation}</td>

                <td>

                  <Link to={`/faculty/profile/${member.id}`}>
                    <button style={styles.viewButton}>
                      Profile
                    </button>
                  </Link>

                  <Link to={`/faculty/subjects/${member.id}`}>
                    <button style={styles.subjectButton}>
                      Subjects
                    </button>
                  </Link>

                  <Link to={`/faculty/attendance/${member.id}`}>
                    <button style={styles.attendanceButton}>
                      Attendance
                    </button>
                  </Link>

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

  card: {
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
    overflowX: "auto",
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
    padding: "7px 10px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "5px",
    marginRight: "5px",
    cursor: "pointer",
  },

  subjectButton: {
    padding: "7px 10px",
    backgroundColor: "#7c3aed",
    color: "white",
    border: "none",
    borderRadius: "5px",
    marginRight: "5px",
    cursor: "pointer",
  },

  attendanceButton: {
    padding: "7px 10px",
    backgroundColor: "#16a34a",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Faculty;
