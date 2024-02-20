import styles from './Home.module.css';
import Logo from '../../img/Logo.svg';
import Footer from '../../components/layout/Footer';


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
                    <form>
                        <div className={styles.text_label}>
                            <label for="email">E-mail</label>
                            <input type='email' name='nome' placeholder='Digite o nome' required></input>
                        </div>

                        <div className={styles.text_label}>
                            <label for="senha">Senha</label>
                            <input type='password' name='senha' placeholder='Digite a senha' required></input>
                        </div>

                        <div className={styles.text_label}>
                            <label for="confrimar_senha">Confirmar senha</label>
                            <input type='password' name='confirmar_senha' placeholder='Digite a senha novamente' required></input>
                        </div>
                        <input className={styles.btn} type='submit' value="Entrar" ></input>
                    </form>
                </div>
            </section>
        </main>
        
    );
}

export default Home;
