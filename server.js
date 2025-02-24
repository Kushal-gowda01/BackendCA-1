const express = require('express');
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});

app.get('/user', (req, res) => {
  const { user } = req.query;

  if (!user) {
    return res.status(400).send('User parameters cannot be empty');
  }

  const userData = {
    user: 'kushal',
    email: 'kushal@gamil.com',
    age: 18,
  };

  if (userData.user === user) {
    return res.json(userData);
  }

  res.status(404).send('User not found');
});

