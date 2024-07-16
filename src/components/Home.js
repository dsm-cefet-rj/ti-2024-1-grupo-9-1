import styles from './Home.module.css'
import foodBg from '../assets/food.mp4'
import {useTranslation} from "react-i18next"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-scroll'

function Home(){
    const [t, i18n] = useTranslation("global");

    return (
        <section id='home'>
            <div className={styles.overlay}></div>
            <video className={styles.bg} src={foodBg} autoPlay loop muted playsInline/>
            <div className={styles.content}>

                <h2 className={styles.pageDescription}>{t("home.desc")}</h2>
                <Link to ="UR" spy={true} smooth={true} offset={0} duration={1000} className={styles.containerArrowDown}>
                   <FontAwesomeIcon icon={faAngleDown} className={styles.arrowDown}/>
                </Link>
            </div>
        </section>
    )
}

export default Home