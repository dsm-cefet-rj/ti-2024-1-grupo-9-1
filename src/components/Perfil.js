import styles from './Perfil.module.css'
import {useTranslation} from "react-i18next"
import {Link} from 'react-scroll'
import other from '../assets/img/other.png'
import gray from "../assets/img/gray.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {Link as LinkRouter} from "react-router-dom";

function Perfil(){
    const [t, i18n] = useTranslation("global");

    return (
        <section id='Perfil' className={styles.perfil}>
            <img className={styles.icon} src={other} alt="other"/>
            <h1 className={styles.pageTitle} style={{cursor:"auto"}}>{t("Perfil.title")}</h1>
            <div className={styles.container}>
            </div>
        </section>
    )
}

export default Perfil