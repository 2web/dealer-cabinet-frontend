import { Link } from "react-router-dom";
import styles from "./index.module.css";

function Welcome() {
  return (
    <div className={styles.welcome}>
      <div className={styles.logoblock}>
        <a href="https://demetra.ru" className={styles.logo}></a>
      </div>
      <div className={`${styles.blockwelcome}`}>
        <Link to="/signin" className="btn-primary px-4">
          Войти в личный кабинет
        </Link>
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-slate-800 font-bold leading-8 sm:leading-10 md:leading-[3.5rem] lg:leading-[3.5rem] mt-8">
          664040, Россия, Иркутская область
          <br />
          г.Иркутск, ул. Тухачевского, 2
          <br />
          <a className="hover:underline" href="email:office@demetra.ru">office@demetra.ru</a>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
