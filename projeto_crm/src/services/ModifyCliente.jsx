import React, { useState , useEffect} from 'react';
import axios from 'axios';
import styles from '../pages/dashboard/Dashboard.module.css';
import { useNavigate, useParams } from 'react-router-dom';


function ModifyClient() {
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [status, setStatus] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();
    const { id } = useParams(); 
  
    useEffect(() => {
        if (id) { 
            fetch(`http://127.0.0.1:8000/api/show/${id}`)
                .then(response => response.json())
                .then(data => {
                    setNome(data.nome || ''); 
                    setEmail(data.email || '');
                    setTelefone(data.telefone || '');
                    setEmpresa(data.empresa || '');
                    setStatus(data.status || '');
                    setSenha(''); 
                })
                .catch(error => console.error('Erro ao buscar cliente:', error));
        }
    }, [id]); 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dadosFormulario = Object.fromEntries(formData.entries());
        try{
            const response = await axios.post(`http://127.0.0.1:8000/api/update/${id}`, {
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
    }
   
  return (
    <div className={styles.cadastrar}>
    
        <form onSubmit={handleSubmit}>
            <div className={styles.text_label}>
                <label htmlFor="nome">Nome</label>
                <input type='text' id="nome" name='nome' value={nome} placeholder='Digite o nome' required onChange={e => setNome(e.target.value)}></input>
            </div>

            <div className={styles.text_label}>
                <label htmlFor="email">E-mail</label>
                <input type='email' id="email" name='email' placeholder='Digite o e-mail' value={email} required onChange={e => setEmail(e.target.value)}></input>
             </div>

            <div className={styles.text_label}>
                <label htmlFor="telefone">Telefone</label>
                <input type='text' id="telefone" name='telefone' placeholder='Digite o telefone' value={telefone} required  onChange={e => setTelefone(e.target.value)}></input>
            </div>

            <div className={styles.text_label}>
                <label htmlFor="empresa">Empresa</label>
                <input type='text' id="empresa" name='empresa' placeholder='Nome da empresa' required  value={empresa} onChange={e => setEmpresa(e.target.value)}></input>
            </div>

            <div className={styles.text_label}>
                <label htmlFor="status">Status</label>
                <input type='text' id="status" name='status' placeholder='Status do cliente' required value={status} onChange={e => setStatus(e.target.value)}></input>
            </div>
            <div className={styles.text_label}>
                <label htmlFor="senha">Senha</label>
                <input type='password' id="senha" name='senha' placeholder='Deixar campo vazio para manter a senha' value={senha}  onChange={e => setSenha(e.target.value)}></input>
            </div>

            <div className={styles.btnCadastro}>
                <button className={styles.botao} type='submit' value="Cadastrar" >Alterar usuário</button>
            </div>
        </form>
    </div>
  );
}

export default ModifyClient;