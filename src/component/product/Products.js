import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Product from './Product';
import { Row } from 'reactstrap';

export default function Products() {
    const[data,setData]=useState([])


    useEffect(()=>{
        fetchApi();
    },[])
    const url = "https://66a0a2837053166bcabc1470.mockapi.io/product";
    const fetchApi =()=>{
        axios.get(url)
        .then(function(res){
setData(res.data);
        })
        .catch(function(error){
            console.log(error)
        })
    }

  return (
    <div>

            <Row>

        {
            data.map((item,index)=>(
                    <Product  key={index} Product={item}/>
            ))
        }

</Row>
    </div>
  )
}
