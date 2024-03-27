import React, { useState } from 'react';
import axios from 'axios';
import styles from '../pages/dashboard/Dashboard.module.css';

function CreateClient() {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [id, setId] = useState('');
  
    const toggleForm = () =>{
        setExibirFormulario(!exibirFormulario);
    }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dadosFormulario = Object.fromEntries(formData.entries());
    try{
        const response = await axios.delete(`http://127.0.0.1:8000/api/destroy/${id}`, {

        });
        console.log(response.data);

    }catch(error){
        console.log("Erro ao cadastrar usuario: ", error.response);
    }
    // Aqui você pode chamar a função para enviar os dados para a API
    console.log(dadosFormulario);
    // Exemplo: await cadastrarCliente(dadosFormulario);
  };

  return (
    <div className={styles.cadastrar}>
    
    <div className={styles.btnCadastro}>
        <button onClick={toggleForm} className={styles.botao}>Excluir usuario</button>

    </div>
   
      
      {exibirFormulario && (
        <form onSubmit={handleSubmit}>

            <div className={styles.text_label}>
                <label for="id">Id</label>
                <input type='number' id="id" name='id' placeholder='Digite o id' required onChange={e => setId(e.target.value)}></input>
            </div>


            <div className={styles.btnCadastro}>
                <button className={styles.botao} type='submit' value="Cadastrar" >Enviar</button>
            </div>
        </form>
      )}
    </div>
  );
}

export default CreateClient;
