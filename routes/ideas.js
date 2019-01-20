const express = require('express');

const Idea = require('../models/idea');

const router = express.Router();

router.post('/send', (req, res, next) => {
  let newIdea = new Idea({
    idea: 'Idea 1',
    description: 'From David'
  });

  Idea.addIdea(newIdea, (err, idea) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to add idea' });
    } else {
      res.json({ success: true, msg: 'Idea added' });
    }
  });
});

router.get('/retrieve', (req, res, next) => {
  Idea.queryIdeas({ idea: 'Red Mouse', description: 'A red mouse.' });

  res.send('Hello');
});

module.exports = router;
