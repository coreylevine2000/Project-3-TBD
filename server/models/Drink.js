const mongoose = require('mongoose');

const { Schema } = mongoose;

const optionsSchema = require('./Options')

const drinkSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    image: {
        type: String
    },
    options: { type: [optionsSchema.schema], required: true },
        // ref: 'Options'
    


})

const Drink = mongoose.model('Drink', drinkSchema)

module.exports = Drink;