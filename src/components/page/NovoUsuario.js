import NovoUserForm from "../forms/NovoUserForm";
import Container from "../layout/Container";
import { FaUserCircle } from "react-icons/fa";

function NovoUsuario(){

    return(
        <Container customStyle={' flex flex-col items-center dark:bg-cinza'} >
            <div className=" max-w-max p-4 m-auto shadow-xl shadow-gray-600 text-center max-xs:shadow-none dark:shadow-slate-900 " >
                <div className=" m-auto w-max text-8xl text-azul-escuro">
                    <FaUserCircle/>
                </div>
                <NovoUserForm submit={onsubmit}/>
            </div>   
        </Container>
    )
}

export default NovoUsuario