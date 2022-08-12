import gql from "graphql-tag";


export const QUERY_DRINKS = gql`
  query getDrinks($option: ID) {
    drinks(option: $option) {
      _id
      name
      description
      price
      image
      option {
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
      option {
        name
      }
    }
  }
`;

export const QUERY_OPTIONS = gql`
  {
    option {
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