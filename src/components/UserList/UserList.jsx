import { useState, useEffect } from "react";

const UserList = () =>{
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => setUsers(data))
    .catch((error) => console.error("Error en data: ", error))
  },[])

  return(
    <div>
      <h1> Lista de Usuarios </h1>
      <ul>
      {/* Utilizamos map para iterar sobre cada elemento del array */}
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
    </div>
  )
}

export default UserList;