import {useProducts} from "../Context/ProductContext.jsx";
import {useSearchParams} from "react-router-dom";
import styles from "../../src/pages/ProductsPage.module.css"
import Cards from "../Component/Cards.jsx";
import Loader from "../Component/Loader.jsx";
import {useEffect, useState} from "react";
import {filtersSearch, filtersCategories, getSearchParams} from "../helper/Helpers.js";
import SearchBox from "../Component/SearchBox.jsx";
import Category from "../Component/Category.jsx";


const Products = () => {
    const products = useProducts()
    const [search, setSearch] = useState("")
    const [searchParams, setSearchParams] = useSearchParams()
    const [displayed, setDisplayed] = useState([])
    const [query, setQuery] = useState({})


    useEffect(() => {
        setDisplayed(products)
        setSearch(query.search || "")
        setQuery(getSearchParams(searchParams))
    }, [products])


    useEffect(() => {
        setSearchParams(query)
        let finalitem = filtersSearch(products, query.search)
        finalitem = filtersCategories(finalitem, query.category)
        setDisplayed(finalitem)
    }, [query])



    return (
        <>
            <SearchBox search={search} setSearch={setSearch} setQuery={setQuery}/>
            <div>
                <div className={styles.container}>
                    {!displayed.length && <Loader/>}
                    <div className={styles.products}>
                        {displayed.map(item => <Cards key={item.id} data={item}/>)}
                    </div>
                  <Category query={query} setQuery={setQuery}/>
                </div>
            </div>
        </>
    );
};

export default Products;