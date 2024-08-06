import styles from './Footer.module.css'
import {useTranslation} from "react-i18next"
import {Link} from 'react-scroll'
import logo from "../assets/img/solislogo.png"
import react from "react";

function Footer(){
    const [t, i18n] = useTranslation("global");

    return (
        <section id='footer' className={styles.footer}>
            <div className={styles.line}/>
            <div className={styles.footerContainer}>
                <div className={styles.logoContainer}>
                    <img src={logo} alt='logo'/>
                </div>
                <div className={styles.menuContainer}>
                    <div>
                        <ul className={styles.footerMenu}>
                            <li>
                                <Link to ="home" spy={true} smooth={true} offset={0} duration={1000}>{t("navBar.home")}</Link>
                            </li>
                            <li>
                                <Link to ="UR" spy={true} smooth={true} offset={0} duration={1000}>{t("navBar.UR")}</Link>
                            </li>
                            <li>
                                <Link to ="Contato" spy={true} smooth={true} offset={0} duration={1000}>{t("navBar.Contato")}</Link>
                            </li>
                            <li>
                                <Link to ="NU" spy={true} smooth={true} offset={0} duration={1000}>{t("navBar.perfil")}</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className={styles.copyright}>
                            <a href="">SolisCeitas</a>,{t("footer.copyright")} &copy; </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer