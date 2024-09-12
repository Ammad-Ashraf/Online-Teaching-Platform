const express = require('express');
const router = express.Router();
const coursesController = require('../Controllers/CourseController');

// GET all courses
router.get('/', coursesController.getAllCourses);

// GET a course by ID
router.get('/:id', coursesController.getCourseById);

// POST a new course
router.post('/', coursesController.createCourse);

// PUT to update a course by ID
router.put('/:id', coursesController.updateCourse);

// DELETE a course by ID
router.delete('/:id', coursesController.deleteCourse);

module.exports = router;
