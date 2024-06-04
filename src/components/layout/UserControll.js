import { useState } from "react";
import { FaAngleDoubleRight, FaPen } from "react-icons/fa";

function UserControll({nome, senha, id, avatar}) {

    const[menuStyle, setMenuStyle] = useState()
    const[imgStyle, setImgStyle] = useState()
    const[nomeStyle, setnomeStyle] = useState('invisible')
    const[editeStyle, setEditStyle] = useState('invisible')

    let cont = 0

    function openMenu() {
        if (cont % 2 === 0) {
            setMenuStyle('min-w-80 transition-all')
            setEditStyle(' visible text-gray-800 text-lg flex justify-end p-3 dark:text-white')
            setImgStyle('w-32')
            setnomeStyle('visible dark:text-white p-4 text-center font-semibold')

            cont += 1
        } else {
            setMenuStyle('')
            setEditStyle('invisible')
            setImgStyle('')
            setnomeStyle('invisible')
        }
    }

    return(
        <div className={`bg-slate-300 dark:bg-preto h-3/4 p-3 flex flex-col justify-between fixed z-10 top-20 left-0 rounded-r-xl transition-all max-xs:h-20 max-xs:w-full max-xs:rounded-none max-xs:flex-row max-xs:items-center  ${menuStyle}`} >
            <div className={``} >
                <div className={`${editeStyle}`}>
                    <div className="w-max p-2 rounded-full bg-claro hover:bg-gray-400 dark:bg-cinza dark:hover:bg-slate-800" >
                        <FaPen />
                    </div>
                </div>
                <div className={`w-max m-auto`} >
                    <img className={ `w-12 rounded-full outline outline-2 outline-white ${imgStyle}`} src={avatar} alt="perfil" />
                </div>
                <div className={`${nomeStyle}`} >
                    <span>Usuário:</span><p>{nome.toUpperCase()}</p>
                </div>
            </div>
            <div  onClick={openMenu} className={`text-white bg-azul-escuro w-max p-2 text-lg rounded-full cursor-pointer hover:bg-azul-claro`} >
                <FaAngleDoubleRight/>
            </div>
        </div>
    )
}

export default UserControll;