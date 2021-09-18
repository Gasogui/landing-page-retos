// src/components/Card/Card.js
// Card component to display details

import React from 'react';

function Card({reto}) {
  return(
    <div className="container">
      <img className="img-container" src={reto.imgPath} alt={reto.name} />
      <div>
        <h2>{reto.name}</h2>
        <a href={reto.retoPath}>Expanding Cards</a>
      </div>
    </div>
  );
}

export default Card;