// src/components/SearchList.js
// Component to list out the cards

import React from 'react';
import Card from '../Card/Card';

function SearchList({ filtereReto }) {
  const filtered = filtereReto.map(reto =>  <Card key={reto.id} reto={reto} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;