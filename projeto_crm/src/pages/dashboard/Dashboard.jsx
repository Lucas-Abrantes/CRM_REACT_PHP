import React, { useEffect, useState } from 'react';
import styles from '../../services/ClientService.module.css'
import { useNavigate } from 'react-router-dom'; // Importe useNavigate


function Dashboard() {
  const [index, setIndex] = useState([]);
  const navigate = useNavigate(); // useNavigate em vez de useHistory


  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/index')
      .then(response => response.json())
      .then(data => {setIndex(data); console.log(data)})
      .catch(error => console.error('Erro ao buscar index:', error));
  }, []);

  const handleEdit = (userId) => {
    navigate(`/update/${userId}`); // Modifique a rota conforme necessário
  }


  const handleDelete = (userId) => {
    fetch(`http://127.0.0.1:8000/api/destroy/${userId}`, { // Ajuste a URL conforme sua API
      method: 'DELETE',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Falha ao excluir o usuário');
      }
      // Exclui o usuário do estado para atualizar a UI
      setIndex(currentUsers => currentUsers.filter(user => user.id !== userId));
    })
    .catch(error => {
      console.error('Erro ao excluir usuário:', error);
      alert('Erro ao excluir usuário.');
    });
    
  };

  const handleCadastro = () => {
    navigate('/create'); // Use a rota exata para a tela de cadastro aqui
  };

  return (
    <div className={styles.tabela}>
     
        <table>
        <thead>
        <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Status</th>
            <th>Ação</th>
        </tr>
        </thead>
        <tbody>
        {index.map((index, indice) => ( // Usar .map() para iterar sobre users
            <tr key={indice}  className={index.status === 'inativo' ? styles.linhaInativa : ''}>
              <td>{index.id}</td>
              <td>{index.nome}</td>
              <td>{index.email}</td>
              <td>{index.telefone}</td>
              <td>{index.status}</td>
              <td>
                <div className={styles.botoes}>
                    <div className={styles.acao}>
                        <button className={styles.bnt_table} href="#" onClick={() => handleEdit(index.id)}>Editar</button>
                    </div>
                    <div className={styles.acao} onClick={(e) => {e.preventDefault(); handleDelete(index.id);}}>
                        <button className={styles.bntExcluir} href="#" onClick={(e) => e.preventDefault()}>Excluir</button>
                    </div>
                </div>
              </td>
            </tr>
          ))}
    
        </tbody>
    </table>
      <div className={styles.btnCadastro}>
        <button className={styles.botao} onClick={handleCadastro}>Cadastrar</button>
      </div>
    </div>

  );
}

export default Dashboard;