function Results() {
  const results = [
    {
      subject: "Mathematics",
      marks: 85,
      total: 100,
      grade: "A",
    },
    {
      subject: "Computer Science",
      marks: 92,
      total: 100,
      grade: "A+",
    },
    {
      subject: "Physics",
      marks: 78,
      total: 100,
      grade: "B+",
    },
    {
      subject: "English",
      marks: 88,
      total: 100,
      grade: "A",
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div>
          <h1>Marks / Results</h1>
          <p>Student examination results</p>
        </div>
      </div>

      <div style={styles.card}>
        <h2>Rahul Kumar</h2>

        <p>
          <strong>Roll Number:</strong> ST001
        </p>

        <p>
          <strong>Course:</strong> BCA
        </p>

        <hr />

        <table style={styles.table}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Marks</th>
              <th>Total</th>
              <th>Grade</th>
            </tr>
          </thead>

          <tbody>
            {results.map((result, index) => (
              <tr key={index}>
                <td>{result.subject}</td>
                <td>{result.marks}</td>
                <td>{result.total}</td>
                <td>
                  <span style={styles.grade}>
                    {result.grade}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={styles.summary}>
          <h3>Total Marks: 343 / 400</h3>
          <h3>Percentage: 85.75%</h3>
          <h3>Overall Grade: A</h3>
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
    fontFamily: "Arial, sans-serif",
  },

  header: {
    marginBottom: "25px",
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
    marginTop: "20px",
  },

  grade: {
    backgroundColor: "#dcfce7",
    color: "#166534",
    padding: "5px 10px",
    borderRadius: "5px",
    fontWeight: "bold",
  },

  summary: {
    marginTop: "25px",
    padding: "15px",
    backgroundColor: "#eff6ff",
    borderRadius: "8px",
  },
};

export default Results;
