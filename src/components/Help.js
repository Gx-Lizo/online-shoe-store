import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

// the Help component has information about the shipment methods in the cart
export default function Help() {

    return (
        <div >
            <CardGroup className="card-group1" >
                <Card className="text-center card-group-item" >
                    <Card.Title>Ground Shipping</Card.Title>
                    <Card.Body>
                        <Card.Text>If you are making this order and you stay around Gauteng then use this method no shipping cost.</Card.Text>
                        <Card.Text>If you are making this order and you are outside of Gauteng then your order will arrive in 7 working days and the shipping cost will be R 100.00</Card.Text>
                        <Card.Text>If you are making this order and you are outside of South Africa then your order will arrive in 10 working days and the shipping cost will be R 120.00</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="text-center card-group-item">
                    <Card.Title>Air Freight</Card.Title>
                    <Card.Body>
                        <Card.Text>If you are making this order and you are outside of Gauteng then your order will arrive in 2 working days and the shipping cost will be R R300.00</Card.Text>
                        <Card.Text>If you are making this order and you are outside of South Africa then your order will arrive in 4 working days and the shipping cost will be R 500.00</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="text-center card-group-item">
                    <Card.Title>Ocean Freight</Card.Title>
                    <Card.Body>
                    <Card.Text>If you are making this order and you are outside of Gauteng then your order will arrive in 2 working days and the shipping cost will be R80.00</Card.Text>
                        <Card.Text>If you are making this order and you are outside of South Africa then your order will arrive in 3 working days and the shipping cost will be R 70.00</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="text-center card-group-item">
                    <Card.Title>Rail Shipping</Card.Title>
                    <Card.Body>
                        <Card.Text>If you are making this order and you are outside of Gauteng then your order will arrive in 10 working days and the shipping cost will be R 45.00</Card.Text>
                        <Card.Text>If you are making this order and you are outside of South Africa then your order will arrive in 14 working days and the shipping cost will be R 50.00</Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
}