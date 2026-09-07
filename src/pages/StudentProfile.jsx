import { Link, useParams } from "react-router-dom";

function StudentProfile() {

  const { id } = useParams();

  return (
    <div style={{ padding: "30px" }}>

      <h1>Student Profile</h1>

      <div>
        <h2>Rahul Kumar</h2>

        <p><b>Student ID:</b> {id}</p>
        <p><b>Roll Number:</b> ST001</p>
        <p><b>Course:</b> BCA</p>
        <p><b>Year:</b> 1st Year</p>
        <p><b>Email:</b> rahul@example.com</p>
        <p><b>Phone:</b> 9876543210</p>
      </div>

      <br />

      <Link to="/attendance">
        <button>Attendance</button>
      </Link>

      {" "}

      <Link to="/results">
        <button>Marks / Results</button>
      </Link>

    </div>
  );
}

export default StudentProfile;
