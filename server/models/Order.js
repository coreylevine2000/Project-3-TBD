const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const drinkSchema = require('./Drink.js').schema


const orderSchema = new Schema({
    datePurchased: {
        type: Date,
        default: Date.now
    },
    drinks: [drinkSchema]
})

const Order = model('Order', orderSchema);

module.exports = Order;