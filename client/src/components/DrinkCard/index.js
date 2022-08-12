
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


// TO DO: MAKE MORE VARIABLES FOR THE IMAGE USING THE ABOVE FORMAT


const styles = {
  buttonStyle: {
    background: 'Purple',
  },
};



function DrinkCard(props) {
  const{drink} = props
  return (
    <Col>
    <Card style={{ width: '18rem', }}>
      <Card.Img variant="top" src={drink.image} />
      <Card.Body>
        <Card.Title>{drink.name}</Card.Title>
        <Card.Text>
          {drink.description}
        </Card.Text>
        <Button style={styles.buttonStyle} variant="primary">Add {drink.name} to cart</Button>
      </Card.Body>
    </Card>
    </Col>
  );
};

export default DrinkCard;