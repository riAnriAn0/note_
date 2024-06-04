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
                return setError('Usuario ou senha invalidos!')
            }
        })
    }

    return (
        <Container customStyle={' flex flex-col items-center'} >

            <div className=" flex justify-start p-5 w-full max-xs:m-auto max-xs:mb-0 max-xs:justify-center" >

                <FaPenToSquare className="text-4xl text-verde-escuro max-xs:text-6xl"/>
                <span className="font-bold p-2 text-2xl text-verde-escuro border-r border-gray-300 max-xs:border-none max-xs:text-6xl" >Notas</span>  

            </div>

            <div className=" max-w-max p-4 m-auto shadow-xl text-center max-xs:shadow-none " >

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

                <Link to={'/novousuario'} >
                    <p className=" text-gray-600 text-sm hover:underline hover:text-gray-400 ">Crie uma nova conta</p>
                </Link>
            </div>

        </Container>
    )
}

export default Test
