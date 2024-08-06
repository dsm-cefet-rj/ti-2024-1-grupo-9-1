import styles from './Contato.module.css'
import {useTranslation} from "react-i18next"
import {Link} from 'react-scroll'
import contact from '../assets/img/contact.png'
import phone from '../assets/img/phone.png'
import wpp from '../assets/img/whatsapp.png'
import email from '../assets/img/email.png'

function Contato(){
    const [t, i18n] = useTranslation("global");

    return (
        <section id='Contato' className={styles.contato}>
            <img className={styles.icon} src={contact} alt="contact"/>
            <h1 className={styles.pageTitle} style={{cursor: "auto"}}>{t("Contato.title")}</h1>
            <h3 className={styles.pageDescription} style={{cursor: "auto"}}>{t("Contato.desc")}</h3>
            <div className={styles.container}>
                <a href="tel:(21) 96948-3556" target="_blank" className={styles.card}>
                    <img className={styles.slideicon} src={phone} alt="logoImg"/>
                    <h1>{t("Contato.telefone")}</h1>
                    <small>{t("Contato.solis.tel")}</small>
                </a>
                <a href="https://api.whatsapp.com/send?phone=5521969483556" target="_blank" className={styles.card}>
                    <img className={styles.slideicon} src={wpp} alt="logoImg"/>
                    <h1>{t("Contato.wpp")}</h1>
                    <small>{t("Contato.solis.tel")}</small>
                </a>
                <a href="mailto:contato@solisceitas.com.br" target="_blank" className={styles.card}>
                    <img className={styles.slideicon} src={email} alt="logoImg"/>
                    <h1>{t("Contato.email")}</h1>
                    <small>{t("Contato.solis.email")}</small>
                </a>
            </div>
        </section>
    )
}

export default Contato