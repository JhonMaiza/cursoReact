import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState(['One punch']);

  const onAddCategory = ( newCatergory ) => {
    if( categories.includes( newCatergory )) return 
    setCategories( [ newCatergory, ...categories,] );
    // setCategories( cat =>  [...categories, 'valorant'] )
  };
  
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={ onAddCategory }
      />

      { 
        categories.map( category => (
          <GifGrid key={ category } category={category} />
        ))
      }

    </>
  )
}