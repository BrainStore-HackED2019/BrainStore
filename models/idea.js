const mongoose = require('mongoose');

const ideaSchema = new mongoose.Schema({ 
  idea: 'string', 
  description: 'string'
});

const Idea = module.exports = mongoose.model('Idea', ideaSchema);

module.exports.addIdea = (newIdea, callback) => {
  newIdea.save(err => {
    if (err) return handleError(err);
    console.log('Added idea to DB');
  });
};

// idea is an Idea object
module.exports.queryIdeas = (idea) => {
  Idea.findOne({ ...idea }, (err, idea) => {
    if (err) return err;
    console.log(idea);
  });
};