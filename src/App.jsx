import {Route, Routes, Navigate} from "react-router-dom";
import Products from "./pages/Products";
import DetalPage from "./pages/DetalPage";
import Checkout from "./pages/Checkout";
import Page404 from "./pages/Page404";
import ProductsProvider from "./Context/ProductContext";
import CardContext from "./Context/CardContext.jsx";
import Layout from "./Layout/Layout.jsx";


function App() {
    return (
        <CardContext>
        <ProductsProvider>
            <Layout>
            <Routes>
                <Route path="/" element={<Navigate to="/products" replace/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/products/:id" element={<DetalPage/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/*" element={<Page404/>}/>
            </Routes>
            </Layout>
        </ProductsProvider>
        </CardContext>

    )
}

export default App
