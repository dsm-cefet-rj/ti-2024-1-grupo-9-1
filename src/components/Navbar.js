import styles from './Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { Link as LinkRouter, useNavigate } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import brasil from '../assets/img/brasil2.png';
import uk from '../assets/img/uk2.png';
import logo from '../assets/img/solislogo.png';
import { checkUserLoggedIn } from '../utils/auth';

function Navbar() {
    const [t, i18n] = useTranslation("global");

    const currentUrl = window.location.pathname;
    const isHome = currentUrl === '/';

    const navigate = useNavigate();

    const handleProfileClick = async () => {
        const loggedIn = await checkUserLoggedIn();
        if (loggedIn) {
            navigate('/perfil');
        } else {
            navigate('/login');
        }
    };

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setOpenLanguages(false);
    };

    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
        document.body.style.overflowY = click ? 'auto' : 'hidden';
    };

    const closeMenu = () => {
        setClick(false);
        document.body.style.overflowY = 'auto';
    };

    const [openLanguages, setOpenLanguages] = useState(false);
    const languagesRef = useRef(null);

    useEffect(() => {
        const handler = (e) => {
            if (languagesRef.current && !languagesRef.current.contains(e.target)) {
                setOpenLanguages(false);
            }
        };

        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles.hamburger} onClick={handleClick}>
                    {click ? (<FaTimes size={40} style={{ color: '#E4C576' }} />) : (<BiMenuAltRight size={40} style={{ color: '#E4C576' }} />)}
                </div>
                <div className={styles.container}>
                    <a href="/" className={styles.logo}>
                        <img src={logo} alt='logo' />
                    </a>
                </div>
                <ul className={styles.navMenu}>
                    <li className={styles.navItem}>
                        <LinkRouter to="/">{t("navBar.home")}</LinkRouter>
                    </li>
                    {isHome && <li className={styles.navItem}>
                        <Link to="UR" spy={true} smooth={true} offset={0} duration={1000}>{t("navBar.UR")}</Link>
                    </li>}
                    {isHome && <li className={styles.navItem}>
                        <Link to="Contato" spy={true} smooth={true} offset={0} duration={1000}>{t("navBar.Contato")}</Link>
                    </li>}
                    {isHome && <li className={styles.navItem} onClick={handleProfileClick}>
                    <Link onClick={handleProfileClick} to="" spy={true} smooth={true} offset={0} duration={1000}>{t("navBar.perfil")}</Link>
                    </li>}
                    <div className={styles.dropdown} ref={languagesRef}>
                        <div className={styles.select} onClick={() => setOpenLanguages((prev) => !prev)}>
                            <span className={styles.selected}>{t("navBar.language")}</span>
                            <div className={styles.caret} />
                        </div>
                        {openLanguages && <ul className={styles.menu}>
                            <li onClick={() => handleChangeLanguage("pt")}>Português</li>
                            <li onClick={() => handleChangeLanguage("en")}>English</li>
                        </ul>}
                    </div>
                </ul>

                <ul className={click ? "sideNavMenu active" : "sideNavMenu"}>
                    <div className='hamburger' onClick={handleClick}>
                        {click ? (<AiOutlineClose size={25} style={{ color: '#E4C576', right: "15", top: "33", position: "absolute" }} />) : (<FaBars size={20} style={{ display: "none" }} />)}
                    </div>
                    <div className={styles.languageButtonContainer}>
                        <img src={brasil} className={styles.languageButton} onClick={() => handleChangeLanguage("pt")} />
                        <img src={uk} className={styles.languageButton} onClick={() => handleChangeLanguage("en")} />
                    </div>
                    <li className={styles.navItem}>
                        <LinkRouter to="/" onClick={closeMenu}>{t("navBar.home")}</LinkRouter>
                    </li>
                    {isHome && <li className={styles.navItem}>
                        <Link to="UR" spy={true} smooth={true} offset={0} duration={1000} onClick={closeMenu}>{t("navBar.UR")}</Link>
                    </li>}
                    {isHome && <li className={styles.navItem}>
                        <Link to="Contato" spy={true} smooth={true} offset={0} duration={1000} onClick={closeMenu}>{t("navBar.Contato")}</Link>
                    </li>}
                    {isHome && <li className={styles.navItem} onClick={handleProfileClick}>
                        <span className={styles.navLink}>{t("navBar.perfil")}</span>
                    </li>}
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
