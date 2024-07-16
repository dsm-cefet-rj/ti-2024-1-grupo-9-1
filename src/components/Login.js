import styles from './Perfil.module.css'
import {useTranslation} from "react-i18next"
import {Link} from 'react-scroll'
import other from '../assets/img/other.png'
import gray from "../assets/img/gray.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {Link as LinkRouter} from "react-router-dom";

function Login(){
    const [t, i18n] = useTranslation("global");

    return (
        <section id='Login' className={styles.login}>
            <h1 className={styles.pageTitle} style={{cursor:"auto"}}>{t("Login.title")}</h1>
            <div className={styles.container}>
                <form action="">
                    <h3 className={styles.loginDesc}>{t("Login.desc")}</h3>
                    <div className={styles.formHolder}>
                        <input type="text" className={styles.formControl} placeholder="Username"/>
                    </div>
                    <div className={styles.formControl}>
                        <input type="password" className="form-control" placeholder="Password"/>
                    </div>
                    <button className={styles.formButton}>
                        <span>Login</span>
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Login