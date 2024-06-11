import React, { useState, useEffect } from 'react';
import styles from './EditeInfo.module.css';
import { FaXmark } from 'react-icons/fa6';
import Button from '../forms/Inputs/Button';

function EditeInfo({ id, onclose, open }) {
  const [avatar, setAvatar] = useState([]);
  const [infoUser, setInfoUser] = useState();
  const [perfilAtualizado, setPerfilAtualizado] = useState({});

  // Pegar ícones de perfil
  useEffect(() => {
    fetch('http://localhost:5000/icone')
      .then((response) => response.json())
      .then((avatar) => setAvatar(avatar))
      .catch((error) => console.error('Erro ao buscar dados:', error));
  }, []);

  // Pega informações do usuário atual
  useEffect(() => {
    fetch(`http://localhost:5000/usuarios/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPerfilAtualizado(data);
        setInfoUser(data);
      })
      .catch((error) => console.error('Erro ao buscar dados:', error));
  }, [id]);

  // Atualiza perfil
  function atualizarPerfil(e) {
    e.preventDefault();
    fetch(`http://localhost:5000/usuarios/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(perfilAtualizado),
    })
      .then((resp) => resp.json())
      .then(() => {
        console.log('Atualizado com sucesso');
        window.location.reload();
      })
      .catch((err) => console.log(err));
  }

  function select(e) {
    setPerfilAtualizado({ ...perfilAtualizado, [e.target.name]: e.target.src });
  }

  function inputChange(e) {
    setPerfilAtualizado({ ...perfilAtualizado, [e.target.name]: e.target.value });
  }

  return (
    <>
      {open && (
        <form onSubmit={atualizarPerfil} className="fixed top-0 left-0 z-40 w-full h-full bg-black bg-opacity-30">
          <div className="flex justify-between bg-slate-300 dark:bg-preto min-w-96 w-5/6 p-9 rounded-lg fixed z-40 top-20 left-2/4 right-2/4 -translate-x-1/2">
            <div className="w-2/5 bg-claro dark:bg-cinza p-3 rounded-lg">
              <p className="p-4">Avatar:</p>
              <div className="flex flex-col gap-4">
                {avatar.map((category) => (
                  <div className={`flex overflow-auto p-2 ${styles.edit}`} key={category.id}>
                    {Object.keys(category).map((key) => {
                      if (key !== 'id') {
                        return category[key].map((item) => (
                          <img
                            className="w-20 shadow-lg rounded-full"
                            id={item.id}
                            key={item.id}
                            src={item.img}
                            alt={`Imagem ${item.id}`}
                            name="avatar"
                            onClick={select}
                          />
                        ));
                      }
                      return null;
                    })}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-2/4">
              <div className="w-4/5 m-auto mb-16 bg-claro dark:bg-cinza h-max rounded-lg p-3">
                <p>Nome:</p>
                <input
                  name="usuario"
                  autoComplete="off"
                  className="w-full outline-none border-none bg-claro dark:bg-cinza p-3"
                  type="text"
                  placeholder={infoUser ? infoUser.usuario : ''}
                  onChange={inputChange}
                />
              </div>
              <div className="w-4/5 m-auto mb-16 bg-claro dark:bg-cinza h-max rounded-lg p-3">
                <p>Usuário de Login:</p>
                <input
                  name="nome"
                  autoComplete="off"
                  className="w-full outline-none border-none bg-claro dark:bg-cinza p-3"
                  type="text"
                  placeholder={infoUser ? infoUser.nome : ''}
                  onChange={inputChange}
                />
              </div>
              <div className="w-4/5 m-auto mb-16 bg-claro dark:bg-cinza h-max rounded-lg p-3">
                <p>Senha:</p>
                <input
                  name="senha"
                  autoComplete="off"
                  className="w-full outline-none border-none bg-claro dark:bg-cinza p-3"
                  type="text"
                  placeholder={infoUser ? infoUser.senha : ''}
                  onChange={inputChange}
                />
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <FaXmark className="w-min ml-auto text-xl hover:opacity-30" onClick={onclose} />
              <Button text="Salvar" customStyle="bg-azul-escuro text-white h-max p-2 w-20 rounded-lg hover:scale-105 hover:bg-opacity-40" />
            </div>
          </div>
        </form>
      )}
    </>
  );
}

export default EditeInfo;
