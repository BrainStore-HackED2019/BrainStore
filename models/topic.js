const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  topic: String
});

const Topic = module.exports = mongoose.model('Topic', topicSchema);

module.exports.addTopic = (newTopic, callback) => {
  newTopic.save(err => {
    if (err) return err;
    console.log('Added topic: ', newTopic.topic);
  });
};

module.exports.getTopicById = () => {

};

module.exports.queryRandomTopic = () => {
  Topic.count({}, (err, count) => {
    if (err) return err;

    console.log('Count: ', count);
    const random = Math.floor(Math.random() * count);

    Topic.findOne().skip(random).exec((err, topic) => {
      if (err) return err;

      console.log('Random topic: ', topic);
    });
  });
};

// topic is a Topic object
module.exports.querySpecificTopic = (topic) => {
  Topic.findOne({ ...topic }, (err, topic) => {
    if (err) return err;

    console.log('Specific topic: ', topic);
  });
};

module.exports.getListOfTopics = () => {

};