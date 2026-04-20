const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const itemRoutes = require("./routes/itemRoutes");
const matchRoutes = require("./routes/matchRoutes");
const notificationRoutes = require("./routes/notificationRoutes");

const app = express();

connectDB();

const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174"],
};
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api", itemRoutes);
app.use("/api", matchRoutes);
app.use("/api", notificationRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Lost And Found Backend Working!" });
});

module.exports = app;
