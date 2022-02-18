import React from 'react';

const UserPost = () => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((json) => {
      console.log(json);
      return json;
    });

    console.log({
      username,
      email,
      password,
    });
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter your username"
          required

          value={username}
          onChange={({target}) => setUsername(target.value)}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your e-mail"
          required

          value={email}
          onChange={({target}) => setEmail(target.value)}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          required

          value={password}
          onChange={({target}) => setPassword(target.value)}
        />

        <button type="submit">Cadastrar</button>
      </form>
    </React.Fragment>
  )
}

export default UserPost;
