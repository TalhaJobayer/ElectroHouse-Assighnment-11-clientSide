import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';

const Products = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        const url=`http://localhost:5000/gadgets`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[])
    return (
        <div className='container'>
            <h1>this is products {products.length}</h1>
            <div className="row">
           {
                products.map(product=><Product
                key={product._id}
                product={product}
                ></Product>)
            }
           </div>
        </div>
    );
};

export default Products;