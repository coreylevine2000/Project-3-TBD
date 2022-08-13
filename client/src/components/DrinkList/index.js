import React, { useEffect } from "react";
import DrinkCard from "../DrinkCard";
import { useStoreContext } from "../../utils/GlobalState";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_DRINKS } from "../../utils/queries";
import Margarita from '../../images/margarita.jpg';
import OldFashion from '../../images/oldfashion.jpg';
import Martini from '../../images/martini.jpg';
import LongIslandTea from '../../images/longislandicetea.jpg';
import Gingerale from '../../images/gingerale.jpg';
import VMojito from '../../images/viginmojito.jpg';
import Suicide from '../../images/suicidenoalcohol.jpg';
import LavenderLemonade from '../../images/lavenderlemonade.jpg';
import Terrapin from '../../images/terrapin.jpg';
import Zombie from '../../images/zombiecocktail.jpg';
import CreatureComforts from '../../images/creaturecomforts.jpg';
import Sprite from '../../images/sprite.jpg';



const cocktails = [
  {
      name: 'Margarita',
      description: 'A classic lime cocktail with lime juice, tequila and agave syrup.',
      image: Margarita,
      price: 7.50,
      quantity: 1
  },
  {
      name: 'Old Fashion',
      description: 'Oldy but goldy drink Traditionally made with bourbon or rye whiskey, lightly sweetened with sugar and aromatised with bitters.',
      image: OldFashion,
      price: 9.50,
      quantity: 1
  },
  {
      name: 'Martini',
      description: 'a cocktail made with gin and vermouth, and garnished with an olive or a lemon twist.',
      image: Martini,
      price: 8.75,
      quantity: 1
  },
  {
      name: 'Long Island Ice Tea',
      description: 'Cocktail made with vodka, tequila, light rum, triple sec, gin, and a splash of cola, which gives the drink the same hue as iced tea.',
      image: LongIslandTea,
      price: 9.00,
  },

  {
      name: 'Zombie',
      description: 'A famous tropical rum cocktail. It is a tasty blend of rum and fruit juices.',
      image: Zombie,
      price: 9.25,
  },
];

const beers = [
  {
      name: 'Merica Beer',
      description: 'Guns, God, and Beer',
      image: Suicide,
      price: 2.25,
  },
  {
      name: 'GingerAle',
      description: 'Sweetened carbonated beverage of which the predominating flavour and pleasant warmth are derived mainly from the underground stem, or rhizome, of ginger Zingiber officinale.',
      image: Gingerale,
      price: 3.50,
  },
  {
      name: 'Terrapin Luau Krunkles IPA',
      description: 'An IPA beer infused with tartness from passionfruit and a firm hop bitterness that balances the pale malt base. ',
      image: Terrapin,
      price: 3.50,
  },
  {
      name: 'Automatic Creature Comforts IPA',
      description: 'Automatic is a bright, refreshing, and drinkable American Pale Ale. It features a delicate and balanced hop flavor and aroma with notes of berry, citrus, and pine.',
      image: CreatureComforts,
      price: 3.50,
  },

  

];

const wimps = [
  {
      name: 'Suicide',
      description: 'A cup filled to the brim with every single soft drink available at a restaurants soda machine',
      image: Suicide,
      price: 2.25,
  },
  {
      name: 'Ginger ale',
      description: 'A carbonated beverage made with ginger root and a sweetener.',
      image: Gingerale,
      price: 3.50,
  },
  {
      name: 'Virgin Mojito',
      description: 'A refreshing drink blend of mint and lemon flavours with no rum',
      image: VMojito,
      price: 5.75,
  },
  {
    name: 'Lavender Lemonade',
    description: 'A lavender infused lemonade',
    image: LavenderLemonade,
    price: 4.25,
  },
  {
    name: 'Sprite',
    description: 'Classic Fountain Drink',
    image: Sprite,
    price: 4.25,
  },
];

function DrinkList(props) {
  const{drinkType} = props;

  let drinks = [];

  switch(drinkType) {
    case 'cocktail':
        drinks = cocktails;
      break;
    case 'beer':
      drinks = beers;
      break;
    case 'non-alcoholic':
      drinks = wimps;
      break;
  }
  return (
      <div class="drink-card-display ">
      {
      
      drinks.map((drink) =>  (<DrinkCard drink={drink}/>))}
      </div>
  );
}






function DrinkListComponent({drinks}) {
  const [state, dispatch] = useStoreContext();

  const { currentOption } = state;

  const { loading, data } = useQuery(QUERY_DRINKS);



  function filterDrinks() {
    if (!currentOption) {
      return state.drinks;
    }

    return state.drinks.filter(drink => drink.option._id === currentOption);
  }

}

export default DrinkList;