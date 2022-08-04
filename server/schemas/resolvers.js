const { AuthenticationError } = require('apollo-server-express');
const { Drink, Options, Order, User } = require('./models');
const { signToken } = require('../utils/auth')