import { Link, useParams } from "react-router-dom";

function CourseDetails() {
  const { id } = useParams();

  const course = {
    id,
    code: "BCA",
    name: "Bachelor of Computer Applications",
    department: "Computer Science",
    duration: "3 Years",
    semesters: 6,
    students: 150,
    faculty: 12,
    description:
      "The Bachelor of Computer Applications is an undergraduate program focused on computer applications, programming, databases, web development and software technologies.",
  };

  return (
    <div style={styles.container}>

      <div style={styles.card}>

        <div style={styles.header}>
          <div style={styles.courseIcon}>
            {course.code}
          </div>

          <div>
            <h1>{course.name}</h1>
            <p>{course.department}</p>
          </div>
        </div>

        <hr />

        <h2>Course Details</h2>

        <div style={styles.grid}>

          <div>
            <strong>Course Code</strong>
            <p>{course.code}</p>
          </div>

          <div>
            <strong>Duration</strong>
            <p>{course.duration}</p>
          </div>

          <div>
            <strong>Semesters</strong>
            <p>{course.semesters}</p>
          </div>

          <div>
            <strong>Total Students</strong>
            <p>{course.students}</p>
          </div>

          <div>
            <strong>Faculty Members</strong>
            <p>{course.faculty}</p>
          </div>

          <div>
            <strong>Department</strong>
            <p>{course.department}</p>
          </div>

        </div>

        <h2>Description</h2>

        <p style={styles.description}>
          {course.description}
        </p>

        <div style={styles.actions}>

          <Link to={`/courses/subjects/${id}`}>
            <button style={styles.subjectButton}>
              View Subjects
            </button>
          </Link>

          <Link to="/courses">
            <button style={styles.backButton}>
              Back to Courses
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
    fontFamily: "Arial",
  },

  card: {
    maxWidth: "900px",
    margin: "auto",
    padding: "30px",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
  },

  header: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },

  courseIcon: {
    width: "80px",
    height: "80px",
    backgroundColor: "#2563eb",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "12px",
    fontWeight: "bold",
    fontSize: "18px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    marginTop: "20px",
  },

  description: {
    color: "#475569",
    lineHeight: "1.6",
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

  backButton: {
    padding: "12px 18px",
    backgroundColor: "#64748b",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default CourseDetails;
