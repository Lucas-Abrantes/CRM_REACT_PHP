import React from 'react';
import Container from './Container';
import styles from './NavBar.module.css';
import { Link, useNavigate } from 'react-router-dom'; 


function NavBar(){
    const navigate = useNavigate(); 

    const handleLogout = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/logout', {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (!response.ok) {
          throw new Error('Falha no logout');
        }
        navigate('/login'); 
      } catch (error) {
        console.error('Erro ao fazer logout:', error);
      }
    };

    return (
        <nav className={styles.navbar}>
            <Container>
                <span className={styles.logout}>
                    <a href='#'  onClick={handleLogout}>Sair</a>
                </span>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Home</Link></li>
                    <li className={styles.item}><Link to="/contato">Contato</Link></li>
                    <li className={styles.item}><Link to="/sobre">Sobre</Link></li>
                </ul>
            </Container>
        </nav>  
    );
}

export default NavBar;