import { createContext, useEffect, useState } from "react";

import axios from "axios";

export const AppContext = createContext({})
export const AppProvider = ({ children }) => {
    const [count, setCount] = useState(1)
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetchApia();

    }, [])

    const [cart, setCart] = useState([])

    const url = "https://66a0a2837053166bcabc1470.mockapi.io/product";
    const fetchApia = () => {
        axios.get(url)
            .then(function (res) {
                setProducts(res.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }




    const addCart = (id) => {
        const res = products.find(item => item.id === id)
        setCart([...cart, res])

    }

    return <AppContext.Provider value={{ count, setCount, cart, addCart }}>

        {children}

    </AppContext.Provider>
}