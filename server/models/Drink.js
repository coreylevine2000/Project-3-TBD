const Schema = require('mongoose');

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
    Options: [optionsSchema]

})

const Drink = model('Drink', drinkSchema)

module.exports = Drink;