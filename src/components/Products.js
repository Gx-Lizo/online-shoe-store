import React from "react";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "./features/userSlice";

// the Products component displays the items productList that is in the store
// if user is not logged in they cannot add items to the cart
export default function Products() {

    const state = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    return (
        <div>
            {state.isLoggedIn ? <p>Click cart to view items you add.</p>:<p>You must be logged in to make a purchase.</p>}
            <CardGroup className="card-group">
            {state.productList.map((item) =>
                    <Card className="card-group-item">
                        <Card.Header>{item.brand} {item.model}</Card.Header>
                        <Card.Body className="card-body">
                            <Card.Img variant="top" src={item.pic} />
                        </Card.Body>
                        <Card.Footer  className="card-footer">
                            <Card.Title>R {item.price}.00</Card.Title>
                            {state.isLoggedIn && <Button onClick={() => dispatch(addItem(item))}> Add to cart</Button>}
                        </Card.Footer>
                    </Card>
            )}
            </CardGroup>
        </div>
    );
}