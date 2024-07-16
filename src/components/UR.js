import styles from './UR.module.css'
import {useTranslation} from "react-i18next"
import {Link} from 'react-scroll'
import other from '../assets/img/other.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import gray from "../assets/img/gray.png"

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
            <img className={styles.icon} src={other} alt="other"/>
            <h1 className={styles.pageTitle} style={{cursor:"auto"}}>{t("UR.title")}</h1>
            <div className={styles.container}>
                <div className={styles.urContainer}>
                    <img src={gray} className={styles.urImage} alt="Receita 1"/>
                    <h3>Receita 1</h3>
                </div>
                <div className={styles.urContainer}>
                    <img src={gray} className={styles.urImage} alt="Receita 2"/>
                    <h3>Receita 2</h3>
                </div>
                <div className={styles.urContainer}>
                    <img src={gray} className={styles.urImage} alt="Receita 3"/>
                    <h3>Receita 3</h3>
                </div>
                <div className={styles.urContainer}>
                    <img src={gray} className={styles.urImage} alt="Receita 4"/>
                    <h3>Receita 4</h3>
                </div>
                <div className={styles.urContainer}>
                    <img src={gray} className={styles.urImage} alt="Receita 5"/>
                    <h3>Receita 5</h3>
                </div>
            </div>

            <Link to="NU" spy={true} smooth={true} offset={0} duration={1000} className={styles.containerArrowDown}>
                <FontAwesomeIcon icon={faAngleDown} className={styles.arrowDown}/>
            </Link>
        </section>
    )
}

export default UR