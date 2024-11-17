const Question = require("../models/Question");

// Get all questions in a category
const getQuestionsByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const questions = await Question.find({ category });
    res.json(questions);
  } catch (err) {
    console.error("Error fetching questions:", err);
    res.status(500).json({ error: "Failed to fetch questions" });
  }
};

// Add a new question
const addQuestion = async (req, res) => {
  try {
    const { category, question, answer } = req.body;
    const newQuestion = new Question({ category, question, answer });
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (err) {
    console.error("Error adding question:", err);
    res.status(500).json({ error: "Failed to add question" });
  }
};

module.exports = { getQuestionsByCategory, addQuestion };
