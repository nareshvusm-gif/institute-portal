import { Link } from "react-router-dom";

function Notices() {

  const notices = [
    {
      id: 1,
      title: "Mid-Term Examination Notice",
      date: "07 September 2026",
      category: "Examination",
      description:
        "Mid-term examinations will begin from 15 September 2026.",
      important: true,
    },
    {
      id: 2,
      title: "Student Registration",
      date: "05 September 2026",
      category: "Academic",
      description:
        "Students are requested to complete their semester registration.",
      important: false,
    },
    {
      id: 3,
      title: "Library Timing Update",
      date: "02 September 2026",
      category: "General",
      description:
        "The library will remain open from 8:00 AM to 7:00 PM.",
      important: false,
    },
    {
      id: 4,
      title: "Holiday Announcement",
      date: "01 September 2026",
      category: "Holiday",
      description:
        "The institute will remain closed on the upcoming public holiday.",
      important: true,
    },
  ];

  return (
    <div style={styles.container}>

      <div style={styles.header}>

        <div>
          <h1>Notices</h1>
          <p>Institute notices and announcements</p>
        </div>

        <button style={styles.addButton}>
          + Add Notice
        </button>

      </div>

      <div style={styles.list}>

        {notices.map((notice) => (

          <div
            key={notice.id}
            style={{
              ...styles.notice,
              borderLeft:
                notice.important
                  ? "5px solid #dc2626"
                  : "5px solid #2563eb",
            }}
          >

            <div style={styles.noticeHeader}>

              <div>

                <h2>{notice.title}</h2>

                <span style={styles.category}>
                  {notice.category}
                </span>

              </div>

              {notice.important && (
                <span style={styles.important}>
                  IMPORTANT
                </span>
              )}

            </div>

            <p style={styles.description}>
              {notice.description}
            </p>

            <p style={styles.date}>
              Published: {notice.date}
            </p>

          </div>

        ))}

      </div>

      <Link to="/announcements">
        <button style={styles.backButton}>
          Back to Announcements
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

  list: {
    display: "grid",
    gap: "18px",
  },

  notice: {
    backgroundColor: "white",
    padding: "22px",
    borderRadius: "8px",
    boxShadow:
      "0 3px 10px rgba(0,0,0,0.08)",
  },

  noticeHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  category: {
    backgroundColor: "#dbeafe",
    color: "#1d4ed8",
    padding: "5px 9px",
    borderRadius: "5px",
    fontSize: "13px",
  },

  important: {
    backgroundColor: "#fee2e2",
    color: "#991b1b",
    padding: "6px 10px",
    borderRadius: "5px",
    fontSize: "12px",
    fontWeight: "bold",
  },

  description: {
    color: "#475569",
    lineHeight: "1.5",
  },

  date: {
    color: "#64748b",
    fontSize: "14px",
  },

  addButton: {
    padding: "12px 18px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
  },

  backButton: {
    marginTop: "25px",
    padding: "10px 16px",
    backgroundColor: "#64748b",
    color: "white",
    border: "none",
    borderRadius: "6px",
  },
};

export default Notices;
