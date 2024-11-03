// Arquivo de estilo
import MyComponent from "./MyComponent";


function FistComponent() {
    // essa função faz isso

    return (
        <div>
            {/*Algum comentario*/}
            <h1>Meu primeiro componente</h1>
            <p className="teste">Meu texto</p>
            <MyComponent />
        </div>
    );
}

export default FistComponent;