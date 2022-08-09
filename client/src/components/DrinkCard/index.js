import Margarita from '../../images/margarita.jpg'
import OldFashion from '../../images/oldfashion.jpg'

// TO DO: MAKE MORE VARIABLES FOR THE IMAGE USING THE ABOVE FORMAT




export default function DrinkCard() {
  return (
    <section className="flex-container" id="work">
      {/* <section className="content-section" id="work-card-container"> */}
        {drinks.map((drink, index) => (
          <div className="drinkCard" id="word-card-container" >
              <h2>{drink.name}</h2>
              <img src={drink.image}  />
              <h3>{drink.price}</h3>
            
       
          </div>
        ))}
      </section>
  );
}