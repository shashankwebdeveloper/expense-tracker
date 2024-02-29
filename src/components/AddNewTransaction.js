import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddNewTransaction = () => {

  const [text,setText]=useState('');
  const [amount,setAmount]=useState('');
  const {addTransaction}=useContext(GlobalContext);

  const  onSubmit= e=>{
    e.preventDefault();

    const newTransaction={
      id:Math.floor(Math.random() * 100000000),
      text,
      amount:+amount
    }
    addTransaction(newTransaction);
  }
  return (
    <div>
       <h3>Add new transaction</h3>
      <form onSubmit={onSubmit} id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} id="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >{amount} <br />
            (negative - expense, positive - income)</label>
          <input type="number" id="amount" value={amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>

    </div>
  );
}

export default AddNewTransaction;
