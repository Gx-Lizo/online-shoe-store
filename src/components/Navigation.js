import React from "react";
import { Link } from "react-router-dom";
 
//the Navigation component has links that route to the components when clicked
export default function Navigation() {

    return(

        <nav className="app-child2">
            <Link className='app-child3' to="/" >Home</Link>
            <Link className='app-child3'to="/products" >Products</Link>
            <Link className='app-child3' to="/cart" >Cart</Link>
            <Link className='app-child3' to="/help" >Help</Link>    
        </nav>
    );
}