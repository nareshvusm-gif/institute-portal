import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddStudent() {

  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    rollNo: "",
    email: "",
    phone: "",
    course: "",
    year: "",
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Student:", student);

    alert("Student added successfully!");

    navigate("/students");
  };

  return (
    <div style={styles.container}>

      <div style={styles.card}>

        <h1>Add Student</h1>

        <form onSubmit={handleSubmit}>

          <input
            name="name"
            placeholder="Student Name"
            value={student.name}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <input
            name="rollNo"
            placeholder="Roll Number"
            value={student.rollNo}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={student.email}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            name="phone"
            placeholder="Phone Number"
            value={student.phone}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            name="course"
            placeholder="Course"
            value={student.course}
            onChange={handleChange}
            style={styles.input}
          />

          <select
            name="year"
            value={student.year}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="">Select Year</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
          </select>

          <button type="submit" style={styles.button}>
            Save Student
          </button>

        </form>

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
    maxWidth: "600px",
    margin: "auto",
    padding: "30px",
    backgroundColor: "white",
    borderRadius: "10px",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    boxSizing: "border-box",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },

  button: {
    padding: "12px 20px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default AddStudent;
