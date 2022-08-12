const { AuthenticationError } = require('apollo-server-express');
const { Drink, Options, Order, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      options: async () => {
        return await Options.find()
      },
      drinks: async (parent, { category, name }) => {
        const params = {};
        if (category) {
            params.category = category;
        }
        if (name) {
            params.name = {
                $regex: name
            };
        }
        return await Drink.find(params).populate('category');
      },
    //   drink: async (parent, { _id }) => {
        // return await Product.findById(_id).populate('category');
    //   },
      order: async (parent, { _id }, context) => {
        if (context.user) {
            const user = await User.findById(context.user._id).populate({
                path: 'orders.drinks'
            });
            return user.orders.id(_id)
        }
        throw new AuthenticationError('Not logged in');
      },
      user: async(parent, args, context) => {
        if(context.user) {
            const user = await User.findById(context.user._id).populate({
                path: 'orders.drinks',
                populate: 'category'
            });
            user.orders.sort((x, y) => y.purchaseDate - x.purchaseDate);
            return user;
        }
      }
     
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }
            throw new AuthenticationError('Not logged in');
        },
        login: async(parent, {email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Wrong email or password')
            }
            const correctPassword = await user.isCorrectPassowrd(password);

            if (!correctPassword) {
                throw new AuthenticationError('Wrong Password')
            }
            const token = signToken(user);
            return { token, user };
        },
        addDrink: async (parent, { drinks }, context) => {
            console.log(context);
            if(context.user) {
                const order = new Order ({ drinks });
                await User.findByIdAndUpdate(context.user._id, { $push: { orders: order }});
                return order;
            }
            throw new AuthenticationError('Not logged in!')
        }
    }
}

module.exports = resolvers;