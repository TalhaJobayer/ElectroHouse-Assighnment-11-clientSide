import { useEffect, useState } from "react"

const UseProducts=()=>{
    const [products,setProducts]=useState([])
    useEffect(()=>{
        const url=`http://localhost:5000/gadgets`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[])
    return [products,setProducts]
}
export default UseProducts;