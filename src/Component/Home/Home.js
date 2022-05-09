
import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../src/Images/banner1.b0493f1f.png'
import banner2 from '../../../src/Images/banner2.1b49a4df.png'
import banner3 from '../../../src/Images/banner3.075bbb83.png'
import Products from '../Products/Products';
import './Home.css'

const Home = () => {
    return (
        <div>
           <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
   
    <Carousel.Caption>
    <h5 style={{paddingBottom:'10px'}}>New Trending</h5>
      <div style={{marginBottom:"20px"}}>
      <h1>Collection</h1>
      <h1 style={{color:"#f79837"}} >Keyboard</h1>
      </div>
      <h4>Awesome design of Warelwss Keyboard</h4>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

<Carousel.Caption>
    <h5 style={{paddingBottom:'10px'}}>New Trending</h5>
      <div style={{marginBottom:"20px"}}>
      <h1>Collection</h1>
      <h1 style={{color:"#f79837"}} >Smartwatch</h1>
      </div>
      <h4>Anti-Falling Of Design Sweatproof</h4>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

<Carousel.Caption>
    <h5 style={{paddingBottom:'10px'}}>New Trending</h5>
      <div style={{marginBottom:"20px"}}>
      <h1>Collection</h1>
      <h1 style={{color:"#f79837"}} >Headphone</h1>
      </div>
      <h4>Anti-Falling Of Design Sweatproof</h4>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
{/* carousol done========================================================
=================================================================== */}
   {/* =products======== */}
   <Products></Products>
   {/* =products======== */}

        </div>
    );
};

export default Home;