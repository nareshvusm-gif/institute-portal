const express = require("express");
const cors = require("cors");
const db = require("./db.cjs");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/students", (req, res) => {
  const sql = "SELECT * FROM students";

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({
        error: err.message
      });
    }

    res.json(results);
  });
});

app.listen(5000, () => {
  console.log("Backend running at http://localhost:5000");
});
