import { useState } from "react";
import { FaEye, FaPen, FaRegEyeSlash } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import EditeInfo from "./EditeInfo";
import Tema from '../buttons/Tema';

function UserControll({ usuario, nome, senha, id, avatar }) {
  const [menuAtivo, setMenuAtivo] = useState(false);
  const [verSenha, setVerSenha] = useState(false);
  const [inputType, setInputType] = useState('password');
  const [openEditPerfil, setOpenEditPerfil] = useState(false);

  const open = () => {
    setOpenEditPerfil(true);
  };

  const close = () => {
    setOpenEditPerfil(false);
  };

  return (
    <div>
      {menuAtivo ? (
        <div className="transition-all fixed top-0 right-0 z-20 bg-slate-300 dark:bg-preto dark:text-white w-72 h-full">
          <div className="w-full flex justify-between p-5 dark:text-white">
            <FaXmark className="hover:opacity-30" onClick={() => setMenuAtivo(false)} />
            <Tema />
            <EditeInfo id={id} onClose={close} open={openEditPerfil} />
          </div>
          <div className="w-full mt-14">
            <img
              onClick={() => setMenuAtivo(true)}
              className="w-36 m-auto rounded-full outline outline-gray-500"
              src={avatar ? avatar : "https://via.placeholder.com/700"}
              alt="perfil"
            />
            <div className="bg-claro dark:bg-cinza w-max p-2 rounded-full fixed top-60 right-20">
              <FaPen onClick={open} className="hover:opacity-30" />
            </div>
          </div>
          <div className="w-full mt-8 text-lg text-center hover:underline">
            <p>{usuario ? usuario : 'Adicione seu Nome'}</p>
          </div>
          <div className="w-full h-full mt-9 flex flex-col items-center gap-5 text-sm">
            <div className="w-4/5 bg-claro dark:bg-cinza h-max rounded-lg p-2">
              <p className="font-semibold">Usuário:</p>
              <p className="w-full text-center text-base">{nome}</p>
            </div>
            <div className="w-4/5 bg-claro dark:bg-cinza h-max rounded-lg p-2">
              <p className="font-semibold">Senha:</p>
              <div className="flex">
                <input
                  readOnly
                  value={senha ? senha : '.........'}
                  type={inputType}
                  className="w-full bg-claro dark:bg-cinza border-none outline-none text-center"
                />
                {verSenha ? (
                  <FaEye
                    onClick={() => {
                      setVerSenha(!verSenha);
                      setInputType('password');
                    }}
                  />
                ) : (
                  <FaRegEyeSlash
                    onClick={() => {
                      setVerSenha(!verSenha);
                      setInputType('text');
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={menuAtivo ? 'w-full mt-14' : ''}>
          <img
            onClick={() => setMenuAtivo(true)}
            className="visible w-16 rounded-full mr-5"
            src={avatar ? avatar : "https://via.placeholder.com/700"}
            alt="perfil"
          />
        </div>
      )}
    </div>
  );
}

export default UserControll;
