import React, { useCallback, useState, useMemo } from "react";

const Child = React.memo(({ counter }) => {
  console.log("Renderizando hijo")
  return <p>Counter: {counter} </p>
})


function ExpensiveCalculation({ num }){
  const result = useMemo(() => {
    console.log("calculando...")
    return num*2;
  }, [num])
  return <p>Resultado: {result} </p>
}

function CounterWithReactMemo(){
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter(prev => prev +1)
  })
  
  

  return(
    <div> 
      <button onClick={increment}>
        Incrementar Otro
      </button>
      <Child counter={counter}/>
      <ExpensiveCalculation num={counter}/>
    </div>
  )
}

export default CounterWithReactMemo;