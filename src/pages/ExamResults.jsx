import { useState } from "react";

function ExamResults() {
  const [selectedStudent, setSelectedStudent] =
    useState("Rahul Kumar");

  const results = {
    "Rahul Kumar": [
      {
        subject: "Programming Fundamentals",
        marks: 85,
        total: 100,
        grade: "A",
      },
      {
        subject: "Mathematics",
        marks: 78,
        total: 100,
        grade: "B+",
      },
      {
        subject: "Database Management",
        marks: 92,
        total: 100,
        grade: "A+",
      },
      {
        subject: "Web Development",
        marks: 88,
        total: 100,
        grade: "A",
      },
    ],

    "Priya Sharma": [
      {
        subject: "Programming Fundamentals",
        marks: 92,
        total: 100,
        grade: "A+",
      },
      {
        subject: "Mathematics",
        marks: 90,
        total: 100,
        grade: "A+",
      },
      {
        subject: "Database Management",
        marks: 95,
        total: 100,
        grade: "A+",
      },
      {
        subject: "Web Development",
        marks: 91,
        total: 100,
        grade: "A+",
      },
    ],
  };

  const studentResults =
    results[selectedStudent];

  const totalMarks = studentResults.reduce(
    (sum, item) => sum + item.marks,
    0
  );

  const percentage = (
    (totalMarks /
      (studentResults.length * 100)) *
    100
  ).toFixed(2);

  return (
    <div style={styles.container}>

      <div style={styles.card}>

        <h1>Student Results</h1>

        <div style={styles.selector}>

          <label>
            <strong>Select Student</strong>
          </label>

          <select
            value={selectedStudent}
            onChange={(e) =>
              setSelectedStudent(e.target.value)
            }
            style={styles.select}
          >
            <option>Rahul Kumar</option>
            <option>Priya Sharma</option>
          </select>

        </div>

        <div style={styles.studentInfo}>

          <div>
            <strong>Student</strong>
            <p>{selectedStudent}</p>
          </div>

          <div>
            <strong>Roll Number</strong>
            <p>ST001</p>
          </div>

          <div>
            <strong>Course</strong>
            <p>BCA</p>
          </div>

          <div>
            <strong>Semester</strong>
            <p>1st Semester</p>
          </div>

        </div>

        <table style={styles.table}>

          <thead>
            <tr>
              <th>Subject</th>
              <th>Marks</th>
              <th>Total</th>
              <th>Percentage</th>
              <th>Grade</th>
            </tr>
          </thead>

          <tbody>

            {studentResults.map(
              (result, index) => (

                <tr key={index}>

                  <td>{result.subject}</td>

                  <td>{result.marks}</td>

                  <td>{result.total}</td>

                  <td>
                    {result.marks}%
                  </td>

                  <td>
                    <span style={styles.grade}>
                      {result.grade}
                    </span>
                  </td>

                </tr>
              )
            )}

          </tbody>

        </table>

        <div style={styles.summary}>

          <div>
            <span>Total Marks</span>
            <strong>
              {totalMarks} /{" "}
              {studentResults.length * 100}
            </strong>
          </div>

          <div>
            <span>Percentage</span>
            <strong>{percentage}%</strong>
          </div>

          <div>
            <span>Result</span>
            <strong style={{ color: "#16a34a" }}>
              PASS
            </strong>
          </div>

        </div>

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

  selector: {
    margin: "20px 0",
  },

  select: {
    display: "block",
    marginTop: "8px",
    padding: "10px",
    width: "250px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },

  studentInfo: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
    backgroundColor: "#f8fafc",
    padding: "20px",
    borderRadius: "8px",
    marginBottom: "25px",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  grade: {
    padding: "6px 10px",
    backgroundColor: "#dcfce7",
    color: "#166534",
    borderRadius: "5px",
    fontWeight: "bold",
  },

  summary: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "30px",
    padding: "20px",
    backgroundColor: "#eff6ff",
    borderRadius: "8px",
  },

  summaryItem: {
    display: "flex",
    flexDirection: "column",
  },
};

export default ExamResults;
