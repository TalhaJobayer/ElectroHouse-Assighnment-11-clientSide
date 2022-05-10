import React from 'react';

import UseProducts from '../../../UseHook/UseProducts/UseProducts';

const MyItemsProduct = ({product,handleDelete,handleDelivery}) => {
  const [products,setProducts]=UseProducts();
 
        

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
        
        <button onClick={()=>handleDelete(_id)}   className="btn btn-primary " style={{marginRight:'15px'}} >Delete</button>
        
        {
          quantity?<button onClick={()=>handleDelivery (_id)}   className="btn btn-primary  " >Delevered</button>:<button onClick={()=>handleDelivery (_id)}   className="btn btn-danger  " >Delevered</button>
        }
        
      </div>
    </div>
                
                
       </div>
        );
   
};

export default MyItemsProduct;