import { Link } from 'react-router-dom';
import { receitas } from './receitas';
import { useState } from 'react';

function Home() {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');

    const filteredReceitas = receitas.filter(receita => {
        return (
            (receita.title.toLowerCase().includes(search.toLowerCase())) &&
            (category === '' || receita.category === category)
        );
    });

    return (
        <div>
            <input
                type="text"
                placeholder="Pesquisar receitas..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <select onChange={(e) => setCategory(e.target.value)} value={category}>
                <option value="">Todas as Categorias</option>
                <option value="Sobremesa">Sobremesa</option>
                <option value="Prato Principal">Prato Principal</option>
                <option value="Prato Principal">Entrada</option>
            </select>

            <div className="receita-list">
                {filteredReceitas.map(receita => (
                    <Link to={`/receita/${receita.id}`} key={receita.id}>
                        <div className="receita-card">
                            <img src={receita.imageUrl} alt={receita.title} />
                            <h2>{receita.title}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Home;
