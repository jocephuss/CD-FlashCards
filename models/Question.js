const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  category: { type: String, required: true },
  question: { type: String, required: true },
  answer: { type: String, required: false },
});

module.exports = mongoose.model("Question", QuestionSchema);
