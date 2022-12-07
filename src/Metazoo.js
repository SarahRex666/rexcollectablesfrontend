import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import { Card, Button } from "react-bootstrap";


const products = {
    products: [{
        id: 1,
        title: "Wilderness Booster Box",
        price: 80,
        img_url: "https://cdn.shopify.com/s/files/1/0615/2857/2148/products/wilderness.jpg?v=1649619658&width=600",
        description: "36 Booster Packs!"
    }, 
    {
        id: 2,
        title: "Seance Booster Box",
        price: 80,
        img_url: "https://cdn.shopify.com/s/files/1/0615/2857/2148/products/seance_2d488d72-5fb3-42db-94f3-1bc94fb2597b.jpg?v=1666925181&width=600",
        description: "36 Booster Packs!"
    }]
}

export default function Metazoo(){
    return (<div>
    {products.products.map((product) => (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.img_url} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
            {product.price}
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
    )
        )}
        </div>)
}