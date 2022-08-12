const mongoose = require('mongoose');

const { Schema } = mongoose;

const drinkSchema = require('./Drink.js')


const orderSchema = new Schema({
    datePurchased: {
        type: Date,
        default: Date.now
    },
    drinks: { type: [drinkSchema.schema], required: true },
})

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;