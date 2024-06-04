import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Container from "../layout/Container"
import { FaPenToSquare } from "react-icons/fa6"
import Tema from "../buttons/Tema"
import UserControll from "../layout/UserControll"

function PageUsuario(){

    const {id} = useParams({})

    const [usuario, setUsuario] = useState()
    
    useEffect(() =>{
        fetch(`https://note-json-server.vercel.app/usuarios/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
            setUsuario(data)
        })
    }, [])

    return(
        <Container>
            <header className="bg-azul-escuro flex items-center justify-between p-3 w-full fixed top-0 left-0 z-10" >
                <div className="flex items-center">
                    <FaPenToSquare className="text-2xl text-white"/>
                    <span className="font-bold p-2 text-2xl text-white " >Notas</span>
                </div>
                <Tema customStyle={'text-white'}/>
            </header>
            <div>
                <UserControll 
                    nome={ usuario ? usuario.nome : ''} 
                    senha={ usuario ? usuario.senha : ''} 
                    avatar={ usuario ? usuario.avatar :''} 
                    id={ usuario ? usuario.id : '' } 
                /> 

                <div className=" mt-16 p-3 h-screen text-black " >
                    oi
                </div>
            </div>
        </Container>
    )
}

export default PageUsuario