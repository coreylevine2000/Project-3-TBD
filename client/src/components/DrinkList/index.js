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
      quantity: 1
  }
];

const beers = [
  {
    name: 'Merica Beer',
    description: 'Guns, God, and Beer',
    image: Suicide,
    price: 2.25,
    quantity: 1
  },
  {
      name: 'Wheat Juice',
      description: 'Sad.',
      image: Gingerale,
      price: 3.50,
      quantity: 1
  }

];

const wimps = [
  {
      name: 'Suicide',
      description: 'A cup filled to the brim with every single soft drink available at a restaurants soda machine',
      image: Suicide,
      // category: categories[1]._id,
      price: 2.25,
      quantity: 1
  },
  {
      name: 'Ginger ale',
      description: 'A carbonated beverage made with ginger root and a sweetener.',
      image: Gingerale,
      // category: categories[1]._id,
      price: 3.50,
      quantity: 1
  },
  {
      name: 'Virgin Mojito',
      description: 'A refreshing drink blend of mint and lemon flavours with no rum',
      image: VMojito,
      // category: categories[1]._id,
      price: 5.75,
      quantity: 1
  }
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