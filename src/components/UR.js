import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './UR.module.css';
import { useTranslation } from "react-i18next";
import { Link } from 'react-scroll';
import diamond from '../assets/img/diamond.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import gray from "../assets/img/gray.png";
import { Link as LinkRouter, useNavigate } from 'react-router-dom';

function UR() {
    const [t] = useTranslation("global");
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRandomRecipes = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/recipes', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const allRecipes = response.data;

                // Embaralhar receitas e pegar as 3 primeiras
                const shuffled = allRecipes.sort(() => 0.5 - Math.random());
                const selectedRecipes = shuffled.slice(0, 3);

                setRecipes(selectedRecipes);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        fetchRandomRecipes();
    }, []);

    return (
        <section id='UR' className={styles.ur}>
            <img className={styles.icon} src={diamond} alt="diamond"/>
            <h1 className={styles.pageTitle} style={{ cursor: "auto" }}>{t("UR.title")}</h1>
            <div className={styles.container}>
                {recipes.map((recipe) => (
                    <div key={recipe._id} className={styles.urContainer}>
                        <a href={`/recipes/${recipe._id}`} className={styles.logo}>
                            <img src={recipe.imageUrl || gray} className={styles.urImage} alt={recipe.title} />
                            <h3>{recipe.title}</h3>
                        </a>
                    </div>
                ))}
            </div>
            <Link to="Contato" spy={true} smooth={true} offset={0} duration={1000} className={styles.containerArrowDown}>
                <FontAwesomeIcon icon={faAngleDown} className={styles.arrowDown}/>
            </Link>
            <a className={styles.signupPrompt}>
                <LinkRouter to="/recipes" className={styles.signupLink}>Lista com todas as receitas!</LinkRouter>
            </a>
        </section>
    );
}

export default UR;
