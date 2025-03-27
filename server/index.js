const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/movies', (req, res) => {
  const movies = [
    { title: 'Mean Girls' },
    { title: 'Hackers' },
    { title: 'The Grey' },
    { title: 'Sunshine' },
    { title: 'Ex Machina' },
  ];
  res.json(movies);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
