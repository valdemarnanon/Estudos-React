
export default function Challenge() {
    const n1 = 5;
    const n2 = 30;

    const soma = () => {
        return console.log(n1 + n2)
    }

    return (
        <div>
            <h1>Numero um: {n1}</h1>
            <h1>Numero dois: {n2}</h1>
            <button onClick={soma}>Soma numeros</button>
        </div>
    )
}