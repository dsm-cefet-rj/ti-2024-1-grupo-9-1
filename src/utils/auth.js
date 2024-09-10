export const checkUserLoggedIn = async () => {
    try {
        const response = await fetch('/api/auth/profile', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`, // Adicione o token ao cabeçalho
            },
        });

        if (!response.ok) {
            if (response.status === 401) {
                // Token não fornecido ou inválido
                return false;
            } else {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        }

        const data = await response.json();
        return data ? true : false; // Verifique se o perfil foi retornado
    } catch (error) {
        console.error('Error checking login status:', error);
        return false;
    }
};

export const fetchUserProfile = async () => {
    try {
        const response = await fetch('/api/auth/profile', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`, // Adicione o token ao cabeçalho
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching user profile:', error);
        return null;
    }
};
