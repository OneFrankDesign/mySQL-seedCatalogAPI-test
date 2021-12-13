if (!process.env.NODE_ENV === "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();

const db = require("./config/db");

app.use(express.json());

// Middleware

app.use("/seeds", require("./routes/seedRoute"));

app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went wrong",
  });
});

// Listen on pc port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
