const CarDetails = ({ marca, km, cor, newCar }) => {

  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>Marca: {marca}</li>
            <li>KM: {km}</li>
            <li>Cor: {cor}</li>
        {newCar && <li><strong>este carro é novo!</strong></li>}
        </ul>
    </div>
  )
}

export default CarDetails