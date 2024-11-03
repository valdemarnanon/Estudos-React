
export default function Challenge() {
    const n1 = 5;
    const n2 = 30;

    return (
        <div>
            <h1>Numero um: {n1}</h1>
            <h1>Numero dois: {n2}</h1>
            <button onClick={() => console.log(n1 + n2)}>Soma numeros</button>
        </div>
    )
}