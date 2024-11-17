const express = require("express");
const mongoose = require("mongoose");
const questionsRoutes = require("./routes/questionsRoutes");
require("dotenv").config(); // For environment variables

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
const db = require("./config/db");
db.connect();

// Routes
app.use("/api/questions", questionsRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to the Flashcards API!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
