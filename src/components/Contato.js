import styles from './Contato.module.css'
import {useTranslation} from "react-i18next"
import {Link} from 'react-scroll'
import other from '../assets/img/other.png'
import plan1 from "../assets/img/1.png"
import plan2 from "../assets/img/2.png"
import plan3 from "../assets/img/3.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

function Contato(){
    const [t, i18n] = useTranslation("global");

    return (
        <section id='Contato' className={styles.contato}>
            <img className={styles.icon} src={other} alt="other"/>
            <h1 className={styles.pageTitle} style={{cursor:"auto"}}>{t("Contato.title")}</h1>
            <h3 className={styles.pageDescription} style={{cursor:"auto"}}>{t("Contato.desc")}</h3>
            <div className={styles.container}>
            </div>
        </section>
    )
}

export default Contato