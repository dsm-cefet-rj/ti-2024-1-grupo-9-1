import { useParams } from 'react-router-dom';
import Receita from './Receita';
import { receitas } from './receitas';

function ReceitaDetalhe() {
    const { id } = useParams();
    const receita = receitas.find(receita => receita.id === parseInt(id));

    if (!receita) {
        return <h2>Receita não encontrada</h2>;
    }

    return (
        <Receita
            autor={receita.autor}
            title={receita.title}
            videoUrl={receita.videoUrl}
            ingredientes={receita.ingredientes}
            modoPreparo={receita.modoPreparo}
        />
    );
}

export default ReceitaDetalhe;
