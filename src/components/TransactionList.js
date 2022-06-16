import React, { useContext }from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)  //const context >> destructured to const { trans }

  console.log(transactions)

  return (
    <> 
    <h3>History</h3>
    <ul className="list"> 
      {/* map through transactions and create list of all */}
      {transactions.map(trans => (  
       <Transaction />
        ))
        }
    </ul>
    </>
  )
}

export default TransactionList