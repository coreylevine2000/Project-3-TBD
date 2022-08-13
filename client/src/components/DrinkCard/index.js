
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


// TO DO: MAKE MORE VARIABLES FOR THE IMAGE USING THE ABOVE FORMAT
// const handleAddToCart = () => {
//   onAddToCart(product.id, 1);
// }

function DrinkCard(props) {
  
  const{drink} = props
  const handleAddToCart = () => {
    onAddToCart(drink.id, 1);
  }

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
          <Button 
           name="Add to cart"
           className="product__btn"
           onClick={handleAddToCart}
          >Add {drink.name} to cart</Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  );
};

export default DrinkCard;