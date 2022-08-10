
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// TO DO: MAKE MORE VARIABLES FOR THE IMAGE USING THE ABOVE FORMAT






function DrinkCard(props) {
  const{drink} = props
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={drink.image} />
      <Card.Body>
        <Card.Title>{drink.name}</Card.Title>
        <Card.Text>
          {drink.description}
        </Card.Text>
        <Button variant="primary">Purchase {drink.name}</Button>
      </Card.Body>
    </Card>
  );
};

export default DrinkCard;