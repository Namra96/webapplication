import React, { Component } from 'react'
import  './myStyle.css'
import {Card} from "react-bootstrap"

 const DisplayImages  = () => {
   const cardInfo =[
        { image: "https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80", title: "The First Scenery"},
        { image: "https://images.unsplash.com/photo-1500322969630-a26ab6eb64cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80", title: "The Second Scenery"},
        { image: "https://images.unsplash.com/photo-1472213984618-c79aaec7fef0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1978&q=80", title: "The Third Scenery"},
        { image: "https://images.unsplash.com/photo-1502318217862-aa4e294ba657?ixlib=rb-1.2.1&auto=format&fit=crop&w=1916&q=80", title: "The Fourth Scenery"},
        { image: "https://images.unsplash.com/photo-1515705576963-95cad62945b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", title: "The Fifth Scenery"} ];
    
   const rendeCard = (card,index) => {
    return (
        <div >
        <Card className='Cardposition' style={{ width: '30rem' }} key ={index}>
        <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
        </Card.Body>
      </Card></div>
      );
   };

   return <div>
    {cardInfo.map(rendeCard)}
   </div>;
   
};

export default DisplayImages;