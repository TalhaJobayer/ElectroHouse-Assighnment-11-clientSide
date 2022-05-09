import React, { useEffect, useState } from 'react';

const UseProductDetails = (id) => {
    const [products,setProducts]=useState({})
    useEffect(()=>{
        const url=`http://localhost:3000/ProductDetails/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[id])
    return  [products];
};

export default UseProductDetails;