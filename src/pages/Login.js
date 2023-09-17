import React, { useState } from 'react';
import { Banner } from '../components/Banner';
import { FormContainer } from '../styles/GlobalStyles';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const storedUser = localStorage.getItem('user');
    
    if(storedUser && JSON.parse(storedUser).username === username && JSON.parse(storedUser).password === password) {
      alert('Login realitzat');
      // Aquí aún me fatlaría redirigir al usuario a la página principal 
    } else {
      alert('Credencials no vàlides');
    }
  };

  return (
    <div>
        <Banner/>

        <FormContainer>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>

      </FormContainer>
    </div>
  );
};

export default Login;
