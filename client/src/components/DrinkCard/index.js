
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


// TO DO: MAKE MORE VARIABLES FOR THE IMAGE USING THE ABOVE FORMAT


function DrinkCard(props) {
  const{drink} = props
  return (
    <div class="single-card">
    <Card style={{ width: '18rem', }}>
      <Card.Img class="card-image" variant="top" src={drink.image} />
      <Card.Body>
        <div>
          <Card.Title>{drink.name}</Card.Title>
          <Card.Text>
            {drink.description}
          </Card.Text>
        </div>
        <div className="pt-2">
          <Button className='purple-button' variant="primary">Add {drink.name} to cart</Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  );
};

export default DrinkCard;