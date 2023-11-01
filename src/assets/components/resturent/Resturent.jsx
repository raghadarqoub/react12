import React, { useEffect, useState } from 'react';
export function Resturent() {
    let [pizza, setPizza] = useState([]);

let [onion, setOnion] = useState([]);

let [potato, setPotato] = useState([]);

const getResturent = async (query) => {
    let response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${query}`);
    let data = await response.json();
    return data;
}
    useEffect(() => {
        const fetchData = async () => {
            const pizzaData = await getResturent('pizza');
            const onionData = await getResturent('onion');
            const potatoData = await getResturent('potato');
        
        setOnion(onionData.recipes) ;
        setPizza(pizzaData.recipes);
        setPotato(potatoData.recipes) ;

            console.log( pizzaData );
            console.log(onionData );
            console.log(potatoData );
        }
        fetchData();
    }, []);
    return (
        <div className='row'>
            {pizza.map((ele) => (
                <div className='col-md-4' key={ele.recipe_id}>
                    <h2>{ele.title}</h2>
                    <img src={ele.image_url} className='w-25' alt={ele.title} />
                </div>
            ))}
        </div>
    )
}
export default Resturent;