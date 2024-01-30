import React, {createContext, useContext, useReducer} from 'react';
import {sumProducts} from "../helper/Helpers.js";

const ContextCards = createContext()

const initialState = {
    selecteditem: [],
    itemsCounter: 0,
    total: 0,
    checkout: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.selecteditem.find(item => item.id === action.payload.id)) {
                state.selecteditem.push({...action.payload, quantity: 1})
            }
            return {
                ...state,
                ...sumProducts(state.selecteditem),
                checkout: false
            }
        case "REMOVE_ITEM":
            const removeitem = state.selecteditem.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                selecteditem: [...removeitem],
                ...sumProducts(removeitem)
            }
        case "INCREASE":
            const increaseindex = state.selecteditem.findIndex(item => item.id === action.payload.id)
            state.selecteditem[increaseindex].quantity++;
            return {
                ...state,
                ...sumProducts(state.selecteditem),
            }
        case "DECREASE":
            const decreaseindex = state.selecteditem.findIndex(item => item.id === action.payload.id)
            state.selecteditem[decreaseindex].quantity--;
            return {
                ...state,
                ...sumProducts(state.selecteditem),
            }
        case "CHECKOUT":
            return {
                selecteditem: [],
                itemsCounter: 0,
                total: 0,
                checkout: true,
            }
    }
}

const CardContext = ({children}) => {


    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <ContextCards.Provider value={{state, dispatch}}>
            {children}
        </ContextCards.Provider>
    );
};

const useCard = () => {
    const {state, dispatch} = useContext(ContextCards)
    return [state, dispatch]

}

export default CardContext;
export {useCard}