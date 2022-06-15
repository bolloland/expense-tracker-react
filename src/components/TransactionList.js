import React, { useContext }from 'react'
import { GlobalContext } from '../context/GlobalState'

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)  //const context >> destructured to const { trans }

  console.log(transactions)

  return (
    <> 
    <h3>History</h3>
    <ul className="list"> 
      {/* map through transactions and create list of all */}
      {transactions.map(trans => (  
        <li className="minus">
        {trans.text} <span>{trans.amount}</span><button className="delete-btn">x</button>
        </li>
        ))
        }
    </ul>
    </>
  )
}

export default TransactionList