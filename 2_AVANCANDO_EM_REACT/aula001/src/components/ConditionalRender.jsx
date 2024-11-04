import { useState } from 'react'

const ConditionalRender = () => {
    const [ x ] = useState(false);

    const [ name, setName ] = useState("Matheus");

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, Sim!</p>}
        {!x && <p>Agora x é falso</p>}
        <h1>IF TERNARIO</h1>
        {name === "João" ? (<p>Sim é joão</p>) : (<p>Não não encontrado</p>)}
        <button onClick={() => setName("João")}>Clica aqui!</button>
    </div>
  )
}

export default ConditionalRender;