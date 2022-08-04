import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container,
    Row,
    Col,
    Image,
    Button
} from 'react-bootstrap';

function NoMatchStrap(props) {
  return(
    <Container fluid>
      <Row>
        <Col className='text-center'>
        <h1 className="mt-4">You have strayed too far!</h1>

        
          <Button className="m-4" variant='secondary' href='/menu' size='lg' fluid>
              Bet back to the menu!
          </Button>
          
        </Col>
     
      </Row>
    </Container>

  )
}

export default NoMatchStrap;
