import { gql } from '@apollo/client';

export const QUERY_DRINKS = gql`
  query getDrinks($options: ID) {
    drinks(options: $options) {
      _id
      name
      description
      price
      image
      options {
        _id
      }
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
      category {
        name
      }
    }
  }
`;

export const QUERY_OPTIONS = gql`
  {
    options {
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

