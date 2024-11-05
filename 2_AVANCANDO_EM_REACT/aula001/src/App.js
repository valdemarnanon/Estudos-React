// import Imagem from './assets/logo512.png';
import { useState } from "react";
import './App.css';
// import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from "./components/Container";
// import ListRender from './components/ListRender';



function App() {
  // const nome = "Jaquim";
  const [ userName ] = useState("Maria");
  
  const cars = [
    {id: 1, marca: "Ferrari", cor: "Amarela", newCar: true, km: 0},
    {id: 2, marca: "KIA", cor: "Branco", newCar: false, km: 3192},
    {id: 3, marca: "Renault", cor: "Aul", newCar: true, km: 3223}
  ]

  


  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* <ConditionalRender /> */}
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails marca="Porshe" km={120000} cor="Azul" newCar={false} />
      {/* reaproveitando */}
      <CarDetails marca="Ford" km={0} cor="Preto" newCar={true} />
      <CarDetails marca="Ford" km={4500} cor="Preto" newCar={false} />
      {/* loop em array de map */}
      {cars.map((car) => (
        <CarDetails 
          marca={car.marca} 
          cor={car.cor} 
          km={car.km} 
          newCar={car.newCar} 
        />
      ))}
      <Fragment propFragment="Teste" />
      {/* children */}
      <Container myValue="Testing">
          <p>Olá mundo!</p>
      </Container>
      <Container myValue="Testing 2">
          <h5>Olá mundo!</h5>
      </Container>
    </div>
  );
}

export default App;
