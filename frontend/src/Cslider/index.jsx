import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../asset/icons/img1.png';
import img2 from '../asset/icons/img2.png';
import img3 from '../asset/icons/ig3.jpg';
import './styles.scss'

function Cslider() {

  return (
    <> 
    <div className="full-width-container" style={{ width: '1210px' }}>
    <Carousel   data-bs-theme="dark" className="slider" >
      <Carousel.Item>
        <img
          className="d-block"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
 </>
);
}

export default Cslider;