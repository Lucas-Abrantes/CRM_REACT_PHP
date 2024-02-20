import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
import styles from './Footer.module.css';


function Footer(){
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaLinkedin/></li>
            </ul>
            <span>&copy</span>
        </footer>
    );
}
export default Footer;

