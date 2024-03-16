import React, { useEffect, useState } from 'react';
import styles from '../services/ClientService.module.css';

function App() {
  const [index, setIndex] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/index')
      .then(response => response.json())
      .then(data => {setIndex(data); console.log(data)})
      .catch(error => console.error('Erro ao buscar index:', error));
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
        {index.map((index, indice) => ( // Usar .map() para iterar sobre users
            <tr key={indice}  className={index.status === 'inativo' ? styles.linhaInativa : ''}> {/* Adicionado key para otimização do React */}
              <td>{index.nome}</td>
              <td>{index.email}</td>
              <td>{index.telefone}</td>
              <td>{index.status}</td>
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
          ))}
    
        </tbody>
    </table>
    </div>

  );
}

export default App;
