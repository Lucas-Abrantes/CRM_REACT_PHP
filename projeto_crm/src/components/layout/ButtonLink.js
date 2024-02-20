import { Link } from "react-router-dom";
import styles from './ButtonLink.module.css';


function ButtonLink({to, text}){
    return(
        <Link className={styles.btn} to={to}>
        {text}
        </Link>
    );
}

export default ButtonLink;