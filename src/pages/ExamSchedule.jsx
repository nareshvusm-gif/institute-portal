import { Link } from "react-router-dom";

function ExamSchedule() {
  const exams = [
    {
      id: 1,
      date: "15 September 2026",
      subject: "Programming Fundamentals",
      code: "BCA101",
      course: "BCA",
      semester: "1st Semester",
      time: "10:00 AM - 1:00 PM",
      room: "Room 101",
      status: "Upcoming",
    },
    {
      id: 2,
      date: "18 September 2026",
      subject: "Mathematics",
      code: "BCA102",
      course: "BCA",
      semester: "1st Semester",
      time: "10:00 AM - 1:00 PM",
      room: "Room 102",
      status: "Upcoming",
    },
    {
      id: 3,
      date: "22 September 2026",
      subject: "Database Management",
      code: "BCA201",
      course: "BCA",
      semester: "2nd Semester",
      time: "2:00 PM - 5:00 PM",
      room: "Room 201",
      status: "Upcoming",
    },
    {
      id: 4,
      date: "05 August 2026",
      subject: "Web Development",
      code: "BCA202",
      course: "BCA",
      semester: "2nd Semester",
      time: "10:00 AM - 1:00 PM",
      room: "Room 203",
      status: "Completed",
    },
  ];

  return (
    <div style={styles.container}>

      <div style={styles.header}>
        <div>
          <h1>Exam Schedule</h1>
          <p>Upcoming and completed examinations</p>
        </div>

        <button style={styles.addButton}>
          + Add Exam
        </button>
      </div>

      <div style={styles.card}>

        <table style={styles.table}>

          <thead>
            <tr>
              <th>Date</th>
              <th>Subject</th>
              <th>Code</th>
              <th>Course</th>
              <th>Semester</th>
              <th>Time</th>
              <th>Room</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {exams.map((exam) => (

              <tr key={exam.id}>

                <td>{exam.date}</td>

                <td>
                  <strong>{exam.subject}</strong>
                </td>

                <td>{exam.code}</td>

                <td>{exam.course}</td>

                <td>{exam.semester}</td>

                <td>{exam.time}</td>

                <td>{exam.room}</td>

                <td>
                  <span
                    style={{
                      ...styles.status,
                      backgroundColor:
                        exam.status === "Upcoming"
                          ? "#dbeafe"
                          : "#dcfce7",
                      color:
                        exam.status === "Upcoming"
                          ? "#1d4ed8"
                          : "#166534",
                    }}
                  >
                    {exam.status}
                  </span>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      <br />

      <Link to="/examinations">
        <button style={styles.backButton}>
          Back to Examinations
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
    boxShadow:
      "0 3px 10px rgba(0,0,0,0.08)",
    overflowX: "auto",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  status: {
    padding: "6px 10px",
    borderRadius: "5px",
    fontWeight: "bold",
    whiteSpace: "nowrap",
  },

  addButton: {
    padding: "12px 18px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
  },

  backButton: {
    padding: "10px 16px",
    backgroundColor: "#64748b",
    color: "white",
    border: "none",
    borderRadius: "6px",
  },
};

export default ExamSchedule;
