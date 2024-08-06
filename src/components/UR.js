import styles from './UR.module.css'
import {useTranslation} from "react-i18next"
import {Link} from 'react-scroll'
import diamond from '../assets/img/diamond.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import gray from "../assets/img/gray.png";

import porco from "../assets/img/porco.png";
import poivre from "../assets/img/poivre.png";
import petit from "../assets/img/petit.png";

function UR(){
    const [t, i18n] = useTranslation("global");

    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            showSlides();
        }, 2000);

        return () => clearInterval(interval);
    }, [slideIndex]);

    const showSlides = () => {
        setSlideIndex((prevIndex) => {
            if (prevIndex === 2) {
                return 0;
            } else {
                return prevIndex + 1;
            }
        });
    };

    return (
        <section id='UR' className={styles.ur}>
            <img className={styles.icon} src={diamond} alt="other"/>
            <h1 className={styles.pageTitle} style={{cursor:"auto"}}>{t("UR.title")}</h1>
            <div className={styles.container}>
                <div className={styles.urContainer}>
                    <a href="/receita1" className={styles.logo}>
                        <img src={poivre} className={styles.urImage} alt="Receita 1"/>
                        <h3>{t("UR.receita1")}</h3>
                    </a>
                </div>
                <div className={styles.urContainer}>
                    <a href="/receita2" className={styles.logo}>
                        <img src={porco} className={styles.urImage} alt="Receita 2"/>
                        <h3>{t("UR.receita2")}</h3>
                    </a>
                </div>
                <div className={styles.urContainer}>
                    <a href="/receita3" className={styles.logo}>
                        <img src={petit} className={styles.urImage} alt="Receita 3"/>
                        <h3>{t("UR.receita3")}</h3>
                    </a>
                </div>
            </div>

            <Link to="Contato" spy={true} smooth={true} offset={0} duration={1000} className={styles.containerArrowDown}>
                <FontAwesomeIcon icon={faAngleDown} className={styles.arrowDown}/>
            </Link>
        </section>
    )
}

export default UR