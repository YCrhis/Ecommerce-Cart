import { useEffect, useState } from "react"
import CardProducts from "../components/CardProducts"
import Content from "../layouts/Content"
import { SearchIcon } from "../icons/SearchIcon";
import { ListProducts, SearchProduct } from "../services/product"
import NotFound from "../components/NotFound";

const Home = () => {

    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')

    const handleLoadData = async () => {
        const response = await ListProducts();
        setProducts(response.drinks)
    }

    const handleSearch = async e => {
        e.preventDefault();
        const response = await SearchProduct(search);
        setProducts(response.drinks)
    }

    const handleInputChange = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        handleLoadData();
    }, [])

    return (
        <Content>
            <div className="w-[50%] bg-white m-auto rounded-2xl flex items-center px-4 shadow-lg mb-[3rem] mt-[1rem]">
                <form onSubmit={handleSearch} className="w-[100%]">
                    <input
                        type="text"
                        className="w-full p-2 rounded-2xl outline-0"
                        onChange={handleInputChange}
                    />
                </form>
                <button onClick={handleSearch}>
                    <SearchIcon />
                </button>
            </div>
            <div className="w-[90%] m-auto grid xl:grid-cols-3 sm:grid-cols-2 gap-6">
                {products === null ? <NotFound /> :
                    products.map((products) => (
                        <CardProducts
                            key={products.idDrink}
                            product={products}
                        />
                    ))}
            </div>
        </Content>
    )
}
export default Home 