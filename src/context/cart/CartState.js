import { useReducer } from "react";
import CartContext from './CartContext';
import CartReducer from './CartReducer';
import { REMOVE_TO_CART, ADD_TO_CART, SET_OPEN } from '../Types';

const CartState = ({ children }) => {

    const initialState = {
        cartItems: [],
        open: false
    }

    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addToCart = (item) => {
        dispatch({
            type: ADD_TO_CART,
            payload: item,
        })
    }

    const removeToCart = (id) => {
        dispatch({
            type: REMOVE_TO_CART,
            payload: id
        })
    }

    const setToOpen = () => {
        dispatch({
            type: SET_OPEN,
        })
    }

    return (
        <CartContext.Provider value={{ cartItems: state.cartItems, open: state.open, addToCart, removeToCart, setToOpen }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartState

