const mongoose = require('mongoose');
const { Schema } = mongoose;

const optionsSchema = new Schema ({
        name: {
            type: String,
            trim: true
        }
    });

const Options = model('Options', optionsSchema);

module.exports = Options;