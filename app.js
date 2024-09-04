const express=require('express');
const res = require('express/lib/response');
const app=express();

// GET route for the homepage
app.get('/', (req, res) => {
  res.send('Welcome to the Online Teaching Platform');
});

// PUT route for /user
app.put('/user/update', (req, res) => {
  res.send('User information update');
});

// DELETE route for /user
app.delete('/user', (req, res) => {
  res.send('DELETE request to /user');
});

// GET route for the About page
app.get('/about', (req, res) => {
  res.send('About Us page');
});

// GET route for the Contact page
app.get('/contact', (req, res) => {
  res.send('Contact Us page');
});

app.post('/user/store',(req,res)=>
{
  res.send('User information stored');
});


app.listen(3000,()=>
{
  console.log('Server is running on http://localhost:3000');
});


