const mongoose    = require('mongoose');

const quoteSchema = new mongoose.Schema({
  author: String,
  body: String
});

module.exports = mongoose.model("Quote", quoteSchema);