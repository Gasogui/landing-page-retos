/* eslint-disable react/jsx-no-target-blank */
// src/components/Card/Card.js
// Card component to display details

import React from "react";
import style from './Card.module.css'

function Card({ reto }) {
  return (
    <div className={style.card} >
      <img   className={style.img}  src={reto.imgPath} alt={reto.name} />
      <div>
        <h2>{reto.name}</h2>
        <a href={reto.retoPath} target="_blank">Link del Reto</a>
      </div>
    </div>
  );
}

export default Card;
