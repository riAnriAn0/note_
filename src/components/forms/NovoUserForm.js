import { useState } from "react";
import Button from "./Inputs/Button";
import Input from "./Inputs/Input";
import Mensagem from "./Inputs/Mensagem";
import {v4 as uuidv4} from 'uuid';
import { useNavigate } from "react-router-dom";

function NovoUserForm() {
    
    const [novoUser, setNovoUser] = useState({id : '', avatar: '', posts:[]})
    const [erro, setErro] = useState('')
    const [msgStyle, setMsgStyle] = useState()
    const [senha, setSenha] = useState()
    const navegate = useNavigate()
    
    function onsubmit(e) {
        e.preventDefault()

        if ( !novoUser.nome || !novoUser.senha ) {
            return setErro('Digite um usuario ou senha válidos')
        }

        novoUser.id = uuidv4()

        console.log(novoUser)

        fetch('https://note-json-server.vercel.app/usuarios', {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoUser)
        })
        .then(response => response.json())
        .then(data => {
            setErro  ('Usuário cadastrado com sucesso')
            setMsgStyle('text-green-600 text-xs')
            navegate('/')
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    }

    function inputChange(e) {
        setNovoUser({ ...novoUser,[e.target.name] : e.target.value  })
    }
    
    function inputSenha(e) {
        if (e.target.value === senha ) {
            setNovoUser({...novoUser, [e.target.name] : e.target.value})
        }else{
            return setErro('As senha devem ser iguais!')
        }
    }



    return(
        <div>
            <form onSubmit={onsubmit} className=" flex flex-col gap-10 max-w-max p-10 " >
                <Input 
                    name={'nome'}
                    type={'text'}
                    placeholder={'Digite seu nome'}
                    onchange={inputChange}
                />
                <Input 
                    name={'senha'}
                    type={'text'}
                    placeholder={'Crie uma senha'}
                    onchange={(e) => { setSenha(e.target.value)}}
                />
                <Input 
                    name={'senha'}
                    type={'text'}
                    placeholder={'Confirme sua senha'}
                    onchange={inputSenha}
                />
                <Mensagem 
                    msg={erro}
                    customStyle={msgStyle ? msgStyle :'text-red-500 text-xs '}
                />
                <Button text={'Cadastrar usuário'}/>
            </form>
        </div>
    )
}

export default NovoUserForm;