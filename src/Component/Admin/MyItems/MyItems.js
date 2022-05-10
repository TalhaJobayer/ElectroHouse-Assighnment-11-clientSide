import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import UseProducts from '../../../UseHook/UseProducts/UseProducts';

import MyItemsProduct from '../MyItemsProduct/MyItemsProduct';

const MyItems = () => {
    const [products,setProducts]=UseProducts()
    const handleDelete=(id)=>{
        const procced=window.confirm('Are you sure?')
        if(procced){
          const url=`http://localhost:5000/gadgets/${id}`
             fetch(url,{
               method:"DELETE"
             })
             .then(res=>res.json())
             .then(data=>{
               console.log('success',data)
               const remaining=products.filter(singelproduct=>singelproduct._id !==id)
               console.log(remaining);
               setProducts(remaining)
             })
             
        }
      }
   
    return (
        <div>
            <h1>my items</h1>
            <div className='container'>
          <div className="row">
           {
                products.map(product=><MyItemsProduct
                key={product._id}
                handleDelete={handleDelete}
                product={product}
                ></MyItemsProduct>)
            }
           </div>
        </div>
        </div>
    );
};

export default MyItems;