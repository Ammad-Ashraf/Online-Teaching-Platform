const express = require('express');
const mongoose=require('mongoose');
const courseRoutes = require('./Routes/CourseRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://Ammad:Ammad1122.@learning.huhol.mongodb.net/Practice?retryWrites=true&w=majority&appName=Learning')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));


// Use course routes
app.use('/api/courses', courseRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
