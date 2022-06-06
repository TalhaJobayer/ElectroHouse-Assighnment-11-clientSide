import { useEffect, useState } from "react"

const UseProducts=()=>{
    const [products,setProducts]=useState([])
    useEffect(()=>{
        const url=`https://ancient-cove-19850.herokuapp.com/gadgets`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[])
    return [products,setProducts]
}
export default UseProducts;