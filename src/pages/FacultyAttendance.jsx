import { useParams } from "react-router-dom";

function FacultyAttendance() {
  const { id } = useParams();

  const attendance = [
    {
      month: "January",
      workingDays: 22,
      present: 21,
      absent: 1,
    },
    {
      month: "February",
      workingDays: 20,
      present: 19,
      absent: 1,
    },
    {
      month: "March",
      workingDays: 23,
      present: 23,
      absent: 0,
    },
  ];

  return (
    <div style={styles.container}>

      <h1>Faculty Attendance</h1>

      <p>
        Faculty ID: <strong>FAC00{id}</strong>
      </p>

      <div style={styles.summary}>

        <div style={styles.summaryCard}>
          <h3>Working Days</h3>
          <h2>65</h2>
        </div>

        <div style={styles.summaryCard}>
          <h3>Present</h3>
          <h2 style={{ color: "#16a34a" }}>63</h2>
        </div>

        <div style={styles.summaryCard}>
          <h3>Absent</h3>
          <h2 style={{ color: "#dc2626" }}>2</h2>
        </div>

        <div style={styles.summaryCard}>
          <h3>Attendance</h3>
          <h2 style={{ color: "#2563eb" }}>96.9%</h2>
        </div>

      </div>

      <div style={styles.card}>

        <h2>Monthly Attendance</h2>

        <table style={styles.table}>

          <thead>
            <tr>
              <th>Month</th>
              <th>Working Days</th>
              <th>Present</th>
              <th>Absent</th>
              <th>Percentage</th>
            </tr>
          </thead>

          <tbody>

            {attendance.map((item) => {

              const percentage =
                ((item.present / item.workingDays) * 100).toFixed(1);

              return (
                <tr key={item.month}>

                  <td>{item.month}</td>

                  <td>{item.workingDays}</td>

                  <td style={{ color: "#16a34a" }}>
                    {item.present}
                  </td>

                  <td style={{ color: "#dc2626" }}>
                    {item.absent}
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
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
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
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
};

export default FacultyAttendance;
