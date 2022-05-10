import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyItemsProduct = ({product}) => {
  
        const Navigate=useNavigate()

        const {_id,name,image,Price,supplier,quantity}=product
        
        
        return (
            <div className='col-lg-4 g-3'>
                <div className="card" >
      <img src={image} className="card-img-top image" alt="..."/>
     
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h3>Price:${Price}</h3>
        <h5>Quantity:{quantity}</h5>
        <h5>Supplier:{supplier}</h5>
        <p></p>
        <button   className="btn btn-primary" >Delete</button>
      </div>
    </div>
                
                
       </div>
        );
   
};

export default MyItemsProduct;