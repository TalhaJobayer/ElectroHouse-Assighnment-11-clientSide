import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UseProducts from '../../../UseHook/UseProducts/UseProducts';

import MyItemsProduct from '../MyItemsProduct/MyItemsProduct';

const MyItems = () => {


    const navigate=useNavigate()
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

      const handleAddItem=()=>{
           navigate('/AddItems')
      }
      const handleDelivery=(productId)=>{
       setProducts(products.map(item=>
        productId===item._id?{...item, quantity:item.quantity- (item.quantity>0? 1:0)  }:item
        
        ))
        
      }
   
    return (
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <button onClick={handleAddItem} className="btn btn-danger m-3" >Add New Item</button>
                        </div>
                    </div>
                </div>
            </section>
            
            <div className='container'>
          <div className="row">
           {
                products.map(product=><MyItemsProduct
                key={product._id}
                handleDelete={handleDelete}
                handleDelivery={handleDelivery}
                product={product}
                ></MyItemsProduct>)
            }
           </div>
        </div>
        </div>
    );
};

export default MyItems;