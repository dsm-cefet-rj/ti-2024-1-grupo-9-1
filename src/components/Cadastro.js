import styles from './Perfil.module.css'
import {useTranslation} from "react-i18next"
import {Link} from 'react-scroll'
import other from '../assets/img/other.png'
import gray from "../assets/img/gray.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {Link as LinkRouter} from "react-router-dom";

function Cadastro(){
    const [t, i18n] = useTranslation("global");

    return (
        <section id='Cadastro' className={styles.cadastro}>
            <h1 className={styles.pageTitle} style={{cursor:"auto"}}>{t("Cadastro.title")}</h1>
            <div className={styles.container}>
                <form action="">
                    <h3>{t("Cadastro.desc")}</h3>
                    <div className="form-holder">
                        <input type="text" className="form-control" placeholder="Username"/>
                    </div>
                    <div className="form-holder">
                        <input type="text" className="form-control" placeholder="Phone Number"/>
                    </div>
                    <div className="form-holder">
                        <input type="text" className="form-control" placeholder="E-Mail"/>
                    </div>
                    <div className="form-holder">
                        <input type="password" className="form-control" placeholder="Password"/>
                    </div>
                    <div className="form-holder">
                        <input type="password" className="form-control" placeholder="Confirm Password"/>
                    </div>
                    <button>
                        <span>Register</span>
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Cadastro