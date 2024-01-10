// ProductCard.js
import React from 'react';
import { Container, Col, Card } from 'react-bootstrap';
import Slider from 'react-slick';
import { Badge } from 'react-bootstrap';
import Rating from '../Rating';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import './style.scss'; // Import the CSS file with the provided styles
import './silkPrev.scss';

// Custom previous arrow component
const CustomPrevArrow = (props) => (
  <button
    className="custom-prev-arrow slick-prev"
    onClick={props.onClick}
    aria-label="Previous"
  >
 
  </button>
);

// Custom next arrow component
const CustomNextArrow = (props) => (
  <button
    className="custom-next-arrow slick-next"
    onClick={props.onClick}
    aria-label="Next"
  >
   
  </button>
);

function ProductCard({ products }) {

  const categories = [...new Set(products.map((item) => item.category))];

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <Container>
      {categories.map((category) => (
        <div key={category} className="product">
          <h2>{category}</h2> {/* Display the category name */}
          <div className="slider-container">
            <Slider {...sliderSettings}>
              {products
                .filter((item) => item.category === category)
                .map((product) => (
                  <Col key={product.id} md={15}>
                    <Card>
                    <Link to={`/product/${product.id}`}>  <Card.Img
                        className="image"
                        src={product.image}
                        alt={product.name}
                      /></Link>
                      <Card.Body className="content">
                        <Card.Title className="text">{product.title}</Card.Title>
                        <div>₹{product.price}</div>
                        <Card.Text className="description">
                          {product.description}
                          
            <div className='d-flex align-items-center'>
            <Rating rating={product.rating?.rate} />
             <Badge pill bg="info" className='ms-2'>
             {product.rating?.count}
             </Badge>
           </div>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
            </Slider>
          </div>
        </div>
      ))}
    </Container>
  );
}

export default ProductCard;
