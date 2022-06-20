export default function appReducer (state, action) {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
           return {
            ...state,
            transactions: state.transactions.filter(transaction => transaction.id !== action.payload) //filter through that state and take everything except for what we're deleting
           }
        default:
            return state;
    }
}