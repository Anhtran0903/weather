import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Card } from 'reactstrap';


export default function ProdDetail() {
    const {id}=useParams();

    const [data,setData]=useState({});
useEffect(()=>{
    fetchApi();
})

    const fetchApi =()=>{
        const url="https://66a0a2837053166bcabc1470.mockapi.io/product";
        axios.get(url+"/"+id)
        .then(function(res){
            setData(res.data)
        })
        .catch(function(erorr){
            console.log(erorr)
        })
    }
  return (
    <div>
                <Card>
                    <img src={data.img}/>
                <h3>
                 {data.name}
                </h3>
                <p> {data.price}</p>
                </Card>
    </div>
  )
}
