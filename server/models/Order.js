const mongoose = require('mongoose');

const { Schema } = mongoose;

const drinkSchema = require('./Drink.js')


const orderSchema = new Schema({
    datePurchased: {
        type: Date,
        default: Date.now
    },
    drinks: [drinkSchema]
})

const Order = model('Order', orderSchema);

module.exports = Order;