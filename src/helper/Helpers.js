const text = (text) => {
    return text.split(" ").slice(0, 3).join("")
}
const filtersSearch = (products, search) => {
    if (!search) return products
    const productsSearch = products.filter(p => p.title.toLowerCase().includes(search))
    return productsSearch
}
const filtersCategories = (products, category) => {
    if (!category) return products
    const Categoriesitem = products.filter(p => p.category === category)
    return Categoriesitem
}
const createObjectquery = (currentQuery, newQuery) => {
    if (newQuery.category === "all") {
        const {category, ...rest} = currentQuery
        return rest
    }
    if (newQuery.search === "") {
        const {search, ...rest} = currentQuery
        return rest
    }
    return {...currentQuery, ...newQuery}
}
const getSearchParams = (searchParams) => {
    const query = {}
    const category = searchParams.get("category")
    const search = searchParams.get("search")
    if (category) query.category = category
    if (search) query.search = search
    return query
}
const sumProducts = (products) => {
    const itemsCounter = products.reduce((acc, cur) => acc + cur.quantity, 0)
    const total = products.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)
    return {itemsCounter, total}
}

const quantityitms = (state, id) => {
    const items = state.selecteditem.findIndex(item => item.id === id)
     if (items === -1 ){
         return 0
     }else {
         return state.selecteditem[items].quantity
     }
}

export {text, filtersSearch, filtersCategories, createObjectquery, getSearchParams, sumProducts, quantityitms}