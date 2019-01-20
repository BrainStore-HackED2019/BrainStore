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