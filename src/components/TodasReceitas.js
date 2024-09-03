import { Link } from 'react-router-dom';
import { receitas } from './receitas';
import { useState, useEffect } from 'react';
import styles from './TodasReceitas.module.css'; // Importação do arquivo de estilo

function TodasReceitas() {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [filteredReceitas, setFilteredReceitas] = useState(receitas);

    const handleSearch = () => {
        const filtered = receitas.filter(receita => {
            const matchesSearch = receita.title.toLowerCase().includes(search.toLowerCase());
            const matchesCategory = category === '' || category === 'Todas as Categorias' || receita.category === category;
            return matchesSearch && matchesCategory;
        });
        setFilteredReceitas(filtered);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        handleSearch(); // Aplica o filtro automaticamente ao mudar a categoria
    };

    useEffect(() => {
        handleSearch();
    }, [search, category]);

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
                        to={`/receita/${receita.id}`} 
                        key={receita.id}
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
