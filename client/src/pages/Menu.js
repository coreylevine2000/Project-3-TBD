import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';


import CategoryMenu from "../components/Menu";
import DrinkList from "../components/DrinkList";
//import DrinkCard from '../components/DrinkCard';
import { QUERY_DRINKS } from '../utils/queries';
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_DRINKS } from "../utils/actions";
import { idbPromise } from "../utils/helpers";

const Menu = () => {
    const [state, dispatch] = useStoreContext();
    const { loading, data } = useQuery(QUERY_DRINKS);
console.log("state", state);
    useEffect(() => {
        if (data) {
            dispatch({
                type: UPDATE_DRINKS,
                drinks: data.drinks
            });

            data.drinks.forEach((item) => {
                idbPromise('drinks', 'put', item);
            });
        } else if (!loading) {
            idbPromise('drinks', 'get').then((drinks) => {
                dispatch({
                    type: UPDATE_DRINKS, 
                    drinks: drinks
                })
            })
        }
    }, [loading, data, dispatch]);

    return (
      <section>
        <h1>Hey</h1>
      </section>
    );
};


export default Menu;
