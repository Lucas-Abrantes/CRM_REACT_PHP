import styles from '../notpage/FoundNotPage.module.css';

// No topo do seu arquivo, importe a imagem
import errorImage from '../../img/Error.jpg';

function NotFoundPage() {
    return (
      <>
        <div className={styles.pageError}>
          <div className={styles.imagem}>
            <img src={errorImage} alt='erro' />
          </div>
          <div className={styles.notPage}>
            <h1>404 - Página Não Encontrada</h1>
            <p>Desculpe, mas o caminho não existe.</p>
          </div>
        </div>
        
      </>
    );
}

export default NotFoundPage;
