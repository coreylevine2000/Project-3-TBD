// import Margarita from '../../images/margarita.jpg'
// import OldFashion from '../../images/oldfashion.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// TO DO: MAKE MORE VARIABLES FOR THE IMAGE USING THE ABOVE FORMAT






function DrinkCard(props) {
  const{drink} = props
  return (
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{drink.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default DrinkCard;