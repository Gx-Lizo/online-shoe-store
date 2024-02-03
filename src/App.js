import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Homepage from "./components/Homepage";
import Register from "./components/Register";
import Help from "./components/Help";
import Cart from "./components/Cart";
import Products from "./components/Products";

function App() {

  return (
    <div className="App-header">
      <header >
        <Navigation />
      </header>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route  path="/register" element={<Register />}/>
        <Route  path="/products" element={<Products />}/>
        <Route path="/cart" element={<Cart />} />
        <Route  path="/help" element={<Help />} /> 
      </Routes>
    </div>
  );
}

export default App;
