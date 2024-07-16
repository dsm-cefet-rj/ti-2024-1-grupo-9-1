import styles from './Navbar.module.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import {useEffect, useRef, useState} from "react"
import {useTranslation} from "react-i18next"
import {Link} from 'react-scroll'
import {Link as LinkRouter} from 'react-router-dom'
import {BiMenuAltRight} from "react-icons/bi";
import {AiOutlineClose} from "react-icons/ai";
import brasil from "../assets/img/brasil2.png"
import uk from "../assets/img/uk2.png"
import logo from "../assets/img/brasil2.png"


function Navbar(){
    const [t, i18n] = useTranslation("global");

    const currentUrl = window.location.pathname;
    const isHome = currentUrl === '/';

    const handleChangeLanguage = (lang: string) =>{
        i18n.changeLanguage(lang);
        setOpenLanguages(false);
    };

    const [click, setClick] = useState(false)
    const handleClick = () => {
        if (click){
            body.style.overflowY = 'auto';
        } else{
            body.style.overflowY = 'hidden';
        }
        setClick(!click)
    }

    const closeMenu = () => {
        if (click){
            body.style.overflowY = 'auto';
        } else{
            body.style.overflowY = 'hidden';
        }
        setClick(false)
    }

    const [openLanguages, setOpenLanguages] = useState(false)
    let languagesRef = useRef();
    useEffect(() =>{
        let handler = (e)=>{
            if(!languagesRef.current.contains(e.target)){
                setOpenLanguages(false);
            }
        };

        document.addEventListener("mousedown", handler)
    });

    var body = document.getElementsByTagName('body')[0];

    return (
        <div className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles.hamburger} onClick={handleClick}>
                    {click ? (<FaTimes size={40} style={{display:"none" }} />) : (<BiMenuAltRight size={40} style={{ color: '#E4C576'}}/>)}
                </div>
                <div className={styles.container}>
                    <a href="/" className={styles.logo}>
                        <img src={logo} alt='logo'/>
                    </a>
                </div>
                <ul className={styles.navMenu}>
                    <li className={styles.navItem}>
                        <LinkRouter to ="/">{t("navBar.home")}</LinkRouter>
                    </li>
                    {isHome &&  <li className={styles.navItem}>
                        <Link to ="UR" spy={true} smooth={true} offset={0} duration={1000}>{t("navBar.UR")}</Link>
                    </li>}
                    {isHome &&  <li className={styles.navItem}>
                        <Link to ="NU" spy={true} smooth={true} offset={0} duration={1000}>{t("navBar.NU")}</Link>
                    </li>}
                    {isHome &&  <li className={styles.navItem}>
                        <LinkRouter to ="/perfil">{t("navBar.perfil")}</LinkRouter>
                    </li>}

                    <div className={styles.dropdown} ref={languagesRef} >
                        <div className={styles.select} onClick={() => setOpenLanguages((prev) => !prev) }>
                            <span className={styles.selected}>{t("navBar.language")}</span>
                            <div className={styles.caret}/>
                        </div>
                        {
                            openLanguages &&  <ul className={styles.menu}>
                                <li onClick={() => handleChangeLanguage("pt")}>Português</li>
                                <li onClick={() => handleChangeLanguage("en")}>English</li>
                            </ul>
                        }
                    </div>
                </ul>



                <ul className={click ? "sideNavMenu active" : "sideNavMenu"}>
                    <div className='hamburger' onClick={handleClick}>
                        {click ? (<AiOutlineClose size={25} style={{ color: '#E4C576', right:"15", top:"33", position:"absolute"}} />) : (<FaBars size={20} style={{ display:"none"}} />)}
                    </div>
                    <div className={styles.languageButtonContainer}>
                        <img src={brasil} className={styles.languageButton} onClick={() => handleChangeLanguage("pt")}/>
                        <img src={uk} className={styles.languageButton} onClick={() => handleChangeLanguage("en")}/>
                    </div>
                    <li className={styles.navItem}>
                        <Link to ="home" spy={true} smooth={true} offset={0} duration={1000} onClick={closeMenu}>{t("navBar.home")}</Link>
                    </li>
                    {isHome &&  <li className={styles.navItem}>
                        <Link to ="UR" spy={true} smooth={true} offset={0} duration={1000} onClick={closeMenu}>{t("navBar.UR")}</Link>
                    </li>}
                    {isHome &&  <li className={styles.navItem}>
                        <Link to ="NU" spy={true} smooth={true} offset={0} duration={1000} onClick={closeMenu}>{t("navBar.NU")}</Link>
                    </li>}
                    {isHome &&  <li className={styles.navItem}>
                        <Link to ="perfil" spy={true} smooth={true} offset={0} duration={1000} onClick={closeMenu}>{t("navBar.perfil")}</Link>
                    </li>}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar