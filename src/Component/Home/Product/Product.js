import React from 'react';
import './Product.css'

const Product = ({product}) => {
    const {_id,name,image,Price,supplier}=product
    return (
        <div className='col-lg-4 g-3'>
            <div className="card" >
  <img src={image} className="card-img-top image" alt="..."/>
 
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <h2>Price:${Price}</h2>
    <h3>Supplier:{supplier}</h3>
    <button className="btn btn-primary" >Buy Now</button>
  </div>
</div>
            
            
   </div>
    );
};

export default Product;