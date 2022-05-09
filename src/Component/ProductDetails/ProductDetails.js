
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
  const  {ProductId}=useParams()
  const [products,setProducts]=useState([])
    useEffect(()=>{
        const url=`http://localhost:5000/gadgets`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[])
    return (
        <div>
             <h1>wellcome to this course:  {ProductId}</h1>
             
             <Link to={'/proccedToPay'}>
            <Button  className='socialButton mx-auto d-block' variant="white" type="submit">
    Check Out Now
  </Button></Link>
        </div>
    );
};

export default ProductDetails;