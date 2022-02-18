import React from 'react';

import UserPost from './endpoints/UserPost';
import TokenPost from './endpoints/TokenPost';
import PhotoPost from './endpoints/PhotoPost';

const Api = () => {
  return (
    <React.Fragment>
      <h2>Cadastrar Usuário</h2>
      <UserPost />

      <h2>Buscar Token</h2>
      <TokenPost />

    <h2>Postar Foto</h2>
    <PhotoPost />
    </React.Fragment>
  );
}

export default Api;
