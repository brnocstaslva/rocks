import React from 'react';
import UserPost from './endpoints/UserPost';
import TokenPost from './endpoints/TokenPost';

const Api = () => {
  return (
    <React.Fragment>
      <h2>Cadastrar Usuário</h2>
      <UserPost />

      <h2>Buscar Token</h2>
      <TokenPost />
    </React.Fragment>
  );
}

export default Api;
