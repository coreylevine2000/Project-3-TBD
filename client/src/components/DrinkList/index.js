import React, { useEffect } from "react";
import DrinkCard from "../DrinkCard";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_DRINKS } from "../../utils/actions";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_DRINKS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';



function DrinkList({drinks}) {
  const [state, dispatch] = useStoreContext();

  const { currentOption } = state;

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
    if (!currentOption) {
      return state.drinks;
    }

    return state.drinks.filter(drink => drink.option._id === currentOption);
  }

  // return (
  //   <Grid container spacing={2}>
  //   <Grid item xs={8}>
  //       <h2>Pick your drink</h2>
  //       {state.drinks.length ? (
  //           <Box >
  //               {filterDrinks().map(drink => (
  //                   <DrinkCard
  //                   key= {drink._id}
  //                   item={drink}
  //                   />
  //               ))}
  //           </Box>
  //       ) : (
  //           <h3>You haven't added any drinks yet!</h3>
  //       )}
        
  //   </Grid>
  //   </Grid>
  // );
}

export default DrinkList;