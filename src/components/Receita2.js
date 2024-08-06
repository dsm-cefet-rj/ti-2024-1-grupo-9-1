import styles from './Receita2.module.css'
import {useTranslation} from "react-i18next"
import {Link} from 'react-scroll'
import diamond from '../assets/img/diamond.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import gray from "../assets/img/gray.png";
import poivre from "../assets/img/poivre.png";


function Receita2(){
    const [t, i18n] = useTranslation("global");

    return (
        <section id='Receita2' className={styles.ur}>
            <h1 className={styles.autorTitle} style={{cursor:"auto"}}>{t("Receita2.autor")}</h1>
            <h1 className={styles.pageTitle} style={{cursor:"auto"}}>{t("Receita2.title")}</h1>
            <iframe width="50%" height="500" src="https://www.youtube.com/embed/Yaki4HUsiNM?si=DA1gOiVitoyWa23d"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
            </iframe>
            <div className={styles.container}>
                <div className={styles.ingredienteContainer}>
                    <h1 className={styles.pageTitle} style={{cursor:"auto"}}>{t("Receita2.ingredientes")}</h1>
                    <p>- 1 kg de filé de porco, com a pele marcada<br /><br />
                        - 175 g de queijo Manchego, finamente fatiado<br /><br />
                        - 150 g de membrillo<br /><br />
                        - 2 ramos de sálvia<br /><br />
                        - Azeite de oliva, para regar<br /><br />
                        - 1 cabeça de alho, cortada ao meio horizontalmente<br /><br />
                        - 1 ramo de tomilho<br /><br />
                        - 200 ml de xerez seco<br /><br />
                        - Sal marinho e pimenta-do-reino moída na hora
                    </p>
                </div>
                <div className={styles.modoPrepContainer}>
                    <h1 className={styles.pageTitle} style={{cursor:"auto"}}>{t("Receita2.modoPrep")}</h1>
                    <p>1. Preaqueça o forno a 220°C/Gás 7. <br /><br />
                        2. Coloque o filé, com a pele voltada para baixo, em uma tábua de corte e faça um corte de três quartos da espessura da carne ao longo do comprimento, de cima para baixo. Abra a carne para formar um retângulo longo e tempere com sal e pimenta.<br /><br />
                        3. Arrume as fatias de queijo e o membrillo ao longo do centro da carne. Polvilhe as folhas de 1 ramo de sálvia por cima e enrole a carne para fechar o recheio. Amarre a carne em intervalos de 3 cm ao longo do comprimento com um cordão.<br /><br />
                        4. Coloque o tomilho e a sálvia restante em uma assadeira que possa ir ao fogão junto com o alho. Coloque o filé de porco por cima, com a pele voltada para cima. Regue com azeite de oliva e tempere generosamente com sal e pimenta.<br /><br />
                        5. Transfira a assadeira para o forno preaquecido e asse por 20 minutos, até que a pele fique crocante e dourada. Reduza a temperatura do forno para 180°C/Gás 4 e cozinhe por mais 50 minutos, até que o porco esteja completamente cozido. Retire o porco da assadeira e reserve em um prato para descansar.<br /><br />
                        6. Coloque a assadeira no fogão. Adicione o xerez e leve para ferver, raspando qualquer resíduo que esteja no fundo da assadeira. Abaixe o fogo, esprema o alho e retire as ervas. Adicione os sucos que restaram da carne.
                        7. Para servir, corte o porco em fatias grossas, coe o molho e despeje sobre a carne.</p>
                </div>
            </div>
        </section>
    )
}

export default Receita2