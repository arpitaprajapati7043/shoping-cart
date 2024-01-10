// App.js
import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from './Components/Footer';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from './Screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './Screens/ProductDetails';
import Login from './Login/index';
import Signup from './Signup/index';
function App() {
  return (
    <Router>
      <Routes>
        {/* Update the path to have a trailing '*' */}
        <Route
          path="*"
          element={
            <React.Fragment>
              <Header />

              <main>
                <Container>
               
                  <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="Login" element={<Login />} />
                    <Route path="/Login/Signup" element={<Signup />} />
                    {/* Add more nested routes if needed */}
                  </Routes>
                </Container>
              </main>

              <Footer />
            </React.Fragment>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
