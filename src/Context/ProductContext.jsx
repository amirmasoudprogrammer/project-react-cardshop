import {createContext, useContext, useEffect, useState} from 'react';
import api from "../services/Apidata.js";

const ProductContext = createContext()

const ProductsProvider = ({children}) => {

    const [products, setProducts] = useState([])


    useEffect(() => {

        const dataAPi = async () => {
            try {
                setProducts(await api.get("/products"))
            } catch (errors) {
                console.log(errors.message)
            }
}
        dataAPi()
    }, [])

    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    )
};

const useProducts = () => {
    const products = useContext(ProductContext)
    return products;
}
const useProductDetails = (id) =>{
    const products = useContext(ProductContext)
    const result = products.find(item => item.id === id)
    return result
}


export default ProductsProvider;
export {useProducts , useProductDetails}