import { useState } from 'react';
import axios from 'axios';
import styles from './Rating.module.css'; 

function Rating({ recipeId }) {
    const [rating, setRating] = useState(0); 
    const [comment, setComment] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const handleStarClick = (value) => {
        setRating(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('http://localhost:5000/ratings', {
                recipeId,
                rating,
                comment,
                userId: 'someUserId' 
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.status === 201) {
                setSuccessMessage('Avaliação enviada com sucesso!');
                setError(null); 
            }
        } catch (error) {
            setError('Erro ao enviar a avaliação.');
        }
    };

    return (
        <div className={styles.ratingContainer}>
            <h3>Avalie esta receita</h3>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div className={styles.starRating}>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            className={`${styles.star} ${star <= rating ? styles.filled : ''}`}
                            onClick={() => handleStarClick(star)}
                        >
                            ★
                        </span>
                    ))}
                </div>
                <div>
                    <label>Comentário:</label>
                    <textarea 
                        value={comment} 
                        onChange={(e) => setComment(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Enviar Avaliação</button>
            </form>
        </div>
    );
}

export default Rating;
