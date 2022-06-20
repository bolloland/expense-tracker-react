export default function appReducer (state, action) {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
           return{
            ...state,  //<<sends down current state
            transactions: state.transactions.filter(trans => trans.id !== action) //filter through that state and take everything except for what we're deleting
           }
        default:
        return state;
    }
}