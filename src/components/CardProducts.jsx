import { CartIcon } from "../icons/CartIcon"
import CartContext from "../context/cart/CartContext"
import { useContext } from "react"

const CardProducts = ({ product }) => {

    const { strDrink, strInstructions, strDrinkThumb } = product;

    const { addToCart } = useContext(CartContext);

    return (
        <div className="m-auto cursor-pointer shadow-md hover:scale-[1.06] transition-all">
            <img
                src={strDrinkThumb}
                alt="product name"
                className="w-[100%] h-[300px] object-cover"
            />
            <div className="p-3">
                <h3 className="font-bold text-2xl mb-1">{strDrink}</h3>
                <p className="text-gray-600 mb-5 line-clamp-2">{strInstructions}</p>
                <div className="flex justify-between items-center">
                    <p className="font-semibold">Price: <span className="text-yellow-500">$/. 12.50</span></p>
                    <button className="flex bg-yellow-300 px-5 py-2 rounded-3xl hover:bg-yellow-500 transition-all" onClick={() => addToCart(product)}>Add to <CartIcon /></button>
                </div>
            </div>
        </div>
    )
}
export default CardProducts