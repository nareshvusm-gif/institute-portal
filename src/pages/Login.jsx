import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("Admin");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    // Demo login credentials
    const users = {
      Admin: {
        username: "admin",
        password: "admin123",
      },
      Faculty: {
        username: "faculty",
        password: "faculty123",
      },
      Student: {
        username: "student",
        password: "student123",
      },
    };

    const currentUser = users[role];

    if (
      username === currentUser.username &&
      password === currentUser.password
    ) {
      // Save login information
      localStorage.setItem(
        "user",
        JSON.stringify({
          username,
          role,
        })
      );

      // Go to dashboard
      //navigate("/dashboard");
      if (role === "Faculty") {
  navigate("/faculty-dashboard");
}  else if (role === "Student") {
  navigate("/student-dashboard");
} else {
  navigate("/dashboard");
}

    } else {
      setError(
        "Invalid username or password"
      );
    }
  };

  return (
    <div style={styles.container}>

      <div style={styles.loginBox}>

        <div style={styles.logo}>
          🏫
        </div>

        <h1>Institute Portal</h1>

        <p style={styles.subtitle}>
          Login to your account
        </p>

        {/* Role Selection */}

        <div style={styles.roles}>

          <button
            type="button"
            onClick={() => setRole("Admin")}
            style={{
              ...styles.roleButton,
              ...(role === "Admin"
                ? styles.activeRole
                : {}),
            }}
          >
            🔐
            <span>Admin</span>
          </button>

          <button
            type="button"
            onClick={() => setRole("Faculty")}
            style={{
              ...styles.roleButton,
              ...(role === "Faculty"
                ? styles.activeRole
                : {}),
            }}
          >
            👨‍🏫
            <span>Faculty</span>
          </button>

          <button
            type="button"
            onClick={() => setRole("Student")}
            style={{
              ...styles.roleButton,
              ...(role === "Student"
                ? styles.activeRole
                : {}),
            }}
          >
            🎓
            <span>Student</span>
          </button>

        </div>

        <h2>{role} Login</h2>

        <form onSubmit={handleLogin}>

          <label style={styles.label}>
            Username
          </label>

          <input
            type="text"
            placeholder={`Enter ${role.toLowerCase()} username`}
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
            style={styles.input}
            required
          />

          <label style={styles.label}>
            Password
          </label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            style={styles.input}
            required
          />

          {error && (
            <div style={styles.error}>
              {error}
            </div>
          )}

          <button
            type="submit"
            style={styles.loginButton}
          >
            Login as {role}
          </button>

        </form>

        <div style={styles.demo}>

          <strong>Demo Credentials</strong>

          <p>
            Admin: <b>admin</b> / <b>admin123</b>
          </p>

          <p>
            Faculty: <b>faculty</b> /{" "}
            <b>faculty123</b>
          </p>

          <p>
            Student: <b>student</b> /{" "}
            <b>student123</b>
          </p>

        </div>

      </div>

    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(135deg, #2563eb, #7c3aed)",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },

  loginBox: {
    width: "420px",
    maxWidth: "100%",
    backgroundColor: "white",
    padding: "35px",
    borderRadius: "15px",
    boxShadow:
      "0 10px 30px rgba(0,0,0,0.2)",
    textAlign: "center",
  },

  logo: {
    fontSize: "50px",
  },

  subtitle: {
    color: "#64748b",
    marginBottom: "25px",
  },

  roles: {
    display: "grid",
    gridTemplateColumns:
      "repeat(3, 1fr)",
    gap: "8px",
    marginBottom: "25px",
  },

  roleButton: {
    padding: "12px 5px",
    border: "1px solid #cbd5e1",
    backgroundColor: "#f8fafc",
    borderRadius: "7px",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    alignItems: "center",
  },

  activeRole: {
    backgroundColor: "#dbeafe",
    border: "2px solid #2563eb",
    color: "#1d4ed8",
    fontWeight: "bold",
  },

  label: {
    display: "block",
    textAlign: "left",
    marginBottom: "7px",
    marginTop: "15px",
    fontWeight: "bold",
  },

  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "12px",
    border: "1px solid #cbd5e1",
    borderRadius: "7px",
    fontSize: "15px",
  },

  error: {
    backgroundColor: "#fee2e2",
    color: "#991b1b",
    padding: "10px",
    borderRadius: "6px",
    marginTop: "15px",
  },

  loginButton: {
    width: "100%",
    padding: "13px",
    marginTop: "20px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "7px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  demo: {
    marginTop: "25px",
    padding: "15px",
    backgroundColor: "#f8fafc",
    borderRadius: "8px",
    textAlign: "left",
    fontSize: "13px",
    color: "#475569",
  },
};

export default Login;
