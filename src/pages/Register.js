import React, { useState } from 'react';
import { Banner } from '../components/Banner';
import { FormContainer } from '../styles/GlobalStyles';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      username,
      password
    };

    localStorage.setItem('user', JSON.stringify(user));
    alert('Registre realitzat');
    // Aquí me falta redirigir al usuario a la página de login
  };

  return (
    <div>
        <Banner/>
        <FormContainer>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Register</button>
      </form>

      </FormContainer>
    </div>
  );
};

export default Register;
