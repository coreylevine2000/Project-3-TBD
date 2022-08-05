import { startTransition, useReducer } from "react";
import {
    UPDATE_DRINKS,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    ADD_MULTIPLE_TO_CART,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
    CLEAR_CART
  } from "./actions";

export const reducer = ( state, action ) => {
    switch (action.type) {
        case UPDATE_DRINKS:
            return {
                ...state,
                drinks: [...action.drinks],
            };

        case ADD_TO_CART:
            return {
                ...state,
                cartOpen: true,
                cart: [...state.cart, action.item],
            };

        case ADD_MULTIPLE_TO_CART:
            return {
                ...state,
                cart: [...state.cart, ...action.drinks],
            };

        case REMOVE_FROM_CART:
            let newState = state.cart.filert(iser => {
                return item._id !== action._id;
            });

            return {
                ...state,
                cartOpen: newState.length > 0,
                cart: newState
            };

        case CLEAR_CART:
            return {
                ...state,
                cartOpen: false,
                cart: []
            };

        case UPDATE_CATEGORIES:
            return {
                ...state,
                catagories: [...action.catagories],
            };

        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            }

        default:
            return state;
    }
};

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState)
}