
import React, { useState, useEffect } from 'react';

function Test(){
  const [avatar, setAvatar] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/icone')
      .then((response) => response.json())
      .then((avatar) => setAvatar(avatar))
      .catch((error) => console.error('Erro ao buscar dados:', error));
  }, []);

  return (
    <div className="flex gap-4" >
      {avatar.map((category) => (
        <div key={category.id}>
          {Object.keys(category).map((key) => {
            if (key !== 'id') {
              return category[key].map((item) => (
                <img className="w-20 shadow-lg rounded-full"  key={item.id} src={item.img} alt={`Imagem ${item.id}`} />
              ));
            }
            return null;
          })}
        </div>
      ))}
    </div>
  );
};

export default Test;
