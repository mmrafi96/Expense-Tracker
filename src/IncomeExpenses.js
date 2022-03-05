import React, { useContext } from 'react'
import { GlobalContext } from './context/GlobalState';

const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext);
    const amounts= transactions.map(transaction=> transaction.amount);
    const income =amounts
    .filter(amount=> amount > 0)
    .reduce((prev,curr)=> prev+ curr,0);
    const expense =amounts
    .filter(amount=> amount < 0)
    .reduce((prev,curr)=> prev+ curr,0);
   const expenseAmount = Math.abs(expense);

   console.log(expense)
    
  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p   className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${expenseAmount}</p>
        </div>
      </div>
  )
}

export default IncomeExpenses