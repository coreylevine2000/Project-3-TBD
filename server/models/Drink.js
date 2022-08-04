const Schema = require('mongoose');

const optionsSchema = require('./Options')

const drinkSchema = newSchema({
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
    category: [optionsSchema]

})

const Drink = model("Drink", drinkSchema)