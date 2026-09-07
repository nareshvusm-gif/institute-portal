import { useState } from "react";

function MarksEntry() {
  const [marks, setMarks] = useState([
    {
      id: 1,
      rollNo: "ST001",
      name: "Rahul Kumar",
      marks: 85,
    },
    {
      id: 2,
      rollNo: "ST002",
      name: "Priya Sharma",
      marks: 92,
    },
    {
      id: 3,
      rollNo: "ST003",
      name: "Arun Kumar",
      marks: 78,
    },
    {
      id: 4,
      rollNo: "ST004",
      name: "Sneha Patel",
      marks: 88,
    },
  ]);

  const handleMarksChange = (id, value) => {
    setMarks(
      marks.map((student) =>
        student.id === id
          ? { ...student, marks: value }
          : student
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(marks);

    alert("Marks saved successfully!");
  };

  return (
    <div style={styles.container}>

      <div style={styles.card}>

        <h1>Marks Entry</h1>

        <p>Enter marks for the examination.</p>

        <div style={styles.examInfo}>

          <div>
            <strong>Exam</strong>
            <p>Programming Fundamentals</p>
          </div>

          <div>
            <strong>Course</strong>
            <p>BCA</p>
          </div>

          <div>
            <strong>Semester</strong>
            <p>1st Semester</p>
          </div>

          <div>
            <strong>Maximum Marks</strong>
            <p>100</p>
          </div>

        </div>

        <form onSubmit={handleSubmit}>

          <table style={styles.table}>

            <thead>
              <tr>
                <th>Roll No</th>
                <th>Student Name</th>
                <th>Marks</th>
                <th>Grade</th>
              </tr>
            </thead>

            <tbody>

              {marks.map((student) => {

                const mark = Number(student.marks);

                let grade = "F";

                if (mark >= 90) grade = "A+";
                else if (mark >= 80) grade = "A";
                else if (mark >= 70) grade = "B+";
                else if (mark >= 60) grade = "B";
                else if (mark >= 50) grade = "C";
                else if (mark >= 40) grade = "D";

                return (
                  <tr key={student.id}>

                    <td>{student.rollNo}</td>

                    <td>{student.name}</td>

                    <td>

                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={student.marks}
                        onChange={(e) =>
                          handleMarksChange(
                            student.id,
                            e.target.value
                          )
                        }
                        style={styles.input}
                      />

                    </td>

                    <td>
                      <strong>{grade}</strong>
                    </td>

                  </tr>
                );
              })}

            </tbody>

          </table>

          <button
            type="submit"
            style={styles.saveButton}
          >
            Save Marks
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
    maxWidth: "1000px",
    margin: "auto",
    padding: "30px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow:
      "0 3px 10px rgba(0,0,0,0.08)",
  },

  examInfo: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    backgroundColor: "#f8fafc",
    padding: "20px",
    borderRadius: "8px",
    margin: "20px 0",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  input: {
    width: "80px",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },

  saveButton: {
    marginTop: "25px",
    padding: "12px 20px",
    backgroundColor: "#16a34a",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default MarksEntry;
