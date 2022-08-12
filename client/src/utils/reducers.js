import { useReducer } from "react";

import {
    UPDATE_DRINKS,
    ADD_TO_CHECKOUT,
    REMOVE_FROM_CHECKOUT,
    ADD_MULTIPLE_TO_CHECKOUT,
    UPDATE_OPTIONS,
    UPDATE_CURRENT_OPTION,
    CLEAR_CHECKOUT  
} from "./actions";


export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_DRINKS:
            return {
                ...state,
                drinks: [...action.drinks]
            };
        case ADD_TO_CHECKOUT:
            return {
                ...state,
                checkoutOpen: true,
                checkout: [...state.cart, action.item]
            
            };
        case ADD_MULTIPLE_TO_CHECKOUT:
            return {
                ...state,
                cart: [...state.checkout, ...action.drinks]
            };
        // case REMOVE_FROM_CHECKOUT:
        //     let newState = state.checkout.filter(item => {
        //         return item._id !== action._id;
        //     });
        //     return {
        //         ...state,
        //         checkoutOpen: newState.length > 0,
        //         checkout: newState
        //     };
        case CLEAR_CHECKOUT:
            return {
                ...state,
                checkoutOpen: false,
                checkout: []
            };
        case UPDATE_OPTIONS:
            return {
                ...state,
                options: [...action.options]
            };
        case UPDATE_CURRENT_OPTION:
            return {
                ...state,
                currentOption: action.currentOption
            }

            default: return state;
            

            }
    
}

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState)
  }
