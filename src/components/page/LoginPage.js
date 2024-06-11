import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { FaPenToSquare } from "react-icons/fa6";
import { FaGithub, FaGoogle, FaMicrosoft } from "react-icons/fa";

import LoginForm from "../forms/LoginForm";
import Container from "../layout/Container";
import Tema from "../buttons/Tema";

function Test() {
    const[error, setError] = useState('')
    const navigate = useNavigate()

    function get(userLogando) {

        if (userLogando.nome === '' || userLogando.senha === '') {
            return setError('Usuario ou senha invalidos!')
        }

        fetch(`http://localhost:5000/usuarios`)
        .then((resp) => resp.json())
        .then((data) => {

            const user = data.find(user => user.nome === userLogando.nome && user.senha === userLogando.senha)
        
            if (user) {
                navigate(`/usuario/${user.id}`)
            } else {
                return setError('Usuario ou senha invalidos')
            }
        })
    }

    return (
        <Container customStyle={' flex flex-col items-center dark:bg-cinza'} >
            <div className=" flex justify-between p-5 w-full max-xs:m-auto max-xs:mb-0" >
                <div className="flex">
                    <FaPenToSquare className="text-2xl text-azul-escuro max-xs:hidden"/>
                    <span className="font-bold p-2 text-xl text-azul-escuro border-r border-gray-200 max-xs:hidden" >Notas</span>
                </div>  
                <Tema />
            </div>
            <div className=" max-w-max p-4 m-auto text-center " >
                <div className=" m-auto w-max  " >
                    <h2 className="font-bold p-4 text-4xl text-azul-escuro ">Login</h2>
                </div>
                <LoginForm Logar={get} msg={error} />
                <div className=" flex justify-between max-w-60 m-auto text-3xl p-5 " >
                    <FaGoogle className="text-azul-escuro hover:text-opacity-90 hover:scale-105 "/>
                    <FaMicrosoft className="text-azul-escuro hover:text-opacity-90 hover:scale-105 "/>
                    <FaGithub className="text-azul-escuro hover:text-opacity-90 hover:scale-105 "/>
                </div>
                <span className=" text-gray-600 text-sm">ou</span>
                <Link to={'/novousuario'} >
                    <p className=" text-gray-600 text-sm hover:underline hover:text-gray-400 ">Crie uma nova conta</p>
                </Link>
            </div>
        </Container>
    )
}

export default Test
