const { qql } = require('apollo-server-express');


const typeDefs = gql `
type User {
    _id: ID
    username: String!
    email: String!
    savedOrders: [Order]
}

type Drink {
    _id: ID
    name: String!
    description: String
    image: String
    price: Float
    options: Option

}

type Option {
    _id: ID
    name: String
}

type Order {
    _id: ID
    purchaseDate: String
    drinks: [Drink]
}

type Checkout {
    session: ID
}

type Auth {
    token: ID!
    user: User
}

type Query {
    options: [Options]
    drinks(options: ID, name: String): [Drink]
    order(_id:ID,): Order
    checkout(drinks: [ID]!): Checkout
    user: User

}
type Mutation {
    addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    addDrink(drinks: [ID]!): Order

}
`

module.exports = typeDefs;