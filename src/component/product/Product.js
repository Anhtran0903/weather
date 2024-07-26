import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button, Card, Col } from 'reactstrap'
import { AppContext } from '../../AppContext';
import Swal from 'sweetalert2';

export default function Product(props) {
const {Product} =props
const {addCart}=useContext(AppContext)
const hand_add=(id)=>{
  
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });

    addCart(id);
 
}
  return (

   
    <Col lg={3} md={4} xs={6}>

                <Card>
                    <img src={Product.img}/>
                <h3>
                 {Product.name}
                </h3>
                <p> {Product.price}</p>
                </Card>
    <Button onClick={()=> hand_add(Product.id)}>add cart</Button>
    <Link to="/cart"> cart   </Link>
    </Col>
  )
}
