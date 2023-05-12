import './App.css';
import ProductPage from "./pages/ProductPage/ProductPage";
import {Route, Routes} from "react-router";
import CartPage from "./pages/CartPage/CartPage";



function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<ProductPage/>}/>
                <Route path={'cart'} element={<CartPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
