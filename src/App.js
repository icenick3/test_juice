import './App.css';
import {Route, Routes, Navigate} from "react-router";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartPage from "./pages/CartPage/CartPage";


function App() {
    return (
        <div className="App">
         <Routes>
             <Route path="/" element={<Navigate to="/product" />} />
             <Route path={"product"} element={<ProductPage/>}/>
             <Route path={"cart"} element={<CartPage/>}/>
         </Routes>
        </div>
    );
}

export default App;
