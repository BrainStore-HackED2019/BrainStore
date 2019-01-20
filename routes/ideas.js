const express = require('express');

const Idea = require('../models/idea');

const router = express.Router();

router.get('/test', (req, res, next) => {
  res.send('TEST');
});

router.post('/send', (req, res, next) => {
  let newIdea = new Idea({
    idea: req.body.title,
    description: req.body.description
  });

  Idea.addIdea(newIdea, (err, idea) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to add idea' });
    } else {
      res.json({ success: true, msg: 'Idea added' });
    }
  });
});

module.exports = router;
