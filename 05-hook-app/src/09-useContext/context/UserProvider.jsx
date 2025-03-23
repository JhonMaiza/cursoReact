import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     id: 123,
//     name: 'juan',
//     email: 'juan@outlook.com'
// };

export const UserProvider = ( { children }) => {
    {/* <UserContext.Provider value={ { hola: 'Mundo', user: user }}> */}
  const [ user, setUser ] = useState([]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
        { children }
    </UserContext.Provider>
  )
}