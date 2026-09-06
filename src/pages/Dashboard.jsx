import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <div>
        <h3>Total Students</h3>
        <p>500</p>
      </div>

      <div>
        <h3>Total Faculty</h3>
        <p>50</p>
      </div>

      <div>
        <h3>Total Courses</h3>
        <p>20</p>
      </div>

      <div>
         <Link to="/students">
          <button>View Students</button>
        </Link>
      </div>
       <div>
         <Link to="/faculty">
          <button>View Faculty</button>
        </Link>
      </div>

       <div>
         <Link to="/courses">
          <button>View Courses</button>
        </Link>
      </div>

      <div>
         <Link to="/attendance">
          <button>View Attendance</button>
        </Link>
      </div>
       <div>
         <Link to="/exams">
          <button>View Exams</button>
        </Link>
      </div>
      <div>
         <Link to="/">
          <button>Logout</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
