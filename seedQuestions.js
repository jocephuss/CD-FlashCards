const {
  collectionsQuestions,
  distributionQuestions,
  pathogensQuestions,
  acronymsQuestions,
  regulationsQuestions,
} = require("./questions");

// Debug: Log counts of imported question categories
console.log("Collections:", collectionsQuestions.length);
console.log("Distribution:", distributionQuestions.length);
console.log("Pathogens:", pathogensQuestions.length);
console.log("Acronyms:", acronymsQuestions.length);
console.log("Regulations:", regulationsQuestions.length);

// Consolidate all questions with a category tag
const questions = [
  ...collectionsQuestions.map((q) => ({ category: "collections", ...q })),
  ...distributionQuestions.map((q) => ({ category: "distribution", ...q })),
  ...pathogensQuestions.map((q) => ({ category: "pathogens", ...q })),
  ...acronymsQuestions.map((q) => ({ category: "acronyms", ...q })),
  ...regulationsQuestions.map((q) => ({ category: "regulations", ...q })),
];

// Debug: Log total questions
console.log("Total Questions to Seed:", questions.length);

const seedDatabase = async () => {
  try {
    const mongoose = require("mongoose");
    const Question = require("./models/Question");

    await mongoose.connect(
      "mongodb+srv://josiahrowland:dIllsi%40h00@serverlessinstance0.l0nl8um.mongodb.net/test?retryWrites=true&w=majority"
    );

    // Debug: Log questions before inserting
    console.log("Seeding the following questions:", questions);

    await Question.insertMany(questions);
    console.log("Seeding completed!");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
