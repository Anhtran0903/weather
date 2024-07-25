import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Input } from 'reactstrap';
import "./style.css"

export default function Wether() {
    const [data,setData]=useState(null);

    const [city,setCity] =useState("ho chi minh")
    const [text,setText]=useState("")
const key ='e886727d59a4687f73920b3367e67415'
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`

    const getTime=(value)=>{
        let d =new  Date(value*1000)
            return d.toLocaleString();
    }

    const fetchApi = () =>{
        axios.get(url)
        .then(function(res){
            setData(res.data)

        })
        .catch(function(erorr){
            console.log(erorr)
        })
    }
    useEffect(()=>{
        fetchApi();
    },[city])
  return (
    <div>
        <Container>
       
        </Container>
<Container>
    <div className='TT'>

        <Input placeholder='nhap ten thanh pho' type='text' value={city} onChange={(e)=>setCity(e.target.value)}
        onKeyDown={(e)=>{
            if(e.key==="Enter"){
                setCity(text)
                setText("")
            }
        }}  />
<h1>Weather</h1>
        </div>
        {   data&&
            <>
                
                  <div className='tieude'>     <h1 >{data.name}</h1>  <h1>country: {data.sys.country}</h1></div> 
                  <div className='conten'>

     <div>         <h4> nhiet do cao nhat: {data.main.temp_max}</h4>
<h4> nhiet do thap nhat:{data.main.temp_min}</h4></div>    
<div>
<h4> mat troi moc luc:  {getTime(data.sys.sunrise)}</h4>
<h4> mat troi lan luc:{getTime(data.sys.sunset)}</h4>
</div>
                  </div>
   

<div className='noidung'> <span> nhiet do: {data.main.temp}</span>
<img   src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}/></div>
                       
                        </>
        }
        </Container>
    </div>
  )
}
