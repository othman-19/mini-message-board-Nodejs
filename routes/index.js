/* eslint-disable no-unused-vars */
const express = require('express');

const router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

/* GET home page. */

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Mini Messages board', messages });
});

router.get('/new', (req, res, next) => {
  res.render('form', { title: 'New Messages Form' });
});

router.post('/new', (req, res, next) => {
  const { author, message } = req.body;
  messages.push({ text: message, user: author, added: new Date() });
  res.redirect('/');
});

module.exports = router;
