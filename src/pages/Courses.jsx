import { Link } from "react-router-dom";

function Courses() {
  const courses = [
    {
      id: 1,
      code: "BCA",
      name: "Bachelor of Computer Applications",
      duration: "3 Years",
      department: "Computer Science",
      students: 150,
    },
    {
      id: 2,
      code: "BSC-CS",
      name: "BSc Computer Science",
      duration: "3 Years",
      department: "Computer Science",
      students: 120,
    },
    {
      id: 3,
      code: "BBA",
      name: "Bachelor of Business Administration",
      duration: "3 Years",
      department: "Management",
      students: 100,
    },
    {
      id: 4,
      code: "BCOM",
      name: "Bachelor of Commerce",
      duration: "3 Years",
      department: "Commerce",
      students: 130,
    },
  ];

  return (
    <div style={styles.container}>

      <div style={styles.header}>
        <div>
          <h1>Courses</h1>
          <p>Manage institute courses</p>
        </div>

        <button style={styles.addButton}>
          + Add Course
        </button>
      </div>

      <div style={styles.cards}>

        <div style={styles.summaryCard}>
          <h3>Total Courses</h3>
          <h2>4</h2>
        </div>

        <div style={styles.summaryCard}>
          <h3>Total Students</h3>
          <h2>500</h2>
        </div>

        <div style={styles.summaryCard}>
          <h3>Departments</h3>
          <h2>3</h2>
        </div>

      </div>

      <div style={styles.card}>

        <input
          type="text"
          placeholder="Search course..."
          style={styles.search}
        />

        <table style={styles.table}>

          <thead>
            <tr>
              <th>Code</th>
              <th>Course Name</th>
              <th>Department</th>
              <th>Duration</th>
              <th>Students</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {courses.map((course) => (

              <tr key={course.id}>

                <td>
                  <strong>{course.code}</strong>
                </td>

                <td>{course.name}</td>

                <td>{course.department}</td>

                <td>{course.duration}</td>

                <td>{course.students}</td>

                <td>

                  <Link to={`/courses/details/${course.id}`}>
                    <button style={styles.detailsButton}>
                      Details
                    </button>
                  </Link>

                  <Link to={`/courses/subjects/${course.id}`}>
                    <button style={styles.subjectButton}>
                      Subjects
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

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "25px",
  },

  summaryCard: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
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

  detailsButton: {
    padding: "7px 12px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "5px",
    marginRight: "5px",
    cursor: "pointer",
  },

  subjectButton: {
    padding: "7px 12px",
    backgroundColor: "#7c3aed",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Courses;
