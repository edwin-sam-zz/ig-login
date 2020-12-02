const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;
const methodOverride = require('method-override');
const User = require('./model/User');
require('./config/db');
app.use(cors());

app.use(express.json());
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.send('hello world');
});

app.post('/signup', async (req, res) => {
  console.log('are we there yet?');
  console.log(req.body);
  try {
    const createdUser = await User.create(req.body);
    res.json(createdUser);
  } catch (err) {
    console.log(err);
  }
});

app.post('/login', async (req, res) => {
  console.log(req.body);
  try {
    const userFound = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    console.log(userFound, '<---------------------found the user');
    res.json(userFound);
  } catch (err) {
    res.send(err);
  }
});

app.listen(port, () => {
  console.log('listening on port 8000');
});
