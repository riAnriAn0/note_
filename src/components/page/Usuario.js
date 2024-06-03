import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Usuario(){

    const {id} = useParams({})

    const [usuario, setUsuario] = useState()
    
    useEffect(() =>{
        fetch(`http://localhost:5000/usuarios/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
            setUsuario(data)
        })
    }, [])

    return(
        <div>
            pagina do: {usuario && usuario.nome}
        </div>
    )
}

export default Usuario