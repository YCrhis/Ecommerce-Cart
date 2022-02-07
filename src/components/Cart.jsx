import { TransIcon } from "../icons/TrashIcon";

import CartContext from "../context/cart/CartContext";
import { useContext } from "react";

const Cart = ({ id, image, name, description }) => {

    const { removeToCart } = useContext(CartContext);

    return (
        <div className="flex items-center mb-4">
            <img src={image} alt="new" className="w-[100px]" />
            <div className="flex items-center flex-col p-4 w-full">
                <h5 className="font-bold text-left">{name}</h5>
                <p className="text-gray-500 line-clamp-2">{description}</p>
                <button
                    className="bg-black text-white py-1 px-3 mt-2 rounded-xl flex hover:bg-gray-700 transition-all"
                    onClick={() => removeToCart(id)}
                >Romove&nbsp;<TransIcon />
                </button>
            </div>
        </div>
    )
}
export default Cart