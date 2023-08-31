import './App.css';
import ProductPage from "./pages/ProductPage/ProductPage";
import CartPage from "./pages/CartPage/CartPage";
import React, {Suspense, useState} from "react";


function App() {



    return (
        <Suspense fallback={null}>
            <div className="App">
                <ProductPage />
            </div>
        </Suspense>
    );
}

export default App;
