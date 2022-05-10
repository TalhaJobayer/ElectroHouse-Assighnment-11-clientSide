import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';

import MyItemsProduct from '../MyItemsProduct/MyItemsProduct';

const MyItems = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        const url=`http://localhost:5000/gadgets`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[])
    return (
        <div>
            <h1>my items</h1>
            <div className='container'>
          <div className="row">
           {
                products.map(product=><MyItemsProduct
                key={product._id}

                product={product}
                ></MyItemsProduct>)
            }
           </div>
        </div>
        </div>
    );
};

export default MyItems;