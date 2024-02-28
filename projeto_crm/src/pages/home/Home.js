import styles from './Home.module.css';
import Logo from '../../img/Logo.svg';
import Login from '../../Login';


function Home() {
    return (
        <main>
            <section className={styles.container}>
                <header>
                    <div className={styles.logo}>
                        <img src={Logo} alt='logo'/>
                    </div>
                </header>

                <div className={styles.conteudo}>
                    <p>Bem vindo(a) ao projeto CRM!</p>
                    <br/>
                    <p>Somos a empresa N° 1 para sistemas CRM.</p>
                </div>

                
            </section>

            <section className={styles.container2}>
                <div className={styles.card_login}>
                    <h1>Login</h1>
                    <Login></Login>
                </div>
            </section>
        </main>
    );
}

export default Home;
