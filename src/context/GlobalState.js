import React, { createContext} from 'react';
import { useReducer } from 'react';

const initialState = {
    transactions:[]
}

const AppReducer =(state,action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return {
              ...state,
              transactions: [action.payload, ...state.transactions]
            }
          case 'DELETE_TRANSACTION':
              return {
                  ...state,
                  transactions: state.transactions.filter(transaction=> transaction.id !== action.payload)
              }

        default:
           return state;
    }
}

//create context
export const GlobalContext =createContext(initialState);

//Provider Component
export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer (AppReducer, initialState);


    function deleteTransaction(id) {
        dispatch({
            type:"DELETE_TRANSACTION",
            payload:id
        })
    }
    function addTransaction(transaction) {
        dispatch({
          type: 'ADD_TRANSACTION',
          payload: transaction
        });
      }

 return (<GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
    addTransaction
 }} >
     {children}
 </GlobalContext.Provider>)

}