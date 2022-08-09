import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Margarita from '../../images/margarita.jpg';
import OldFashion from '../../images/oldfashion.jpg';
import Martini from '../../images/martini.jpg';



const drinks = [
  {
      name: 'Margarita',
      description: 'A classic lime cocktail with lime juice, tequila and agave syrup.',
      image: Margarita,
      // category: categories[0]._id,
      price: 7.50,
      quantity: 1
  },
]

export default function DrinkCard() {
  return (
    <section className="flex-container" id="work">
      <section className="content-section" id="work-card-container">
        {drinks.map((drink, index) => (
          <div
            className={
              index === 0 ? "work-card big-card" : "work-card small-card"
            }
          >
              <h3>{drink.name}</h3>
              <img src={drink.image}  />
              <p>{drink.description}</p>
              <p>{drink.price}</p>
            
            {/* <a
              className="repo-link"
              rel="noreferrer"
              target="_blank"
            >
              <h4>Repo Link</h4>
            </a> */}
          </div>
        ))}
      </section>
    </section>
  );
}