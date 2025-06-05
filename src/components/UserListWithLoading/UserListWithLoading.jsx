import { useState, useEffect } from "react";

const UserList = () =>{

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(()=>{
    const fechUsers = async () => {
      try {
        // Recarga la pagina y sale cargando
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // Recarga la pagina y sale error
        //const response = await fetch('https://jsonplaceholder.typicode.com/usersas')

        if(!response.ok){
          throw new Error("Error al obtener los datos.")
        }
        const data = await response.json(); 
        setUsers(data)
      } catch(error){
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fechUsers();
  },[])


  if (isLoading){
    return <h1>Cargando...</h1>
  }

  if (error){
    return <h1>Error: {error.message}</h1>
  }

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