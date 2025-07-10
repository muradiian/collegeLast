import React, { useState } from 'react';
import axios from 'axios';

const AuthPage = () => {
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
    } catch (err: any) {
      console.error('❌ Ошибка регистрации:', err.response.data.error.message);
    }
  };

  const login = async () => {
    try {
      const res = await axios.post('http://localhost:1337/api/auth/local', {
        identifier: email,
        password: pass,
      });
      localStorage.setItem('token', res.data.jwt);
      alert('✅ Вход выполнен');
    } catch (err: any) {
      console.error('❌ Ошибка входа:', err.response.data.error.message);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-2">Авторизация</h2>
      <input className="border p-2 mb-2 block" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input className="border p-2 mb-2 block" placeholder="Пароль" type="password" onChange={(e) => setPass(e.target.value)} />
      <button onClick={register} className="bg-blue-500 text-white px-4 py-2 mr-2">Регистрация</button>
      <button onClick={login} className="bg-green-500 text-white px-4 py-2">Вход</button>
    </div>
  );
};

export default AuthPage;
