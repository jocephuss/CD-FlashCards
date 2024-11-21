const Question = require("../models/Question");

// Get all questions in a category
const getQuestionsByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const questions = await Question.find({ category: category.toLowerCase() }); // Ensure case insensitivity
    if (questions.length === 0) {
      return res
        .status(404)
        .json({ message: `No questions found for category: ${category}` });
    }
    res.status(200).json(questions);
  } catch (err) {
    console.error("Error fetching questions:", err);
    res.status(500).json({ error: "Failed to fetch questions" });
  }
};

// Add a new question
const addQuestion = async (req, res) => {
  try {
    const { category, question, answer } = req.body;

    // Validate the input
    if (!category || !question || !answer) {
      return res
        .status(400)
        .json({ error: "Category, question, and answer are required." });
    }

    // Create a new question object
    const newQuestion = new Question({
      category: category.toLowerCase(),
      question: question.trim(),
      answer: answer.trim(),
    });

    // Save to the database
    await newQuestion.save();
    res
      .status(201)
      .json({ message: "Question added successfully!", question: newQuestion });
  } catch (err) {
    console.error("Error adding question:", err);
    res.status(500).json({ error: "Failed to add question" });
  }
};

module.exports = { getQuestionsByCategory, addQuestion };
