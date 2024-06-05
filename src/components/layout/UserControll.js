import { useState } from "react";
import { FaPen } from "react-icons/fa";

function UserControll({nome, senha, id, avatar}) {

    const[bgModal, setBgModal] = useState('')
    const[menuStyle, setMenuStyle] = useState('')
    const[imgStyle, setImgStyle] = useState('w-14')
    const[nomeStyle, setnomeStyle] = useState('invisible')
    const[editeStyle, setEditStyle] = useState('invisible')

    let cont = 0

    function openMenu() {
        if (cont % 2 === 0) {
            setMenuStyle('bg-slate-300 min-h-96 min-w-80 transition-all flex-col justify-between fixed z-10 top-1/3 left-1/3 translate-x-2/4')
            setEditStyle(' visible text-gray-800 text-lg flex justify-end p-3 dark:text-white')
            setImgStyle('w-32')
            setnomeStyle('visible dark:text-white p-4 text-center font-semibold')
            setBgModal('fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40')
            cont += 1
        } else {
            setMenuStyle('')
            setEditStyle('invisible')
            setImgStyle('w-14')
            setnomeStyle('invisible')
            setBgModal('')
        }
    }

    return(
        <div className={` ${bgModal}`} >
            <div className={ ` top dark:bg-preto h-20 flex justify-center items-center transition-all max-xs:h-20 max-xs:w-full max-xs:rounded-none max-xs:flex-row max-xs:items-center  ${menuStyle}`} >
                <div className={`  `} >
                    <div className={`${editeStyle}`}>
                        <div className="w-max p-2 rounded-full bg-claro hover:bg-gray-400 dark:bg-cinza dark:hover:bg-slate-800" >
                            <FaPen />
                        </div>
                    </div>
                    <div className={`w-max m-auto`} >
                        <img onClick={openMenu} className={ `rounded-full outline outline-2 outline-white ${imgStyle}`} src={avatar} alt="perfil" />
                    </div>
                    <div className={`${nomeStyle}`} >
                        <span>Usuário:</span><p>{nome.toUpperCase()}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserControll;