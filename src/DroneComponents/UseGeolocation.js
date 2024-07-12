import { useState, useEffect } from 'react';

const useGeolocation = () => {
    const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null });
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!navigator.geolocation) {
            setError('Geolocation is not supported by your browser');
            return;
        }

        const handleSuccess = (position) => {
            const { latitude, longitude } = position.coords;
            setCoordinates({ latitude, longitude });
        };

        const handleError = (error) => {
            setError(error.message);
        };

        navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    }, []);

    return { coordinates, error };
};

export default useGeolocation;