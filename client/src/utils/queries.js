import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      firstName
      lastName
      orders {
        _id
        purchaseDate
      }
      drinks {
        _id
        name
        description
        price
      }
    }
  }
`;

export const QUERY_SINGLE_DRINK = gql`
  query getDrinks($category: ID) {
    drinks {
      _id
      name
      description
      price
      image
      options {
        Liquor
        Beer
        Non-Alcoholic
      }
    }
  }
`;

export const QUERY_DRINKS = gql`
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

export const QUERY_CHECKOUT = gql`
  query getCheckout($drinks: [ID]!) {
    checkout(drinks: $drinks) {
      session
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
