const express = require('express');

const Topic = require('../models/topic');

const router = express.Router();

router.post('/send', (req, res, next) => {
  let newTopic = new Topic({
    topic: 'Game Show'
  });

  Topic.addTopic(newTopic, (err, topic) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to add topic' });
    } else {
      res.json({ success: true, msg: 'Topic added' });
    }
  });
});

router.get('/random', (req, res, next) => {
  Topic.queryRandomTopic();

  res.send('Random');
})

router.get('/specific', (req, res, next) => {
  const query = Topic.querySpecificTopic({ topic: 'Hackathon' });

  console.log('Query? ', query)
  res.send('Specific');
})

module.exports = router;
