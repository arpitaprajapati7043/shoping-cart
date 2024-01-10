// HomeScreen.js
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';

import Cslider from '../Cslider';
import ProductCard from './ProductCard';

function HomeScreen() {
  const apiUrl = 'https://api-cartserver.onrender.com/Products';
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        const data = response.data;
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Cslider />
      <Container>
        <ProductCard products={products} />
      </Container>
    </div>
  );
}

export default HomeScreen;
