const Course = require('../Models/Course');

// Get all courses
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find(); // Get all courses from MongoDB
    res.json(courses);
  } catch (err) {
    res.status(500).send('Failed to retrieve courses');
  }
};

// Get a single course by ID
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).send('Course not found');
    res.json(course);
  } catch (err) {
    res.status(500).send('Failed to retrieve course');
  }
};

// Create a new course
exports.createCourse = async (req, res) => {
  try {
    const course = new Course({
      title: req.body.title,
      description: req.body.description
    });
    await course.save(); // Save the course to MongoDB
    res.status(201).json(course);
  } catch (err) {
    res.status(400).send('Failed to create course');
  }
};

// Update an existing course
exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(
      req.params.id, 
      {
        title: req.body.title,
        description: req.body.description
      },
      { new: true }
    );
    if (!course) return res.status(404).send('Course not found');
    res.json(course);
  } catch (err) {
    res.status(400).send('Failed to update course');
  }
};

// Delete a course
exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) return res.status(404).send('Course not found');
    res.json(course);
  } catch (err) {
    res.status(500).send('Failed to delete course');
  }
};
