
const UserDetails = () => {
    const usuarios = [
        {id: 1, nome: "Valdemar", idade: "21", profissao: "Garçom"},
        {id: 2, nome: "Chelsea", idade: "17", profissao: "Trabalhador"},
        {id: 3, nome: "Alexsandro", idade: "41", profissao: "Trabalhador"},
    ]

  return (
    <div>
        <div>
            <p>{usuarios.map(user => (
                <p>Olá {user.nome}! Você tem {user.idade} e sua profissão é {user.profissao}</p>
            ))}</p>
        </div>

        <p>{usuarios.map(user => user.idade >= 18 ? <p>{user.nome} - pode tirar Carteira de motorista</p> : <p>{user.nome} - Não pode tirar carteira!</p>)}</p>
    </div>
  )
}

export default UserDetails