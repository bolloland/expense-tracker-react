export default function appReducer (state, action) {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions:
            }
        default:
        return state;
    }
}