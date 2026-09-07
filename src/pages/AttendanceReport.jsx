function AttendanceReport() {

  const reports = [
    {
      month: "January",
      workingDays: 22,
      present: 21,
      absent: 1,
    },
    {
      month: "February",
      workingDays: 20,
      present: 18,
      absent: 2,
    },
    {
      month: "March",
      workingDays: 23,
      present: 22,
      absent: 1,
    },
    {
      month: "April",
      workingDays: 21,
      present: 19,
      absent: 2,
    },
    {
      month: "May",
      workingDays: 22,
      present: 20,
      absent: 2,
    },
  ];

  return (
    <div style={styles.container}>

      <h1>Monthly Attendance Reports</h1>

      <p>
        Student: <strong>Rahul Kumar</strong>
      </p>

      <p>
        Roll Number: <strong>ST001</strong>
      </p>

      <div style={styles.summary}>

        <div style={styles.card}>
          <h3>Working Days</h3>
          <h2>108</h2>
        </div>

        <div style={styles.card}>
          <h3>Present</h3>
          <h2 style={{ color: "#16a34a" }}>
            100
          </h2>
        </div>

        <div style={styles.card}>
          <h3>Absent</h3>
          <h2 style={{ color: "#dc2626" }}>
            8
          </h2>
        </div>

        <div style={styles.card}>
          <h3>Attendance</h3>
          <h2 style={{ color: "#2563eb" }}>
            92.6%
          </h2>
        </div>

      </div>

      <div style={styles.tableCard}>

        <h2>Monthly Report</h2>

        <table style={styles.table}>

          <thead>
            <tr>
              <th>Month</th>
              <th>Working Days</th>
              <th>Present</th>
              <th>Absent</th>
              <th>Attendance %</th>
            </tr>
          </thead>

          <tbody>

            {reports.map((report) => {

              const percentage =
                (
                  (report.present /
                    report.workingDays) *
                  100
                ).toFixed(1);

              return (
                <tr key={report.month}>

                  <td>{report.month}</td>

                  <td>{report.workingDays}</td>

                  <td style={{ color: "#16a34a" }}>
                    {report.present}
                  </td>

                  <td style={{ color: "#dc2626" }}>
                    {report.absent}
                  </td>

                  <td>
                    <strong>{percentage}%</strong>
                  </td>

                </tr>
              );
            })}

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

  summary: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
    marginTop: "25px",
    marginBottom: "25px",
  },

  card: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow:
      "0 3px 10px rgba(0,0,0,0.08)",
  },

  tableCard: {
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "10px",
    boxShadow:
      "0 3px 10px rgba(0,0,0,0.08)",
    overflowX: "auto",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
};

export default AttendanceReport;
