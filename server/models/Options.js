const mongoose = require('mongoose');

const { Schema } = mongoose;

const optionSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Options = mongoose.model('Options', optionSchema);

module.exports = Options;