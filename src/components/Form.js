import {useState} from 'react'

function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(name);
        console.log("Usuário Cadastrado!");
    } 
    const [name, setName] = useState()
    return (
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input 
                    id="name"
                    name="name"
                    type="text" 
                    placeholder="Digite o nome"
                    onChange={(e)=>setName(e.target.value)}
                    ></input>
                </div>
                <div>
                    <input 
                    id="email"
                    name="email"
                    type="email" 
                    placeholder="Digite o email"></input>
                </div>
                <div>
                    <input type="submit" value="cadastrar"></input>
                </div>
            </form>
        </div>
    )
}

export default Form