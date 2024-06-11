import { useState } from "react";
import Button from "./Inputs/Button";
import Input from "./Inputs/Input";
import Mensagem from "./Inputs/Mensagem";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";

function NovoUserForm() {
    const [novoUser, setNovoUser] = useState({ id: '', nome: '', avatar: '', posts: [] });
    const [erro, setErro] = useState('');
    const [msgStyle, setMsgStyle] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    function onsubmit(e) {
        e.preventDefault();
        setErro('');

        console.log(novoUser)

        if (!novoUser.nome || !novoUser.senha) {
            setErro('Digite um usuário ou senha válidos');
            setMsgStyle('text-red-500 text-xs');
            return;
        }
        novoUser.id = uuidv4();

        fetch('http://localhost:5000/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoUser)
        })
        .then(response => response.json())
        .then(data => {
            setErro('Usuário cadastrado com sucesso');
            setMsgStyle('text-green-600 text-xs');
            setTimeout(() => {
                navigate('/');
            }, 2000);
        })
        .catch((error) => {
            console.error('Error:', error);
            setErro('Erro ao cadastrar usuário');
            setMsgStyle('text-red-500 text-xs');
        });
    }

    function inputChange(e) {
        setNovoUser({ ...novoUser, [e.target.name]: e.target.value });
    }

    function inputSenha(e) {
        if (e.target.value === senha) {
            setNovoUser({ ...novoUser, [e.target.name]: e.target.value });
        } else {
            setErro('As senhas devem ser iguais!');
            setMsgStyle('text-red-500 text-xs');
        }
    }

    return (
        <div>
            <form onSubmit={onsubmit} className="flex flex-col gap-10 max-w-max p-10">
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
                    onchange={(e) => { setSenha(e.target.value) }}
                />
                <Input 
                    name={'senha'}
                    type={'text'}
                    placeholder={'Confirme sua senha'}
                    onchange={inputSenha}
                />
                { erro && <Mensagem 
                    msg={erro}
                    customStyle={msgStyle ? msgStyle : 'text-red-500 text-xs'}
                />}
                <Button 
                    text={'Cadastrar usuário'}
                    customStyle={'w-80 max-xs:w-64 p-3 rounded-xl bg-azul-escuro text-white hover:scale-105 hover:bg-opacity-80'}
                />
            </form>
        </div>
    );
}

export default NovoUserForm;
