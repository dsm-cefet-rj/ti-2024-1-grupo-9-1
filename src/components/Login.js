import React, { useState } from 'react';
import axios from 'axios';
import styles from './Login.module.css'; // Importe o arquivo de estilos
import { Link } from 'react-scroll';
import { Link as LinkRouter, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/auth/login', { email, password });
      localStorage.setItem('token', response.data.token); // Salva o token no localStorage
      console.log('Login successful:', response.data);
    } catch (error) {
      if (error.response) {
        console.error('Login error response data:', error.response.data);
        console.error('Login error response status:', error.response.status);
      } else if (error.request) {
        console.error('Login error request:', error.request);
      } else {
        console.error('Login error message:', error.message);
      }
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>Login</button>
      </form>
      <a className={styles.signupPrompt}>
        <LinkRouter to="/cadastro" className={styles.signupLink}>Ainda não tem cadastro? Cadastre-se</LinkRouter>
      </a>
    </div>
  );
};

export default Login;
