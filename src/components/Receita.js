import styles from './Receita.module.css'
import { useTranslation } from "react-i18next";

function Receita({ autor, title, videoUrl, ingredientes, modoPreparo }) {
    const [t, i18n] = useTranslation("global");

    return (
        <section className={styles.ur}>
            <h1 className={styles.autorTitle}>{autor}</h1>
            <h1 className={styles.pageTitle}>{title}</h1>
            <iframe width="50%" height="500" src={videoUrl}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
            </iframe>
            <div className={styles.container}>
                <div className={styles.ingredienteContainer}>
                    <h1 className={styles.pageTitle}>{t("Receita1.ingredientes")}</h1>
                    <p>{ingredientes.map((item, index) => (
                        <span key={index}>{item}<br /><br /></span>
                    ))}</p>
                </div>
                <div className={styles.modoPrepContainer}>
                    <h1 className={styles.pageTitle}>{t("Receita1.modoPrep")}</h1>
                    <p>{modoPreparo.map((step, index) => (
                        <span key={index}>{step}<br /><br /></span>
                    ))}</p>
                </div>
            </div>
        </section>
    )
}

export default Receita;
