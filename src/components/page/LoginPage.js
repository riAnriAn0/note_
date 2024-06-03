import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import LoginForm from "../forms/LoginForm"
import Container from "../layout/Container";
import { FaPenToSquare } from "react-icons/fa6";
import { FaGithub, FaGoogle, FaMicrosoft } from "react-icons/fa";


function Test() {
    const[error, setError] = useState('')
    const navigate = useNavigate()

    function get(userLogando) {

        fetch(`http://localhost:5000/usuarios`)
        .then((resp) => resp.json())
        .then((data) => {

            const user = data.find(user => user.nome === userLogando.nome && user.senha === userLogando.senha)
        
        if (user) {
            navigate(`/usuario/${user.id}`)
        } else {
           return setError('Usuario não encontrado!')
        }
        })
    }

    return (
        <Container customStyle={' flex flex-col items-center'} >
            <div className=" flex justify-start p-5 w-full " >
                <FaPenToSquare className="text-4xl text-verde-escuro"/>
                <span className="font-bold p-2 text-2xl text-verde-escuro border-r-2 border-gray-300" >Notas</span>  
            </div>
            <div className=" max-w-max p-4 m-auto shadow-xl text-center" >
                <div className=" m-auto w-max  " >
                    <h2 className="font-bold p-4 text-4xl text-verde-escuro ">Login</h2>
                </div>
                <LoginForm Logar={get} msg={error} />
                <div className=" flex justify-between max-w-60 m-auto text-3xl p-5 " >
                    <FaGoogle className="text-verde-escuro hover:text-opacity-90 hover:scale-105 "/>
                    <FaMicrosoft className="text-verde-escuro hover:text-opacity-90 hover:scale-105 "/>
                    <FaGithub className="text-verde-escuro hover:text-opacity-90 hover:scale-105 "/>
                </div>
                <span className=" text-gray-600 text-sm">ou</span>
                <Link><p className=" text-gray-600 text-sm hover:underline hover:text-gray-400 ">Crie uma nova conta</p></Link>
            </div>
        </Container>
    )
}

export default Test
