
export default function TemplateEpressions() {
    const name = "Valdemar"
    const data = {
        idade: 31,
        trabalho: "programador",
    }

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.trabalho}</p>
            <p>{console.log("JSX React")}</p>
        </div>
    )
}