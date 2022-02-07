import CartContext from "../context/cart/CartContext"
import { useContext } from "react"
import Cart from "./Cart";

const CartList = () => {
    const { open, cartItems } = useContext(CartContext);

    return (
        <>
            {open === true &&
                <div className="fixed right-0 top-16 bg-white shadow-md p-4 w-[30%] h-[80vh] overflow-y-auto">
                    {cartItems.length === 0 ? <p className="text-center font-bold text-2xl">No Products Yet :(</p> :
                        cartItems.map((item) => (
                            <Cart
                                key={item.idDrink}
                                name={item.strGlass}
                                image={item.strDrinkThumb}
                                description={item.strInstructions}
                                id={item.idDrink}
                            />
                        ))}
                </div>
            }
        </>
    )
}
export default CartList