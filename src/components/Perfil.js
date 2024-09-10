import React, { useEffect, useState } from 'react';
import { fetchUserProfile } from '../utils/auth';

const UserProfile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUserProfile = async () => {
            const profile = await fetchUserProfile();
            if (profile) {
                setUser(profile);
            }
        };

        getUserProfile();
    }, []);

    if (!user) return <p>Loading...</p>;

    return (
        <div>
            <h1>Profile</h1>
            <p>Welcome, {user.username}!</p>
            <p>{user.pagante ? 'Plano Pagante' : 'Plano Gratuito'}</p>
        </div>
    );
};

export default UserProfile;
