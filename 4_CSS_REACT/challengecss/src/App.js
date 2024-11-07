import './App.css';
import ViewCar from './components/ViewCar';

function App() {
  const meusCarros = [
    { name: "Fusca", km: 10000, cor: "Branca"},
    { name: "Polo", km: 32000, cor: "Cinza"},
    { name: "Onix", km: 0, cor: "Preto"}
  ]

  return (
    <div className="App">
      <h1>Detalhes de carros</h1>
      <div className='car-container'></div>
      {meusCarros.map((car) => (
        <ViewCar car={car}/>
      ))}
    </div>
  );
}

export default App;
