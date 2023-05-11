import './App.css';
import {Route, Routes, Navigate} from "react-router";
import ProductPage from "./pages/ProductPage/ProductPage";


function App() {
    return (
        <div className="App">
         <Routes>
             <Route path="/" element={<Navigate to="/product" />} />
             <Route path={"product"} element={<ProductPage/>}/>
         </Routes>
        </div>
    );
}

export default App;
