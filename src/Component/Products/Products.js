import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';

const Products = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        const url=`https://guarded-eyrie-02330.herokuapp.com/gadgets`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[])
    return (
        <div className='container'>
          <div className="row">
           {
                products.slice(0,6).map(product=><Product
                key={product._id}
                product={product}
                ></Product>)
            }
           </div>
        </div>
    );
};

export default Products;