// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Set up view engine
app.set('view engine', 'ejs');

// Set up static files
app.use(express.static('public'));

// Use body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Create a new array for comments
const comments = [
  {
    name: 'John',
    comment: 'This is a comment.'
  },
  {
    name: 'Mary',
    comment: 'This is another comment.'
  }
];

// Create GET request for root route
app.get('/', (req, res) => {
  res.render('index', { comments: comments });
});

// Create POST request for root route
app.post('/', (req, res) => {
  // Create a new object
  const newComment = {
    name: req.body.name,
    comment: req.body.comment
  };
  // Push the object to the array
  comments.push(newComment);
  // Redirect to root route
  res.redirect('/');
});

// Listen to port 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});