import React, { useState } from 'react';
// @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
import './App.css';
import Header from './components/Header.jsx';
import Balance from './components/Balance.jsx';
import Income from './components/Income.jsx';
import AddTransaction from './components/AddTransaction.jsx';
import TransactionList from './components/TransactionList.jsx';
import { GlobalProvider } from './Context/GlobalState.jsx';


function App() {
  
  return (
    
    <GlobalProvider>
    <Header/>
    <div className='container'>
    <Balance/>
    <Income/>
     <TransactionList/>
    <AddTransaction/> 
 </div>
  </GlobalProvider>

  )
}

export default App