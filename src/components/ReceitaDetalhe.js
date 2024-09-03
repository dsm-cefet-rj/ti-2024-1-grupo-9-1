import { useParams } from 'react-router-dom';
import Receita from './Receita';
import { receitas } from './receitas';
import Rating from './Rating';
import { useState } from 'react';

function ReceitaDetalhe() {
    const { id } = useParams();
    const receita = receitas.find(receita => receita.id === parseInt(id));
    const [ratings, setRatings] = useState([]);

    const handleRatingSubmit = (newRating) => {
        setRatings([...ratings, newRating]);
    };

    if (!receita) {
        return <h2>Receita não encontrada</h2>;
    }

    return (
        <>
            <Receita
                autor={receita.autor}
                title={receita.title}
                videoUrl={receita.videoUrl}
                ingredientes={receita.ingredientes}
                modoPreparo={receita.modoPreparo}
            />
            <Rating onRatingSubmit={handleRatingSubmit} />
            <div>
                <h2>Avaliações:</h2>
                {ratings.length > 0 ? (
                    <ul>
                        {ratings.map((rating, index) => (
                            <li key={index}>{`Avaliação ${index + 1}: ${rating} estrelas`}</li>
                        ))}
                    </ul>
                ) : (
                    <p>Seja o primeiro a avaliar esta receita!</p>
                )}
            </div>
        </>
    );
}

export default ReceitaDetalhe;
