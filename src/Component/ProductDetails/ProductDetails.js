
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import UseProductDetails from '../../UseHook/UseProductDetails/UseProductsDetails';


const ProductDetails = () => {
    
  const  {InventoryID}=useParams()
  const [products,setProducts]=UseProductDetails(InventoryID)
  const [newQuantiy,setnewQuantiy]=useState()

  console.log(setnewQuantiy);
  const handleReStock=(event)=>{
    event.preventDefault()
         const newQuantiy=event.target.reStock.value;
             const total=parseInt(products.quantity)+parseInt(newQuantiy)
         setnewQuantiy(total) 
         event.target.reset()
  }
    return (
        <div>
            
            <div className='container'>
          <div className="row">
          <div className='col-lg-4 g-3'>
                <div className="card" >
      <img  src={products.image} className="card-img-top image" alt="..."/>
     
      <div className="card-body">
        <h5 className="card-title">{products.name}</h5>
        <h3>Price:${products.Price}</h3>
        <h5>Quantity:{newQuantiy? newQuantiy:products.quantity}</h5>

        <h5>Supplier:{products.supplier}</h5>
        
       
        
        
          <form className='m-3' onSubmit={handleReStock}>
           <div className="form-group form-box clearfix mb-2">
                                <input name="reStock" type="number" className="form-control" placeholder="Update Quantity" required/>
                               
                            </div>
                            <button  type="submit" className="btn btn-primary" >stock updates</button>
          </form>
      </div>
    </div>
                
                
       </div>
           </div>
        </div>
            
              <div className="col-lg-5">
              <Link to={'/proccedToPay'}>
            <Button   className='socialButton  mx-auto d-block btm btn-primary' variant="white" type="submit">
    Check Out Now
  </Button></Link>
              
            </div>
        </div>
    );
};

export default ProductDetails;