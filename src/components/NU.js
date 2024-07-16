import styles from './NU.module.css'
import {useTranslation} from "react-i18next"
import {Link} from 'react-scroll'
import other from '../assets/img/other.png'
import gray from "../assets/img/gray.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

function NU(){
    const [t, i18n] = useTranslation("global");

    return (
        <section id='NU' className={styles.nu}>
            <img className={styles.icon} src={other} alt="other"/>
            <h1 className={styles.pageTitle} style={{cursor:"auto"}}>{t("NU.title")}</h1>
            <div className={styles.container}>
                <div className={styles.nuContainer}>
                    <img src={gray} className={styles.nuImage} alt="Opção 1"/>
                    <button className={styles.nuButton}>Comprar</button>
                </div>
                <div className={styles.nuContainer}>
                    <img src={gray} className={styles.nuImage} alt="Opção 2"/>
                    <button className={styles.nuButton}>Comprar</button>
                </div>
                <div className={styles.nuContainer}>
                    <img src={gray} className={styles.nuImage} alt="Opção 3"/>
                    <button className={styles.nuButton}>Comprar</button>
                </div>
            </div>
        </section>
    )
}

export default NU