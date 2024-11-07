import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';


function App() {
  const n = 15;
  const [ name ] = useState("Valdemar");

  const [ redTitle ] = useState(true);

  return (
    <div className="App">
    {/* CSS global */}
      <h1>React com CSS</h1>
      
    {/* CSS component */}
      <MyComponent />
      <p>Este paragrafo é do App.js</p>
      
      {/* Inline CSS */}
      <p style={{
          color: 'magenta',
          padding: '25px',
          borderTop: '2px solid red'
        }}>
        Este elemento foi utilizado de forma inline
      </p>

      {/* CSS Inline dinamico */}
      <h2 style={n > 10 ? {color: "purple"} : {color: "pink"}}>
        CSS dinamico
      </h2>
      <h2 style={n > 10 ? {color: "purple"} : {color: "pink"}}>
        CSS dinamico
      </h2>
      <h2 style={name === "Valdemar" ? {color: "green", backgroundColor: 'blac'} : null}>
        Teste Nome
      </h2>

      {/* Classe dinamica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter classe dinamica
      </h2>

      {/* CSS Modules */}
      <Title />
      <h2 className='myTitle'>Testando</h2>
    </div>
  );
}

export default App;
