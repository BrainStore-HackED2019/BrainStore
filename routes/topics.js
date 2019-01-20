const express = require('express');

const Topic = require('../models/topic');

const router = express.Router();

router.post('/send', (req, res, next) => {
  const newTopic = new Topic({
    topic: req.body.topic
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
  const topicCountQuery = Topic.countDocuments();
  const topicQuery = Topic.findOne();

  topicCountQuery.exec((err, count) => {
    if (err) return err;

    const random = Math.floor(Math.random() * count);

    topicQuery.skip(random).exec((err, topic) => {
      if (err) return err;

      console.log('Random topic: ', topic);
      res.json(topic);
    });
  });
  console.log('Hello')
});

router.get('/list', (req, res, next) => {
  Topic.find().exec((err, topics) => {
    if (err) return err;

    console.log('List of topics: ', topics)
    res.json(topics)
  });
});

router.get('/list/:id', (req, res, next) => {
  Topic.findOne({ _id: req.params.id }).exec((err, topic) => {
    if (err) return err;

    console.log('Topic requested: ', topic);
    res.json(topic);
  });
});

router.get('/specific', (req, res, next) => {
  const query = Topic.querySpecificTopic({ topic: 'Hackathon' });

  console.log('Query? ', query)
  res.send('Specific');
});

module.exports = router;
