import { useState } from 'react';

function Rating({ onRatingSubmit }) {
    const [rating, setRating] = useState(0);

    const handleSubmit = () => {
        if (rating > 0) {
            onRatingSubmit(rating);
            setRating(0);
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {[1, 2, 3, 4, 5].map(star => (
                <span
                    key={star}
                    onClick={() => setRating(star)}
                    style={{
                        cursor: 'pointer',
                        fontSize: '2rem',
                        color: star <= rating ? '#FFD700' : '#ccc'
                    }}
                >
                    ★
                </span>
            ))}
            <button onClick={handleSubmit} style={{ marginLeft: '10px' }}>Avaliar</button>
        </div>
    );
}

export default Rating;
