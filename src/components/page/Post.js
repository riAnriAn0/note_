import { FaTrashCan, FaXmark } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {v4 as uuidv4} from 'uuid';
import Button from "../forms/Inputs/Button";
import Mensagem from "../forms/Inputs/Mensagem";

function Post({ titulo, post, newPost, onclose, idPost }) {

  const {id} = useParams({})
  const [novoArrayPosts, setNovoArrayPosts] = useState([])
  const [erro, setErro] = useState('')
  const [novoPost, setNovoPost] = useState({})
  const [user, setUser] = useState({})
  const db ="https://note-json-server.vercel.app/usuarios"

  function recarregar(){
    fetch(`${db}/${id}`)
    .then((resp) => resp.json())
    .then((data) =>{
      setUser(data)
      setNovoArrayPosts(data.posts)
    })
  }

  useEffect(recarregar,[id])

  function enviarPost(e) {

    e.preventDefault()

    setErro('')

    if ( !novoPost.titulo || !novoPost.post ) {
      return  setErro("Adicione um texto válido!!!")
    }
    
    novoPost.id = uuidv4()
    novoArrayPosts.push(novoPost)

    setUser({...user, posts : novoArrayPosts})

    fetch(`${db}/${id}`,{
      method:'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(user)
    })
    .then((resp) => resp.json())
    .then((data) => {
      onclose()
      window.location.reload()
    })
    .catch((err) => console.log(err))
  }

  function criarPost(e) {
    setNovoPost({...novoPost, [e.target.name] : e.target.value })
  }

  function deletar(){

    if (!idPost) {
      return 
    }
    
    const postsAtualizados = novoArrayPosts.filter((post) => ( post.id !== idPost ))
    const userAtualizado = user

    userAtualizado.posts = postsAtualizados;

    fetch(`${db}/${id}`,{
      method:'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(userAtualizado)
    })
    .then((resp) => resp.json())
    .then((data) => {
      onclose()
      window.location.reload()
    })
    .catch((err) => console.log(err))

  }

  return (
    <form onSubmit={enviarPost} className="fixed top-0 left-0 z-20 w-full h-full bg-black bg-opacity-30">
      <div className="bg-slate-300 dark:bg-cinza fixed z-30 top-16 left-2/4 right-2/4 -translate-x-1/2 w-2/3 dark:text-white text-black p-5">
        <div className="flex justify-between">
          <input
            type="text"
            readOnly={!newPost}
            value={titulo}
            autoComplete="off"
            placeholder="Adicione um título"
            name="titulo"
            onChange={criarPost}
            className="p-2 bg-slate-300 dark:bg-cinza font-semibold text-xl border-none outline-none"
          />
          <div onClick={(e) => { e.stopPropagation(); onclose(); }} className="p-3 text-lg hover:opacity-60">
            <FaXmark />
          </div>
        </div>
        <div>
          {newPost ? (
            <textarea
              cols="100"
              rows="10"
              autoFocus={true}
              placeholder="Nota"
              spellCheck="true"
              maxLength={1500}
              name="post"
              onChange={criarPost}
              className="p-2 mt-5 bg-slate-300 dark:bg-cinza resize-none border-none outline-none w-11/12"
            />
          ) : (
            <div className="bg-slate-300 dark:bg-cinza w-full h-96 p-3 mt-8 text-justify break-words overflow-auto">
              {post || ""}
            </div>
          )}
        </div>
        <div className="flex gap-9 justify-between text-lg text-black dark:text-white p-5">
          <div>
            { erro && <Mensagem msg={erro}  customStyle={"text-red-500 text-xs "}/>}
          </div>
          <div className="flex gap-5 items-center" >
              <FaTrashCan onClick={deletar} className="hover:opacity-70 hover:scale-105" />
              <Button
                text={"Salvar"}
                customStyle={"bg-azul-escuro text-base text-white h-max p-2 w-20 rounded-lg hover:scale-105 hover:bg-opacity-40"}
              />
          </div>
        </div>
      </div>
    </form>
  );
}

export default Post;
