import Home from "./pages/Home/Home";
import Cart from "./components/Cart/Cart";
import ProductItem from "./components/ProductItem/ProductItem";

const routes = [
    { path: "/", element: <Home />, },
    { path: "/home", element: <Home />, },
    { path: "/cart/", element: <Cart /> },
    { path: "/product-item/:id", element: <ProductItem /> },
    { path: "/cart", element: <Cart /> },
]

export default routes