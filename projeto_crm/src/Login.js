import React, { useState } from 'react';
import axios from 'axios';
import styles from './pages/home/Home.module.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
    e.preventDefault();
    if (password !== ConfirmPassword) {
        console.error("As senhas não coincidem!");
        return;
    }
      try {
        const response = await axios.post('http://suaapi.com/api/home', {
          email,
          password, 
        });
        console.log(response.data);
        // Aqui você pode armazenar o token recebido no localStorage/sessionStorage
        // e redirecionar o usuário para a página inicial ou dashboard, por exemplo.
        navigate('/home');
      } catch (error) {
        console.error("Erro de login:", error.response);
        // Tratamento de erro
      }
    };

    return (
        <form  onSubmit={handleLogin}>
            <div className={styles.text_label}>
                <label for="email">E-mail</label>
                <input type='email' id="email" name='email' placeholder='Digite o nome' required onChange={e => setEmail(e.target.value)}></input>
            </div>

            <div className={styles.text_label}>
                <label for="senha">Senha</label>
                <input type='password' id="senha" name='senha' placeholder='Digite a senha' required  onChange={e => setPassword(e.target.value)}></input>
            </div>

            <div className={styles.text_label}>
                <label for="confrimar_senha">Confirmar senha</label>
                <input type='password' name='confirmar_senha' placeholder='Digite a senha novamente' required  onChange={e => setConfirmPassword(e.target.value)}></input>
            </div>
            <input className={styles.btn} type='submit' value="Entrar" ></input>
        </form>
    );
}

export default Login;