import React, { useEffect } from 'react';
import { Stack, Box } from '@chakra-ui/core';
import Auth from "../utils/auth";
// import CartItem from '../components/CartItem';
import { useStoreContext } from "../utils/GlobalState.js";
import { ADD_MULTIPLE_TO_CART } from "../utils/actions";
import { idbPromise } from "../utils/helpers";
import { loadStripe } from "@stripe/stripe-js";
import { QUERY_CHECKOUT } from "../utils/queries"
import { useLazyQuery } from '@apollo/react-hooks';
// import { Jumbotron, Button, Card } from 'react-bootstrap';


const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const MyOrder = () => {
  // const [state, dispatch] = useStoreContext();
  // const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  // console.log(state);
  // useEffect(() => {
  //   async function getCart() {
  //     const cart = await idbPromise('cart', 'get');
  //     dispatch({ type: ADD_MULTIPLE_TO_CART, drinks: [...cart] })
  //   };
  //   if (!state.cart.length) {
  //     getCart();
  //   }
  // }, [state.cart.length, dispatch]);

  // useEffect(() => {
  //   if (data) {
  //     stripePromise.then((res) => {
  //       res.redirectToCheckout({ sessionId: data.checkout.session })
  //     })
  //   }
  // }, [data]);

  // function calculateTotal() {
  //   let sum = 0;
  //   console.log(state.cart);
  //   state.cart.forEach(item => {
  //     console.log(item);
  //     if (item.customize.size === "Large (+$1.00)") {
  //       sum += 1
  //     }
  //     sum += item.price;
  //   });
  //   return sum.toFixed(2);
  // }

  // function submitCheckout() {
  //   const drinkIds = [];

  //   state.cart.forEach((item) => {
  //     drinkIds.push(item._id);
  //   });

  //   getCheckout({
  //     variables: { drinks: drinkIds }
  //   });
  // }

  return (

<div>
    <h1>This is what you are ordering!!!</h1>
</div>

  );
};

export default MyOrder;