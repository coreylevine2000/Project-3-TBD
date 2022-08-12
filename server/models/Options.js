const mongoose = require('mongoose');

const { Schema } = mongoose;

const optionSchema = new Schema({
  name: {
    type: String,
    trim: true
  }
});

const Options = mongoose.model('Options', optionSchema);

module.exports = Options;