import React, { useEffect } from 'react';
// import { Stack, Box } from '@chakra-ui/core';
import Auth from "../utils/auth";
import Checkout from '../components/Checkout';
import { useStoreContext } from "../utils/GlobalState.js";
import { ADD_MULTIPLE_TO_CHECKOUT } from "../utils/actions";
import { idbPromise } from "../utils/helpers";
// import { loadStripe } from "@stripe/stripe-js";
import { QUERY_CHECKOUT } from "../utils/queries"
import { useLazyQuery } from '@apollo/react-hooks';
// import { Jumbotron, Button, Card } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
// import { Row, Col, Container } from 'reactstrap';

// const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const MyDrinks = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  console.log(state);
  useEffect(() => {
    async function getCheckout() {
      const checkout = await idbPromise('checkout', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CHECKOUT, drinks: [...checkout] })
    };
    // if (!state.checkout.length) {
    //   getCheckout();
    // }
  }, [state.checkout, dispatch]);

  // useEffect(() => {
  //   if (data) {
  //     stripePromise.then((res) => {
  //       res.redirectToCheckout({ sessionId: data.checkout.session })
  //     })
  //   }
  // }, [data]);

  function calculateTotal() {
    let sum = 0;
    console.log(state.checkout);
    state.checkout.forEach(item => {
      console.log(item);
      if (item.customize.size === "Large (+$1.00)") {
        sum += 1
      }
      sum += item.price;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const drinkIds = [];

    state.checkout.forEach((item) => {
      drinkIds.push(item._id);
    });

    getCheckout({
      variables: { drinks: drinkIds }
    });
  }

  return (

 <section>  
  <h2>I'm scared</h2>
 </section>

  );
};

export default MyDrinks;