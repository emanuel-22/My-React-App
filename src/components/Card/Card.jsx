// import "./styless.css"

//import styless from "./Card.module.sass"

const Card = () =>{
  const textStyle = {
    color:"blue", 
    fontSize: "2rem"
  }
  
   return (
     //<div className={styless.card}>Soy una card</div>
     <div style={textStyle}>Soy una card</div>
   )
}

export default Card;