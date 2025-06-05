import { useState, useEffect } from "react";

const SearchPosts = () =>{
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${query}`)
    .then((response) => response.json())
    .then((data) => setPosts(data))
    .catch((error) => console.error("Error en data: ", error))
  },[query])

  return(
    <div>
      <h1> Lista de Usuarios </h1>
      <input 
        type="text"
        placeholder="Buscar por título"
        value={query}
        onChange={(event) => setQuery(event.target.value) }
      />
      <ul>
        {/* Utilizamos map para iterar sobre cada elemento del array */}
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default SearchPosts;