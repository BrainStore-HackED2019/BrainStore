const mongoose = require('mongoose');

const IdeaSchema = mongoose.Schema({ 
  idea: 'string', 
  description: 'string' 
});

const Idea = module.exports = mongoose.model('Idea', IdeaSchema);

module.exports.addIdea = (newIdea, callback) => {
  newIdea.save(err => {
    if (err) return handleError(err);
    console.log('Added idea to DB');
  });
};