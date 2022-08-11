const mongoose = require('mongoose');

const { Schema } = mongoose;

const optionsSchema = require('./Options').schema

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
    option: [optionsSchema]


})

const Drink = model('Drink', drinkSchema)

module.exports = Drink;