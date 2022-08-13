const { gql } = require('apollo-server-express');


const typeDefs = gql`
type User {
    _id: ID
    username: String!
    email: String!
    firstName: String!
    lastName: String!
    orders: [Order]
}

type Drink {
    _id: ID
    name: String!
    description: String
    image: String
    price: Float
    options: [Options]

}

type Options {
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
    order(_id:ID,): Order
    checkout(drinks: [ID]!): Checkout
    user: User

}
type Mutation {
    addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    addDrink(drinks: [ID]!): Order

}
`

module.exports = typeDefs;