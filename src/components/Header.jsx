import { CartIcon } from "../icons/CartIcon";
import CartContext from "../context/cart/CartContext";
import { useContext } from "react";

const Header = () => {

    const { cartItems, setToOpen } = useContext(CartContext);

    return (
        <div className="w-full bg-yellow-300 fixed z-50 top-0">
            <div className="w-[80%] m-auto p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-white">Go|Application</h1>
                <div className="">
                    <ul className="flex cursor-pointer" onClick={() => setToOpen()}>
                        <li className="relative"><CartIcon /> <p className="absolute -right-2 -bottom-3 bg-white px-[5.5px] rounded-full text-sm font-bold">{cartItems.length}</p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Header