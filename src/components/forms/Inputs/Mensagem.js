import { useEffect, useState } from 'react'

function Mensagem({ customStyle, msg}){

    const [visible, setvisible] = useState(false)

    useEffect(()=>{
        if(!msg){
            setvisible(false)
            return
        }

        setvisible(true)

        const timer = setTimeout(() =>{
            setvisible(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [msg])

    return(
       <>
            {visible && (
                <div className={customStyle} >
                    {msg}
                </div>
            )}
       </>
    )
}

export default Mensagem