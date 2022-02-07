import CartList from '../components/CartList'

const Content = ({ children }) => {
    return (
        <>
            <div className="w-[80%] p-4 m-auto mt-[4rem] mb-[4rem]">
                {children}
            </div>
            <CartList />
        </>
    )
}
export default Content