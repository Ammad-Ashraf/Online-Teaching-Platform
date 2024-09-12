const mongoose = require('mongoose');

// Define the Course schema
const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
});

// Create a Mongoose model for Course
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
