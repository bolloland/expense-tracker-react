import React from 'react'

const Transaction = () => {
  return (
    <div>
         <li className="minus">
        {transaction.text} <span>{transaction.amount}</span><button className="delete-btn">x</button>
        </li>
    </div>
  )
}

export default Transaction