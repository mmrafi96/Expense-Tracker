import React, { useContext } from 'react'
import { GlobalContext } from './context/GlobalState';

const Balance = () => {
    const {transactions} = useContext(GlobalContext);
 const amount = transactions.map(transactions=>{
     return transactions.amount;

 } );

 const total = amount.reduce((prev,curr) => prev+curr,0);
 console.log(amount);
 console.log(total);


  return (
    <div className='balance'>
        <h4>Your Balance</h4>
        <h1>${total}</h1>
    </div>
  )
}

export default Balance