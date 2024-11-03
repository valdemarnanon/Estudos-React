

export default function Events() {

    const handleMyEvent = (e) => {
        console.log(e);
    }

    const renderSomething = (x) => {
        if(x) {
            return <h1>Renderizando isso!</h1>;
        } else {
            return <h1>Támbem posso renderisar isso!</h1>;
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Click Aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("Clickou!")}>Clique aqui tambem!</button>
                <button onClick={() => {
                    if(true) {
                        console.log("Isso não deveria existir =)")
                    }
                }}
                >
                Clica aqui, por favor.     
                </button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}