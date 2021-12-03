import React from "react";

export default function Card({ offer }) {
  const { img, name, discount } = offer;
  console.log(img, name);
  return (
    <div class='card' style={{ width: "18rem", margin: "25px" }}>
      <img src={img} class='card-img-top' alt='...' />
      <div class='card-body'>
        <h5 class='card-title text-center'>{name}</h5>
        <p class='card-text bg-danger text-white  text-center'>
          Discount: {discount}
        </p>
      </div>
    </div>
  );
}
