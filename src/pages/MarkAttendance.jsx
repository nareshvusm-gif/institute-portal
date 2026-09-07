import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MarkAttendance() {

  const navigate = useNavigate();

  const [date, setDate] = useState("");

  const [students, setStudents] = useState([
    {
      id: 1,
      rollNo: "ST001",
      name: "Rahul Kumar",
      status: "Present",
    },
    {
      id: 2,
      rollNo: "ST002",
      name: "Priya Sharma",
      status: "Present",
    },
    {
      id: 3,
      rollNo: "ST003",
      name: "Arun Kumar",
      status: "Absent",
    },
    {
      id: 4,
      rollNo: "ST004",
      name: "Sneha Patel",
      status: "Present",
    },
  ]);

  const handleStatusChange = (id, status) => {

    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, status }
          : student
      )
    );
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log({
      date,
      attendance: students,
    });

    alert("Attendance marked successfully!");

    navigate("/attendance");
  };

  return (
    <div style={styles.container}>

      <div style={styles.card}>

        <h1>Mark Attendance</h1>

        <p>Select a date and mark student attendance.</p>

        <form onSubmit={handleSubmit}>

          <label>
            <strong>Date</strong>
          </label>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={styles.dateInput}
            required
          />

          <table style={styles.table}>

            <thead>
              <tr>
                <th>Roll No</th>
                <th>Student Name</th>
                <th>Attendance</th>
              </tr>
            </thead>

            <tbody>

              {students.map((student) => (

                <tr key={student.id}>

                  <td>{student.rollNo}</td>

                  <td>{student.name}</td>

                  <td>

                    <label style={styles.radio}>
                      <input
                        type="radio"
                        name={`attendance-${student.id}`}
                        checked={
                          student.status === "Present"
                        }
                        onChange={() =>
                          handleStatusChange(
                            student.id,
                            "Present"
                          )
                        }
                      />
                      Present
                    </label>

                    <label style={styles.radio}>
                      <input
                        type="radio"
                        name={`attendance-${student.id}`}
                        checked={
                          student.status === "Absent"
                        }
                        onChange={() =>
                          handleStatusChange(
                            student.id,
                            "Absent"
                          )
                        }
                      />
                      Absent
                    </label>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

          <button
            type="submit"
            style={styles.button}
          >
            Save Attendance
          </button>

        </form>

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

  card: {
    maxWidth: "900px",
    margin: "auto",
    padding: "30px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow:
      "0 3px 10px rgba(0,0,0,0.08)",
  },

  dateInput: {
    display: "block",
    padding: "10px",
    marginTop: "10px",
    marginBottom: "25px",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  radio: {
    marginRight: "20px",
    cursor: "pointer",
  },

  button: {
    marginTop: "25px",
    padding: "12px 20px",
    backgroundColor: "#16a34a",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default MarkAttendance;
