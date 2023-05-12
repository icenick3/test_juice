import './App.css';
import ProductPage from "./pages/ProductPage/ProductPage";
import {Route, Routes} from "react-router";
import CartPage from "./pages/CartPage/CartPage";
import {useState} from "react";


function App() {

    const [color, setColor] = useState("white")

    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<ProductPage setColorForCart={setColor}/>}/>
                <Route path={'cart'} element={<CartPage color={color}/>}/>
            </Routes>
        </div>
    );
}

export default App;
