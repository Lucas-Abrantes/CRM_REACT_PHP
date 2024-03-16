import React, { useEffect, useState } from 'react';
import styles from '../services/ClientService.module.css';
import { useParams } from 'react-router-dom';

function App() {
  const [cliente, setCliente] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/show/${id}`)
      .then(response => response.json())
      .then(data => { setCliente(data); })
      .catch(error => console.error('Erro ao buscar cliente:', error));
  }, []);

  return (
    <div className={styles.tabela}>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Status</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
        
            <tr className={cliente.status === 'inativo' ? styles.linhaInativa : ''}> 
              <td>{cliente.nome}</td>
              <td>{cliente.email}</td>
              <td>{cliente.telefone}</td>
              <td>{cliente.status}</td>
              <td>
                <div className={styles.botoes}>
                  <span className={styles.acao}>
                    <a href="#">Editar</a>
                  </span>
                  <span className={styles.acao}>
                    <a href="#">Excluir</a>
                  </span>
                </div>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;