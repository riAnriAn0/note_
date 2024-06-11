import { useState } from "react"
import Button from "./Inputs/Button"
import Input from "./Inputs/Input"
import Mensagem from "./Inputs/Mensagem"

function LoginForm({Logar, msg}) {

    const[userLogando, setUserLogando] = useState({})

    function submit(e) {
        e.preventDefault()
        Logar(userLogando)
    }

    function inputChange(e) {
        setUserLogando({...userLogando, [e.target.name] : e.target.value})
    }
    return(
        <form onSubmit={submit} className=" flex flex-col gap-10 max-w-max p-10 ">
            <Input 
                name={'nome'}
                type={'text'}
                placeholder={'Usuário'}
                onchange={inputChange}
            />
            <Input 
                name={'senha'}
                type={'password'}
                placeholder={'Senha'}
                onchange={inputChange}
            />
            <Button
                text={'Entrar'}
                customStyle={' w-80 max-xs:w-64  p-3 rounded-xl bg-azul-escuro text-white hover:scale-105 hover:bg-opacity-80'}
            />
            <Mensagem
                customStyle={'text-red-500 text-xs '}
                msg={msg && msg }
            />
        </form>
    )
}

export default LoginForm