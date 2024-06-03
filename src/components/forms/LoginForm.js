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
        <form onSubmit={submit} className=" flex flex-col gap-10 max-w-max p-10">
            <Input 
                // customStyle={}
                name={'nome'}
                type={'text'}
                placeholder={'Usuário'}
                onchange={inputChange}
            />
            <Input 
                // customStyle={}
                name={'senha'}
                type={'text'}
                placeholder={'Senha'}
                onchange={inputChange}
            />
            <Button
                // customStyle={}
                text={'Entrar'}
            />
            <Mensagem
                customStyle={'text-red-500'}
                msg={msg && msg }
            />
        </form>
    )
}

export default LoginForm