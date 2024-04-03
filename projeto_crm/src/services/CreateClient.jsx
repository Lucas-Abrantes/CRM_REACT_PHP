import React, { useState } from 'react';
import axios from 'axios';
import styles from '../pages/dashboard/Dashboard.module.css';
import { useNavigate} from 'react-router-dom';


function CreateClient() {
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [status, setStatus] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dadosFormulario = Object.fromEntries(formData.entries());
    try{
        const response = await axios.post('http://127.0.0.1:8000/api/store', {
           nome,
           email,
           telefone,
           empresa,
           status,
           senha 
        });
        console.log(response.data);
        navigate('/'); 


    }catch(error){
        console.log("Erro ao cadastrar usuario: ", error.response);
    }
    console.log(dadosFormulario);
  };

  return (
   
    <div className={styles.cadastrar}>
        <form onSubmit={handleSubmit}>
            <div className={styles.text_label}>
                <label for="nome">Name</label>
                <input type='text' id="nome" name='nome' placeholder='Digite o nome' required onChange={e => setNome(e.target.value)}></input>
            </div>

            <div className={styles.text_label}>
                <label for="email">E-mail</label>
                <input type='email' id="email" name='email' placeholder='Digite o e-mail' required onChange={e => setEmail(e.target.value)}></input>
             </div>

            <div className={styles.text_label}>
                <label for="telefone">Telefone</label>
                <input type='text' id="telefone" name='telefone' placeholder='Digite o telefone' required  onChange={e => setTelefone(e.target.value)}></input>
            </div>

            <div className={styles.text_label}>
                <label for="empresa">Empresa</label>
                <input type='text' id="empresa" name='empresa' placeholder='Nome da empresa' required  onChange={e => setEmpresa(e.target.value)}></input>
            </div>

            <div className={styles.text_label}>
                <label for="status">Status</label>
                <input type='text' id="status" name='status' placeholder='Status do cliente' required  onChange={e => setStatus(e.target.value)}></input>
            </div>

            <div className={styles.text_label}>
                <label for="senha">Senha</label>
                <input type='password' id="senha" name='senha' placeholder='Senha' required  onChange={e => setSenha(e.target.value)}></input>
            </div>

            <div className={styles.btnCadastro}>
                <button className={styles.botao} type='submit' value="Cadastrar" >Enviar</button>
            </div>
        </form>
    </div>
  );
}

export default CreateClient;
