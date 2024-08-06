import styles from './Receita1.module.css'
import {useTranslation} from "react-i18next"
import {Link} from 'react-scroll'
import diamond from '../assets/img/diamond.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import gray from "../assets/img/gray.png";
import poivre from "../assets/img/poivre.png";


function Receita1(){
    const [t, i18n] = useTranslation("global");

    return (
        <section id='Receita1' className={styles.ur}>
            <h1 className={styles.autorTitle} style={{cursor:"auto"}}>{t("Receita1.autor")}</h1>
            <h1 className={styles.pageTitle} style={{cursor:"auto"}}>{t("Receita1.title")}</h1>
            <iframe width="50%" height="500" src="https://www.youtube.com/embed/uEO6cj3UoJE?si=npF4PE8iYYcnMVMF"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
            </iframe>
            <div className={styles.container}>
                <div className={styles.ingredienteContainer}>
                    <h1 className={styles.pageTitle} style={{cursor:"auto"}}>{t("Receita1.ingredientes")}</h1>
                    <p>3 filés de aprox. 220g de bife ancho<br /><br />
                        1 ½ colher de sopa de pimenta do reino preta em grãos<br /><br />
                        2 colheres de sopa de manteiga<br /><br />
                        1 colher de sopa de azeite de oliva<br /><br />
                        sal marinho<br /><br />
                        ⅓ de xícara de chá de conhaque<br /><br />
                        1 xícara de chá de creme de leite fresco<br /><br />
                        1 colher de café de molho shoyu (opcional)<br /><br />
                        1 colher de café de alcaparras picadas (opcional)
                    </p>
                </div>
                <div className={styles.modoPrepContainer}>
                    <h1 className={styles.pageTitle} style={{cursor:"auto"}}>{t("Receita1.modoPrep")}</h1>
                    <p>1. Moa grosseiramente os grãos de pimenta.<br /><br />
                        2. Aqueça uma frigideira de paredes altas.<br /><br />
                        3. Tempere os filés com sal marinho e em seguida com bastante pimenta moída dos dois lados.<br /><br />
                        4. Coloque 1 colher de sopa de manteiga e o azeite na frigideira já quente.<br /><br />
                        5. Cozinhe os filés deixando dourar de um lado, sem mexer, regando com a gordura quente da própria frigideira.Vire e faça o mesmo do outro lado.<br /><br />
                        6. Retire os filés e descarte a gordura da frigideira. Coloque mais manteiga e volte os filés. Acrescente o conhaque e deixe flambar.<br /><br />
                        7. Transfira os filés para um prato e acrescente o creme de leite, as alcaparras e o shoyu na mesma frigideira.<br /><br />
                        8. Deixe ferver por 1 minuto, desligue o fogo e volte com os filés.<br /><br />
                        9. Deixe a carne descansar no molho por alguns minutos.</p>
                </div>
            </div>
        </section>
    )
}

export default Receita1