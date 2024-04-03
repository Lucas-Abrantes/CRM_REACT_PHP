 import React, { useState } from 'react';
 import axios from 'axios';
 import styles from './pages/login/Login.module.css';
 import { useNavigate } from 'react-router-dom';

function Login() {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const navigate = useNavigate();

     const handleLogin = async (e) => {
     e.preventDefault();
       try {
         const response = await axios.post('http://127.0.0.1:8000/api/login', {
           email,
           password, 
        });
         console.log(response.data);
        navigate('/');
       } catch (error) {
         console.error("Erro de login:", error.response);
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
             <button className={styles.btn} type='submit' value="enviar" >Enviar</button>
         </form>
     );
 }

 export default Login;
