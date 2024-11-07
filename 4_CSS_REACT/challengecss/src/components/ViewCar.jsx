import styles from './ViewCar.module.css'

const ViewCar = ({ car }) => {
  return (
    <div className={styles.card}>
      <h1>{car.name}</h1>
      <h1>KM: {car.km}</h1>
      <h1>Cor: {car.cor}</h1>
    </div>
  )
}

export default ViewCar;