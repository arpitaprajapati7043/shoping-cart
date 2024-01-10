import React, { useState, useEffect } from 'react';
import { Row, Col, ListGroupItem, Button,CardText,CardTitle } from 'react-bootstrap';
import { Card} from "react-bootstrap";
import { useParams } from 'react-router-dom';
import Rating from '../Rating';
import axios from 'axios';
import { Badge } from 'react-bootstrap';
import { CartCheckFill, CartPlus,ArrowLeft} from 'react-bootstrap-icons'
import { Link } from 'react-router-dom';
import './style1.css';


const ProductDetails = () => {
  const { id } = useParams();
  const apiUrl = `https://api-cartserver.onrender.com/Products/${id}`;
  const [produt, setProduct] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        const data = response.data;
        console.log('Product Data:', data);
        setProduct(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id, apiUrl]);

  return (
    <Row>
    <Link to="/">
    <ArrowLeft/>Go-back
   </Link>
    <Col sm="6">
    
      <Card body className='card-color'>
        <CardTitle tag="h5">
        <img src={produt.image} alt={produt.name} style={{ maxWidth: '100%', height: '400px' }} />
      
        </CardTitle>
       <div>
       
      </div>
      </Card>
    </Col>
    <Col sm="6">
    
      <Card body className='text-desc'>
        <CardTitle tag="h5">
      {produt.title}
      <div className='d-flex align-items-center'>
      Ratings & Reviews:&nbsp;&nbsp; <Rating rating={produt.rating?.rate} />
              <Badge pill bg="info" className='ms-2'>
                {produt.rating?.count}
              </Badge></div>
        </CardTitle>
        <CardText>
        <div>Price: ₹{produt.price}</div><br/>
        <div>{produt.description}</div>
        </CardText>
        
      </Card>
      <ListGroupItem className='list-btn'>
      <Row>
        <Col>Status:</Col>
        <Col>{produt.countInStock > 0 ? "In stock" : "Out of stock"}
       
        </Col>
       
      </Row>
    </ListGroupItem>
    <ListGroupItem className='list-btn'> <Button className="mr-2 custom-button">
    <CartPlus size={20} /> Add to cart 
  </Button>
 
  <Button className='btn-buy'>
  <CartCheckFill size={20}/> &nbsp;Buy Now
</Button></ListGroupItem>
    </Col>
    
  </Row>
);
};

export default ProductDetails;
