const mongoose = require('mongoose');
const { Schema } = mongoose;

const optionsSchema = new Schema (
    {
        name: {
            type: string,
            required: true,
            trim: true
        }
    }
)