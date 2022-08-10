import React, { useEffect } from "react";
import DrinkCard from "../DrinkCard";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_DRINKS } from "../../utils/actions";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_DRINKS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";


function DrinkList({drinks}) {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_DRINKS);

  useEffect(() => {
    if(data) {
      dispatch({
           type: UPDATE_DRINKS,
          drinks: data.drinks
        });
        data.drinks.forEach((drink) => {
          idbPromise('drinks', 'put', drink);
        });
    } else if (!loading) {
      idbPromise('drinks', 'get').then((drinks) => {
        dispatch({
          type: UPDATE_DRINKS,
         drinks: drinks
       });
      });
    }
  }, [data, loading, dispatch]);

  function filterDrinks() {
    if (!currentCategory) {
      return state.drinks;
    }

    return state.drinks.filter(drink => drink.category._id === currentCategory);
  }

  return (
    <section>
      <h2>
        YO
      </h2>
    </section>
  );
}

export default DrinkList;