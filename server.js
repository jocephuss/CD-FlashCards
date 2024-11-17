const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const questionsRoutes = require("./routes/questionsRoutes");
require("dotenv").config(); // For environment variables

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Serve Static Files
app.use(express.static(path.join(__dirname, "public")));

// Connect to MongoDB
const db = require("./config/db");
db.connect();

// API Routes
app.use("/api/questions", questionsRoutes);

// Catch-All Route for React/Frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
