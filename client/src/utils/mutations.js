import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_THOUGHT = gql`
  mutation addThought($thoughtText: String!) {
    addThought(thoughtText: $thoughtText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const QUERY_DRINKS = gql`
  query getDrinks($options: ID) {
    drinks(options: $options) {
      _id
      name
      description
      price
      image
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($drinks: [ID]!) {
    checkout(drinks: $drinks) {
      session
    }
  }
`;

export const QUERY_ALL_DRINKS = gql`
  {
    drinks {
      _id
      name
      description
      price
      image
      option {
        name
      }
    }
  }
`;

export const QUERY_ORDERS = gql`
  {
    orders {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        drinks {
          _id
          name
          description
          price
          image
        }
      }
    }
  }
`;