import React from "react";

export const Small = React.memo(( { value } ) => {
  console.log(' Se dibujo de nuevo');
    
  return (
    <small>{ value }</small>
  )
})

