import styles from './Receita3.module.css'
import {useTranslation} from "react-i18next"
import {Link} from 'react-scroll'
import diamond from '../assets/img/diamond.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import gray from "../assets/img/gray.png";
import poivre from "../assets/img/poivre.png";


function Receita3(){
    const [t, i18n] = useTranslation("global");

    return (
        <section id='Receita3' className={styles.ur}>
            <h1 className={styles.autorTitle} style={{cursor:"auto"}}>{t("Receita3.autor")}</h1>
            <h1 className={styles.pageTitle} style={{cursor:"auto"}}>{t("Receita3.title")}</h1>
            <iframe width="50%" height="500" src="https://www.youtube.com/embed/WwETLi0Lhv4?si=sIZilJeWqZIXa2v2"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
            </iframe>
            <div className={styles.container}>
                <div className={styles.ingredienteContainer}>
                    <h1 className={styles.pageTitle} style={{cursor:"auto"}}>{t("Receita3.ingredientes")}</h1>
                    <p>- 5 ovos inteiros<br /><br />
                        - 5 gemas<br /><br />
                        - 250 g de chocolate<br /><br />
                        - 250 g de manteiga sem sal<br /><br />
                        - 100 g de farinha<br /><br />
                        - 170 g de açúcar<br /><br />
                    </p>
                </div>
                <div className={styles.modoPrepContainer}>
                    <h1 className={styles.pageTitle} style={{cursor:"auto"}}>{t("Receita3.modoPrep")}</h1>
                    <p>1. Em um recipiente refratário, derreta em banho-maria o Chocolate e a manteiga.<br /><br />
                        2. Em outro recipiente, bata os ovos, as gemas e o açúcar até formar uma massa cremosa. Adicione a mistura de Chocolate derretido e mexa bem.<br /><br />
                        3. Acrescente a farinha de trigo aos poucos e mexa delicadamente, até incorporar tudo.<br /><br />
                        4. Unte com manteiga e polvilhe com farinha de trigo 8 forminhas pequenas (10 cm de diâmetro) e distribua a massa entre elas. Leve ao forno médio-alto (200°C), preaquecido, por cerca de 10 minutos.<br /><br />
                        5. Desenforme ainda quente sobre pratinhos individuais e sirva a seguir</p>
                </div>
            </div>
        </section>
    )
}

export default Receita3