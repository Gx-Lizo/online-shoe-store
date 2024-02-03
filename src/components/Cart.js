import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { removeItem } from "./features/userSlice";

// the Cart component shows items added by the user in the Products component
// if user is not logged/ has not added anything on the cart they will be alerted that there is cart is empty
// if user adds items and logs out the cart will be cleared
// user can remove items from the cart
// the dropdown button has a list a user can choose from for method of shipment 
export default function Cart() {

    const [selectedItem, setSelectedItem] = useState(null);
    const state = useSelector((state) => state.userReducer.cartItems);
    const dispatch = useDispatch();
    const handleSelect = (eventKey) => {
        setSelectedItem(eventKey);
    };

    return (

        <div>
            {state.length === 0 ?
                <p>The cart is currently empty.</p> :
                <div>
                    <h1>total cost excl.(shipping costs): R {state.reduce((total, item) => total += item.price, 0)}.00</h1>
                    <CardGroup className="card-group">
                    {state.map((item, index) =>
                        
                            <Card className="card-group-item">
                                <Card.Title>{item.brand} {item.model}</Card.Title>
                                <Card.Body  className="card-body">
                                    <Card.Img variant="top" src={item.pic} />
                                </Card.Body >
                                <Card.Footer className="card-footer">
                                    <Card.Title>R {item.price}</Card.Title>
                                    <Button onClick={() => dispatch(removeItem(index))}>Remove</Button>
                                </Card.Footer>
                            </Card>
                    )}
                    </CardGroup>
                    <Dropdown onSelect={handleSelect}>
                        <DropdownButton title={selectedItem ? `${selectedItem}` : 'Shipment method'}>
                            <Dropdown.Item eventKey="Ground Shipping">Ground Shipping.</Dropdown.Item>
                            <Dropdown.Item eventKey="Air Freight">Air Freight.</Dropdown.Item>
                            <Dropdown.Item eventKey="Ocean Freight">Ocean Freight.</Dropdown.Item>
                            <Dropdown.Item eventKey="Rail Shipping">Rail Shipping.</Dropdown.Item>
                        </DropdownButton>
                    </Dropdown>
                </div>
            }
        </div>
    );
}