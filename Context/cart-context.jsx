import { useEffect } from "react";
import { getCartData } from "../database/api";
import { createContext, useState } from "react";


export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, [data])
    const getData = async () => {
        const res = await getCartData();
        setData(res.data);
    }
    return <CartContext.Provider value={{ data }}>{children}</CartContext.Provider>
}

export default CartContextProvider;
