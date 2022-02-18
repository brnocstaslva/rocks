import React from 'react';

const PhotoPost = () => {
  const [nome, setNome] = React.useState('');
  const [idade, setIdade] = React.useState('');
  const [peso, setPeso] = React.useState('');
  const [imagem, setImagem] = React.useState('');

  const [token, setToken] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('idade', idade);
    formData.append('peso', peso);
    formData.append('imagem', imagem);

    fetch('https://dogsapi.origamid.dev/json/api/photo', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
    })
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(json => {
      console.log(json);
      return json;
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="token"
          placeholder="Enter your token"
          required

          value={token}
          onChange={({target}) => {setToken(target.value)}}
        />

        <input
          type="text"
          name="nome"
          placeholder="Enter your name"
          required

          value={nome}
          onChange={({target}) => {setNome(target.value)}}
        />

        <input
          type="text"
          name="idade"
          placeholder="Enter your age"
          required

          value={idade}
          onChange={({target}) => {setIdade(target.value)}}
        />

        <input
          type="text"
          name="peso"
          placeholder="Enter your weight"
          required

          value={peso}
          onChange={({target}) => {setPeso(target.value)}}
        />

        <input
          type="file"
          name="imagem"
          required

          onChange={({target}) => {setImagem(target.files[0])}}
        />

        <button type="submit">Postar</button>
      </form>
    </React.Fragment>
  );
}
export default PhotoPost;
