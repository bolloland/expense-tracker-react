import React from 'react'

const Transaction = ({transaction}) => {
    const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <div>
         <li className={transaction.amount < 0 ? "minus" : "plus" }> 
         {/* ^^ determine classname using ternary */}
        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
        <button className="delete-btn">x</button>
        </li>
    </div>
  )
}

export default Transaction