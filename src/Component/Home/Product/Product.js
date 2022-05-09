import React from 'react';
import './Product.css'

const Product = ({product}) => {
    const {name,image,Price,supplier}=product
    return (
        <div className='col-lg-4 g-3'>
            <div className="card" >
  <img src={image} className="card-img-top image" alt="..."/>
 
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <h3>Price:${Price}</h3>
    <h4>Supplier:{supplier}</h4>
    <p></p>
    <button className="btn btn-primary" >Buy Now</button>
  </div>
</div>
            
            
   </div>
    );
};

export default Product;