import React from 'react';

const TokenPost = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [token, setToken] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((json) => {
      console.log(json);
      setToken(json.token);
      return json;
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter your username"
          required

          value={username}
          onChange={({target}) => {setUsername(target.value)}}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          required

          value={password}
          onChange={({target}) => {setPassword(target.value)}}
        />

        <button type="submit">Buscar</button>

        <p>{token}</p>
      </form>
    </React.Fragment>
  );
};

export default TokenPost;
