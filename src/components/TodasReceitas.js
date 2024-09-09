import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './TodasReceitas.module.css'; // Importação do arquivo de estilo

function TodasReceitas() {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [filteredReceitas, setFilteredReceitas] = useState([]);
    const [allReceitas, setAllReceitas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReceitas = async () => {
            try {
                const token = localStorage.getItem('token'); // Recupera o token do localStorage
                const response = await axios.get('http://localhost:5000/recipes', {
                    headers: {
                        Authorization: `Bearer ${token}` // Adiciona o token ao cabeçalho da requisição
                    }
                });
                setAllReceitas(response.data);
                setFilteredReceitas(response.data);
                setLoading(false);
            } catch (error) {
                if (error.response) {
                    setError('Failed to fetch recipes');
                } else if (error.request) {
                    console.error('Request error:', error.request);
                } else {
                    console.error('Error message:', error.message);
                }
                setLoading(false);
            }
        };

        fetchReceitas();
    }, []);

    const handleSearch = () => {
        const filtered = allReceitas.filter(receita => {
            const matchesSearch = receita.title.toLowerCase().includes(search.toLowerCase());
            const matchesCategory = category === '' || category === 'Todas as Categorias' || receita.category === category;
            return matchesSearch && matchesCategory;
        });
        setFilteredReceitas(filtered);
    };

    useEffect(() => {
        handleSearch();
    }, [search, category, allReceitas]);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        handleSearch(); // Aplica o filtro automaticamente ao mudar a categoria
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className={styles.TodasReceitasSection}>
            <input
                type="text"
                className={styles.searchInput}
                placeholder="Pesquisar receitas..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <button className={styles.searchButton} onClick={handleSearch}>OK</button>
            <select
                className={styles.categorySelect}
                onChange={handleCategoryChange}
                value={category}
            >
                <option value="Todas as Categorias">Todas as Categorias</option>
                <option value="Sobremesa">Sobremesa</option>
                <option value="Prato Principal">Prato Principal</option>
                <option value="Entrada">Entrada</option>
            </select>

            <div className={styles.receitaList}>
                {filteredReceitas.map(receita => (
                    <Link 
                        to={`/recipes/${receita._id}`}  // Usando o _id gerado pelo MongoDB
                        key={receita._id}
                        style={{ textDecoration: 'none' }} // Remove o sublinhado
                    >
                        <div className={styles.receitaCard}>
                            <img src={receita.imageUrl} alt={receita.title} className={styles.receitaImage} />
                            <h2 className={styles.receitaTitle}>{receita.title}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default TodasReceitas;
