import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Receita from './Receita';
import Rating from './Rating';

function ReceitaDetalhe() {
    const { id } = useParams(); 
    const [receita, setReceita] = useState(null);
    const [averageRating, setAverageRating] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReceita = async () => {
            try {
                const token = localStorage.getItem('token'); 
                const response = await axios.get(`http://localhost:5000/recipes/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setReceita(response.data.recipe); 
                setAverageRating(response.data.averageRating); 
            } catch (error) {
                setError('Erro ao carregar a receita');
            }
        };

        fetchReceita();
    }, [id]);

    if (!receita) {
        return <h2>{error || 'Carregando...'}</h2>;
    }

    return (
        <>  
            <h3 style={{ fontSize: '1.8em', paddingTop: '30px' }}>Avaliação média: {averageRating}</h3>

            <Receita
                autor={receita.autor}
                title={receita.title}
                videoUrl={receita.videoUrl}
                ingredientes={receita.ingredientes}
                modoPreparo={receita.modoPreparo}
            />
            <Rating recipeId={id} />
        </>
    );
}

export default ReceitaDetalhe;
