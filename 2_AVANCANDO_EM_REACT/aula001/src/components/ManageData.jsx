import { useState } from "react";


export default function ManageData() {
    let someDate = 10;


    const [number, setNumber] = useState(15);

    console.log(number)

  return (
    <div>
        <div>
            <p>Valor: {someDate}</p>
            <button onClick={() => someDate = 15}>Mudar variavel</button>
        </div>
        <div>
          <p>Valor: {number}</p>
          <button onClick={() => setNumber(25)}>Mudar o state</button>
        </div>
    </div>
  )
}
