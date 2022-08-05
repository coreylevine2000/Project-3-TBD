import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from "../utils/queries";
import {  Box, Heading, Text } from '@chakra-ui/core';

import { Jumbotron, Button, Container, Row, Col } from 'react-bootstrap';
import { Card, CardText, CardImg } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function OrderList({ name, price, ...rest }) {
  return (
    <Box p={5} shadow="lg" borderWidth="5px" {...rest}>
      <Heading fontSize="xl">{name}</Heading>
      <Text mt={4}>{price}</Text>
    </Box>
  );
}

function History() {
  const { data } = useQuery(QUERY_USER);
  let user;
  console.log(data)
  if (data) {
    user = data.user;
  }

  return (

    <Jumbotron>
      <Container>
        <Row>
          <Col className="text-center">
            <Button className="m-4" variant='secondary' href='/menu' size='lg' fluid>
              Order Drinks
            </Button>
            {user ? (
              <>
                {<h1 className='mb-4 text-center'>{user.firstName} {user.lastName}'s Orders</h1>}
                {user.orders.map((order) => (
                  <Col key={order._id}>
                    <Card>
                      <h3>{new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</h3>
                      {order.drinks.map(({ _id, image, name, price }, index) => (
                        <Row className="justify-content-md-center">
                        <Col xs={6} md={4} key={index}>
                          <a href='/menu'>
                            <CardImg src={`${image}`} alt={name} />
                            <CardText >
                              {name}
                              <br></br>
                                                ${price}
                            </CardText>
                          </a>
                        </Col>
                        </Row>
                      ))}
                    </Card>
                  </Col>
                ))}
 
              </>
            ) : null}
          </Col>
        </Row>
      </Container>
    </Jumbotron>

  );
};


export default History;