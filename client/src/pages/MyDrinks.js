import React, { useEffect } from 'react';
import Auth from "../utils/auth";
import Checkout from '../components/Checkout';
import { useStoreContext } from "../utils/GlobalState.js";
import { ADD_MULTIPLE_TO_CHECKOUT } from "../utils/actions";
import { idbPromise } from "../utils/helpers";
import { QUERY_CHECKOUT } from "../utils/queries"
import { useLazyQuery } from '@apollo/react-hooks';

import { Container, Row, Col, Card, Button } from 'react-bootstrap'

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

<Container>
      <h1 className='mb-4 text-center'>Cart</h1>
        <Row>
          <Col>
            
            <Card>
              {state.checkout.map(item => (
                <Checkout key={item._id} item={item} />
              ))}
            </Card>
          </Col>
          <Col>
            <Card pl={3}>
              <h2 className='mt-4'>Total : ${calculateTotal()}</h2>
              {Auth.loggedIn() ?
                <Button type="submit" className='mt-4' variant='secondary' size='lg' onClick={submitCheckout}>Checkout
                        </Button>
                :
                <span>Log in to check out!</span>
              }
            </Card>

          </Col>
        </Row>

      </Container>
  );
};

export default MyDrinks;