
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import UseProductDetails from '../../UseHook/UseProductDetails/UseProductsDetails';


const ProductDetails = () => {
  const  {ProductId}=useParams()
  const [products]=UseProductDetails(ProductId)
  
    return (
        <div>
             <h1>wellcome to this course:  {ProductId}</h1>
            <h2>{products.length}</h2>
             
             <Link to={'/proccedToPay'}>
            <Button  className='socialButton mx-auto d-block' variant="white" type="submit">
    Check Out Now
  </Button></Link>
        </div>
    );
};

export default ProductDetails;