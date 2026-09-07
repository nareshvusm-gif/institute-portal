import { useParams, Link } from "react-router-dom";

function FacultySubjects() {
  const { id } = useParams();

  const subjects = [
    {
      code: "CS101",
      name: "Programming Fundamentals",
      course: "BCA",
      semester: "1st Semester",
    },
    {
      code: "CS202",
      name: "Database Management",
      course: "BCA",
      semester: "2nd Semester",
    },
    {
      code: "CS301",
      name: "Web Development",
      course: "BSc Computer Science",
      semester: "3rd Semester",
    },
  ];

  return (
    <div style={styles.container}>

      <h1>Assigned Subjects</h1>

      <p>
        Faculty ID: <strong>FAC00{id}</strong>
      </p>

      <div style={styles.card}>

        <table style={styles.table}>

          <thead>
            <tr>
              <th>Subject Code</th>
              <th>Subject</th>
              <th>Course</th>
              <th>Semester</th>
            </tr>
          </thead>

          <tbody>

            {subjects.map((subject) => (

              <tr key={subject.code}>

                <td>{subject.code}</td>
                <td>{subject.name}</td>
                <td>{subject.course}</td>
                <td>{subject.semester}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      <br />

      <Link to={`/faculty/profile/${id}`}>
        <button style={styles.button}>
          Back to Profile
        </button>
      </Link>

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

  card: {
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  button: {
    padding: "10px 18px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
  },
};

export default FacultySubjects;
