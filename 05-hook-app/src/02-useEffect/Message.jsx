import { useEffect } from "react"

export const Message = () => {
  useEffect(() => {
    console.log('mounted');
    
    return () => {
      console.log('unmonted');
      
    }

  }, [])

  return (
    <>
      <h3>Usuario ya existe</h3>
    </>
  )
}

