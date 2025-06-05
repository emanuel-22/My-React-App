const StaticComponent = () =>{
  const items = ["Maximo", "Victoria", "Emanuel"];
  return (
    <ul>
      {/* Utilizamos map para iterar sobre cada elemento del array */}
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default StaticComponent;