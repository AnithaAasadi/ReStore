
import { Product } from "../../app/models/Product"
import ProductList from "./ProductList";
import { useState, useEffect } from "react";


export default function Catalog()
{
    const[products,setProducts]=useState<Product[]>([]);

 useEffect(() => {
   fetch('http://localhost:5000/api/product')
   .then(response => response.json())
   .then(data=>setProducts(data))

 },[])
    return(
        <>
           <ProductList products={products}/>
            {/* <Button variant='contained' onClick={addProduct}>Add Product</Button> */}
        
        </>
    )
}
