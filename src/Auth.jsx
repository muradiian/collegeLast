import React, { useState } from 'react';
import axios from 'axios';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const register = async () => {
    try {
      const res = await axios.post('http://localhost:1337/api/auth/local/register', {
        username: email,
        email,
        password: pass,
      });
      console.log('✅ Зарегистрирован:', res.data);
    } catch (err) {
      console.error('❌ Ошибка:', err.response.data.error.message);
    }
  };

  const login = async () => {
    try {
      const res = await axios.post('http://localhost:1337/api/auth/local', {
        identifier: email,
        password: pass,
      });
      localStorage.setItem('token', res.data.jwt);
      console.log('✅ Вошёл! Токен сохранён');
    } catch (err) {
      console.error('❌ Ошибка входа:', err.response.data.error.message);
    }
  };

  return (
    <div>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Пароль" type="password" onChange={(e) => setPass(e.target.value)} />
      <button onClick={register}>Регистрация</button>
      <button onClick={login}>Вход</button>
    </div>
  );
}