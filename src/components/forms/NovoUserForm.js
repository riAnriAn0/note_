import { useState } from "react";
import Button from "./Inputs/Button";
import Input from "./Inputs/Input";
import Mensagem from "./Inputs/Mensagem";

function NovoUserForm() {

    const [novoUser, setNovoUser] = useState({})

    function submit(e) {
        e.preventDefault()
        setNovoUser({...novoUser, id : '', 
            posts:[{
                id:'',
                titulo:'',
                post:''
            }]
        })

        console.log(novoUser)
    }

    function inputChange(e) {
        setNovoUser({...novoUser, [e.target.name] : e.target.value})
    }


    return(
        <div>
            <form onSubmit={submit} className=" flex flex-col gap-10 max-w-max p-10 " >
                <Input 
                    name={'nome'}
                    type={'text'}
                    placeholder={'Digite seu nome'}
                    onchange={inputChange}
                />
                <Input 
                    name={'senha'}
                    type={'text'}
                    placeholder={'Digite sua senha'}
                    onchange={inputChange}
                />
                <Input 
                    name={'senha'}
                    type={'text'}
                    placeholder={'Digite sua senha'}
                    onchange={inputChange}
                />
                <Mensagem 
                    msg={''}
                    customStyle={'text-red-500 text-xs '}
                />
                <Button text={'Cadastrar usuário'}/>
            </form>
        </div>
    )
}

export default NovoUserForm;