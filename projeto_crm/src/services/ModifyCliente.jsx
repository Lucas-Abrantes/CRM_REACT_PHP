import React, { useState } from 'react';
import axios from 'axios';
import styles from '../pages/dashboard/Dashboard.module.css';

function ModifyClient({clientId}) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [id, setId] = useState(clientId); // Supondo o ID como parte do estado
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [status, setStatus] = useState('');
    const toggleForm = () =>{
        setExibirFormulario(!exibirFormulario);
    }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dadosFormulario = Object.fromEntries(formData.entries());
    if(id !== 0){
        try{
            const response = await axios.post(`http://127.0.0.1:8000/api/update/${id}`, {
                id,
               nome,
               email,
               telefone,
               empresa,
               status,
            });
            console.log(response.data);
    
        }catch(error){
            console.log("Erro ao cadastrar usuario: ", error.response);
        }
        // Aqui você pode chamar a função para enviar os dados para a API
        console.log(dadosFormulario);
        // Exemplo: await cadastrarCliente(dadosFormulario);
    }
   
  };

  return (
    <div className={styles.cadastrar}>
    
    <div className={styles.btnCadastro}>
        <button onClick={toggleForm} className={styles.botao}>Alterar usuario</button>

    </div>
   
      
      {exibirFormulario && (
        <form onSubmit={handleSubmit}>
            <div className={styles.text_label}>
                <label for="id">Id</label>
                <input type='number' id="id" name='id' placeholder='Digite o id' required onChange={e => setId(e.target.value)}></input>
            </div>

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

            <div className={styles.btnCadastro}>
                <button className={styles.botao} type='submit' value="Cadastrar" >Cadastar</button>
            </div>
        </form>
      )}
    </div>
  );
}

export default ModifyClient;
