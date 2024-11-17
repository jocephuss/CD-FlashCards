const express = require("express");
const {
  getQuestionsByCategory,
  addQuestion,
} = require("../controllers/questionsController");

const router = express.Router();

// Route to get questions by category
router.get("/:category", getQuestionsByCategory);

// Route to add a new question
router.post("/", addQuestion);

module.exports = router;
