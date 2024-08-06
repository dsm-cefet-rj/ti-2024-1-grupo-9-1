import styles from './NU.module.css'
import {useTranslation} from "react-i18next"
import {Link} from 'react-scroll'
import diamond from "../assets/img/diamond.png";
import plan1 from "../assets/img/1.png"
import plan2 from "../assets/img/2.png"
import plan3 from "../assets/img/3.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

function NU(){
    const [t, i18n] = useTranslation("global");

    return (
        <section id='NU' className={styles.nu}>
            <img className={styles.icon} src={diamond} alt="other"/>
            <h1 className={styles.pageTitle} style={{cursor:"auto"}}>{t("NU.title")}</h1>
            <h3 className={styles.pageDescription} style={{cursor:"auto"}}>{t("NU.desc")}</h3>
            <div className={styles.container}>
                <div className={styles.nuContainer}>
                    <p className={styles.planos} style={{cursor:"auto"}}>{t("NU.mensal")}</p>
                    <img src={plan1} className={styles.nuImage} alt="Opção 3"/>
                    <button className={styles.nuButton}>Comprar</button>
                </div>
                <div className={styles.nuContainer}>
                    <p className={styles.planos} style={{cursor:"auto"}}>{t("NU.trimestral")}</p>
                    <img src={plan2} className={styles.nuImage} alt="Opção 3"/>
                    <button className={styles.nuButton}>Comprar</button>
                </div>
                <div className={styles.nuContainer}>
                    <p className={styles.planos} style={{cursor:"auto"}}>{t("NU.anual")}</p>
                    <img src={plan3} className={styles.nuImage} alt="Opção 3"/>
                    <button className={styles.nuButton}>Comprar</button>
                </div>
            </div>
        </section>
    )
}

export default NU