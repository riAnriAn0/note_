import { Route, Routes } from "react-router-dom";
import LoginPage from ".././components/page/LoginPage";
import Usuario from ".././components/page/Usuario";

function Index(){
    return(
        <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route path="/usuario/:id" element={<Usuario />}/>
        </Routes>
    )
}

export default Index;
