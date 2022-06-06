import React, { useEffect, useState } from 'react';

const UseProductDetails = (InventoryID) => {
    
    const [products,setProducts]=useState({})
    useEffect(()=>{
        const url=`https://ancient-cove-19850.herokuapp.com/gadgets/${InventoryID}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[InventoryID])
    return  [products,setProducts];
};

export default UseProductDetails;