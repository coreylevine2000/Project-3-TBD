import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Button, Container, Row, Col, Image } from 'react-bootstrap';


function HomeStrap(props) {

    return (
        <Jumbotron>
            <Container>
                <Row>
                    <Col>
                        <Image src=""/>
                        <h1 className='mt-4'>Start your Order</h1>
                        <h2>{"Who is up for a Drink"}<br></br>See Menu and Ready, Set, DRINK!!!</h2>
                        <Button className='mt-4' variant='secondary' href='/menu' size='lg'>
                            Lets Make A Party
                        </Button>
                    </Col>
                </Row>

            </Container>
        </Jumbotron>

    )
}

export default HomeStrap;
