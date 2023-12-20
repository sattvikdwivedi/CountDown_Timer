import React,{createContext,useReducer} from 'react';
import AppReducer from './AppReducer'
const initialState={
    transactions:[
        { id: 1, text: 'Flower', amount: -20 }
    ]
}
export const GlobalContext= createContext(initialState);

 export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState);
    //Actions 
    function deleteTransaction(id){
        dispatch({
            type:'Delete_Transaction',
            payload:id
        })
    }
    function AddTransaction(transaction){
        dispatch({
            type:'Add_Transaction',
            payload: transaction
        });
    }
    return (<GlobalContext.Provider value={{
            transactions:state.transactions,
            deleteTransaction,
            AddTransaction
    }}>
    {children}

    </GlobalContext.Provider>)
 }