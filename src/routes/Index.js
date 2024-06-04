import { Route, Routes } from "react-router-dom";
import LoginPage from ".././components/page/LoginPage";
import Usuario from ".././components/page/Usuario";
import NovoUsuario from "../components/page/NovoUsuario";

function Index(){
    return(
        <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route path="/usuario/:id" element={<Usuario />}/>
            <Route path="/novousuario" element={<NovoUsuario />}/>
        </Routes>
    )
}

export default Index;
