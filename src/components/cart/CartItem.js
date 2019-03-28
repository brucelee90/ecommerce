import React from "react";
import Button from "../Button";
import { MDBIcon } from "mdbreact";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row text-capitalize text-center mb-3" style={{borderBottom:'.1rem solid #e0e0e0'}}>
      {/* Artikel Bild */}
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "5rem" }}
          alt="product"
          className="img-fluid"
        />
      </div>
      {/* Name */}
      <div className="col-10 mx-auto my-auto col-lg-2">Artikel: {title}</div>
      {/* Preis */}
      <div className="col-10 mx-auto my-auto col-lg-2">Preis: € {price}</div>
      {/* Buttons für Anzahl*/}
      <div className="col-10 mx-auto my-auto col-lg-2">
        <div className="row">
            <div className="mx-auto">
                {count}
            </div>
        </div>
        <div className="row">
            <div className="col-6">
                <div className="float-right" onClick={()=>decrement(id)}>
                    <Button plusMinus='-'/>
                </div>
            </div>
            <div className="col-6">
                <div className="float-left" onClick={()=>increment(id)}>
                    <Button plusMinus='+'/>
                </div>
            </div>
        </div>
      </div>
      <div className="col-10 my-auto mx-auto col-lg-2">
        <div className="mt-2">
            <MDBIcon 
            onClick={()=>{
                removeItem(id)
            }}
            icon="trash" 
            style={{color:'#dd2c00', cursor:'pointer'}} 
            color="red darken-1"/>
        </div>
      </div>
      <div className="col-10 my-auto mx-auto col-lg-2">Preis Gesamt: € {total}</div>
    </div>
  );
}
