import { useState } from "react"

const ListRender = () => {
    const [ list ] = useState(["Matheus", "Pedro", "Josias", "Maria"])

    const [ users, setUsers ] = useState([
        {id: 1, name: "Matheus", idade: 31},
        {id: 2, name: "Valdemar", idade: 21},
        {id: 3, name: "Luiz", idade: 22}
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {

            return prevUsers.filter((user) => randomNumber !== user.id)
        });
    };

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={users.id}>{user.name} - {user.idade}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender