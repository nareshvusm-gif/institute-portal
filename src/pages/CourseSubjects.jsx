import { Link, useParams } from "react-router-dom";

function CourseSubjects() {
  const { id } = useParams();

  const subjects = [
    {
      code: "BCA101",
      name: "Programming Fundamentals",
      semester: "1st Semester",
      credits: 4,
      faculty: "Dr. Anil Sharma",
    },
    {
      code: "BCA102",
      name: "Mathematics",
      semester: "1st Semester",
      credits: 4,
      faculty: "Ms. Priya Singh",
    },
    {
      code: "BCA201",
      name: "Database Management",
      semester: "2nd Semester",
      credits: 4,
      faculty: "Dr. Anil Sharma",
    },
    {
      code: "BCA202",
      name: "Web Development",
      semester: "2nd Semester",
      credits: 3,
      faculty: "Mr. Raj Kumar",
    },
    {
      code: "BCA301",
      name: "Data Structures",
      semester: "3rd Semester",
      credits: 4,
      faculty: "Dr. Anil Sharma",
    },
  ];

  return (
    <div style={styles.container}>

      <div style={styles.header}>
        <div>
          <h1>Course Subjects</h1>
          <p>
            BCA - Bachelor of Computer Applications
          </p>
        </div>

        <Link to={`/courses/details/${id}`}>
          <button style={styles.backButton}>
            Course Details
          </button>
        </Link>
      </div>

      <div style={styles.card}>

        <h2>Subjects</h2>

        <table style={styles.table}>

          <thead>
            <tr>
              <th>Subject Code</th>
              <th>Subject Name</th>
              <th>Semester</th>
              <th>Credits</th>
              <th>Faculty</th>
            </tr>
          </thead>

          <tbody>

            {subjects.map((subject) => (

              <tr key={subject.code}>

                <td>
                  <strong>{subject.code}</strong>
                </td>

                <td>{subject.name}</td>

                <td>{subject.semester}</td>

                <td>{subject.credits}</td>

                <td>{subject.faculty}</td>

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
    overflowX: "auto",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  backButton: {
    padding: "10px 16px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default CourseSubjects;
