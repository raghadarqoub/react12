import React,{useEffect,useState} from 'react'
//import { Products } from './Products';
export function Products() {
    let [Products,setProducts]=useState([]);
    const getProducts= async()=>{
        let response = await fetch ("https://fakestoreapi.com/products");
        let data =await response.json();
        setProducts(data);
    }
    useEffect( ()=>{
        getProducts();
    },[])

    return (
    <div className='row'>
        {
            Products.map((ele)=>{
                return <div className='colmd-4' key={ele.id}>
                    <h2>{ele.title}</h2>
                    <img src={ele.image} className='w-100'/>
                </div>
            })
        }
    </div>
    )
}
export default Products