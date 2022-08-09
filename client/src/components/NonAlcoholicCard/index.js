
import Margarita from '../../images/margarita.jpg';

const drinks = [
  {
      name: 'Margarita',
      description: 'A classic lime cocktail with lime juice, tequila and agave syrup.',
      image: Margarita,
      // category: categories[0]._id,
      price: 7.50,
      quantity: 1
  },
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
            
          </div>
        ))}

      </section>
    </section>
  );
}