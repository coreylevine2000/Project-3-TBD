import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useQuery } from '@apollo/client';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import DrinkCard from '../components/DrinkCard';
import ChooseType from '../components/ChooseType';

  // {
  //     name: 'Lavender Lemonade',
  //     description: 'A lavender infused lemonade',
  //     image: 'client/public/Images/lavenderlemonade.jpg',
  //     // category: categories[1]._id,
  //     price: 4.25,
  //     quantity: 1
  // },
  // {
  //     name: 'zombie',
  //     description: 'A famous tropical rum cocktail. It is a tasty blend of rum and fruit juices.',
  //     image: 'client/public/Images/zombiecocktail.jpg',
  //     // category: categories[0]._id,
  //     price: 9.25,
  //     quantity: 1
  // },
  
// ]




const Home = () => {


  return (
    <main>

    <Container>
      <Row>
        <ChooseType />
        {/* <div class="drink-card-display">
        {drinks.map((drink) =>  (<DrinkCard drink={drink}/>))}
        </div> */}

      </Row>
    </Container>

   
    </main>
  );
};

export default Home;
