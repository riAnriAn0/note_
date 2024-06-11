import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaMagnifyingGlass, FaPenToSquare, FaPlus } from "react-icons/fa6";
import Container from "../layout/Container";
import UserControll from "../layout/UserControll";
import PostCard from "../layout/PostCard";
import Post from "./Post";

function PageUsuario(){

    const {id} = useParams({})

    const [usuario, setUsuario] = useState()
    const [posts ,setPosts] = useState([])
    const [openPost ,setOpenPost] = useState(false)

    useEffect(() =>{
        fetch(`http://localhost:5000/usuarios/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
            setUsuario(data)
            setPosts(data.posts)
        })
    }, [id])

    const open = () => {
        setOpenPost(true)
    }

    const close = () => {
        setOpenPost(false)
    }

    return(
        <Container>
            <header className="bg-azul-escuro flex items-center justify-between p-3 w-full min-h-24 fixed top-0 left-0 z-20" >
                <div className="flex items-center p-1 ">
                    <FaPenToSquare className="text-2xl text-white ml-5 "/>
                    <span className="font-bold p-2 text-xl text-white ">Notas</span>
                </div>
                <div className="w-1/2 flex justify-between text-white">
                    <div className="flex justify-between p-2 w-1/2 bg-azul-claro rounded-full " >
                        <input 
                            type="text"
                            className="bg-azul-claro w-11/12 h-8 border-none outline-none text-sm p-2 rounded-full "
                        />
                        <FaMagnifyingGlass className="m-auto" />
                    </div  >
                    <div 
                        onClick={open} 
                        className="bg-azul-claro w-12 hover:bg-opacity-80 hover:scale-105 rounded-full" 
                    >
                        <FaPlus className="m-auto mt-4  " />
                    </div>
                </div>
                <UserControll 
                    nome={ usuario ? usuario.nome : ''} 
                    usuario={ usuario ? usuario.usuario : ''} 
                    senha={ usuario ? usuario.senha : ''} 
                    avatar={ usuario ? usuario.avatar :''} 
                    id={ usuario ? usuario.id : '' } 
                />
            </header>
            <div>
                { openPost && (<Post onclose ={close} newPost={true}/>) }
                <div className=" m-auto mt-24 p-3 pt-9 w-4/5 h-screen text-black flex gap-5 flex-wrap" > 
                    {
                        posts.length > 0 ? (
                            posts.map((post) => (
                                <PostCard
                                    titulo={post.titulo}
                                    post={post.post}
                                    key={post.id}
                                    id ={post.id}
                                />
                            ))
                        ) : (
                            "Não há notas!"
                        )
                    }
                </div>
            </div>
        </Container>
    )
}

export default PageUsuario