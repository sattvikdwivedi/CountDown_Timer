import React ,{useContext}from 'react';
import  { useState } from 'react';
import { GlobalContext } from '../Context/GlobalState';
function AddTransaction() {
  const {AddTransaction}= useContext(GlobalContext);
  const [text,settext]=useState('');
  const [amount,setamount]=useState(0);
  const onsubmit= (e) =>{ 
   e.preventDefault();
   const newTransaction={
    id:Math.floor(Math.random() * 100000000),  
    text,
    amount:+amount  // to make it number because it is in string 
  }
  AddTransaction(newTransaction);
  }
  return (
    <div><h3>Add new transaction</h3>
    <form onSubmit={onsubmit} >
      <div className="form-control">
        <label htmlFor="text">Text</label>
        <input type="text"  placeholder="Enter text..." value={text} onChange={(e)=>settext(e.target.value)} />
      </div>
      <div className="form-control">
        <label htmlFor="amount"
          >Amount <br />
          (negative - expense, positive - income)</label>
        <input type="number"  placeholder="Enter amount..."  value={amount} onChange={(e)=> setamount(e.target.value)} />
      </div>
      <button className="btn">Add transaction</button>
    </form></div>
  )
}

export default AddTransaction