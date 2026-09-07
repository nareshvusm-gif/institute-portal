import { Link } from "react-router-dom";

function Events() {

  const events = [
    {
      id: 1,
      title: "Annual Sports Day",
      date: "20 September 2026",
      time: "9:00 AM",
      location: "College Ground",
      type: "Sports",
    },
    {
      id: 2,
      title: "Freshers Welcome Program",
      date: "25 September 2026",
      time: "10:00 AM",
      location: "Auditorium",
      type: "College Event",
    },
    {
      id: 3,
      title: "Technical Workshop",
      date: "30 September 2026",
      time: "11:00 AM",
      location: "Computer Lab",
      type: "Workshop",
    },
    {
      id: 4,
      title: "Cultural Fest",
      date: "10 October 2026",
      time: "4:00 PM",
      location: "Main Auditorium",
      type: "Cultural",
    },
  ];

  return (
    <div style={styles.container}>

      <div style={styles.header}>

        <div>
          <h1>Events</h1>
          <p>Upcoming institute events and activities</p>
        </div>

        <button style={styles.addButton}>
          + Add Event
        </button>

      </div>

      <div style={styles.grid}>

        {events.map((event) => (

          <div key={event.id} style={styles.card}>

            <div style={styles.dateBox}>
              📅
            </div>

            <span style={styles.type}>
              {event.type}
            </span>

            <h2>{event.title}</h2>

            <p>
              <strong>Date:</strong> {event.date}
            </p>

            <p>
              <strong>Time:</strong> {event.time}
            </p>

            <p>
              <strong>Location:</strong> {event.location}
            </p>

            <button style={styles.viewButton}>
              View Event
            </button>

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
    marginBottom: "30px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
  },

  card: {
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "10px",
    boxShadow:
      "0 3px 10px rgba(0,0,0,0.08)",
  },

  dateBox: {
    fontSize: "35px",
    marginBottom: "10px",
  },

  type: {
    backgroundColor: "#dcfce7",
    color: "#166534",
    padding: "5px 9px",
    borderRadius: "5px",
    fontSize: "13px",
  },

  addButton: {
    padding: "12px 18px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
  },

  viewButton: {
    padding: "9px 15px",
    backgroundColor: "#16a34a",
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

export default Events;
