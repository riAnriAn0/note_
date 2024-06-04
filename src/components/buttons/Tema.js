import { FaCircleHalfStroke } from "react-icons/fa6";

function Tema(){
    const html = document.querySelector('html');

    function tema(e) {
        e.preventDefault()
        html.classList.toggle('dark')
    }

    return(
        <div>
            <button onClick={tema} >
                <FaCircleHalfStroke className=" text-lg text-cinza dark:text-white  " />
            </button>
        </div>
    )
}

export default Tema; 