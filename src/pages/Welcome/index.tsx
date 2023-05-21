import { Link } from 'react-router-dom';
import styles from "./index.module.css";

function Welcome() {

  return (
    <div className={styles.welcome}>
        <div className={styles.logoblock}>
          <a href="https://demetra.ru" className={styles.logo}></a>
        </div>
        <div className={`${styles.blockwelcome}`}>
          <Link to="/knowledge-base" className="btn-primary px-4">Войти в личный кабинет</Link>
        </div>
    </div>
  );
}

export default Welcome;