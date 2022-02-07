import { REMOVE_TO_CART, ADD_TO_CART, SET_OPEN } from "../Types";

const CartReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        case REMOVE_TO_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.idDrink != action.payload)
            }
        case SET_OPEN:
            return {
                ...state,
                open: !state.open
            }
        default:
            return state
    }
}

export default CartReducer