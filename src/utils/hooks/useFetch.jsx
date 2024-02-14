import { useEffect, useState } from 'react';
export function useFetch(url, isMocked) {
    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!url) return;
        setLoading(true);
        async function fetchData() {
            try {
                let responseData;
                if (isMocked) {
                    // Si l'API est mockée, chargez les données statiques depuis le fichier JSON
                    const response = await fetch(url + '.json');
                    responseData = await response.json();
                } else {
                    // Sinon, chargez les données réelles à partir de l'API
                    const response = await fetch(url);
                    responseData = await response.json();
                }
                setData(responseData);
            } catch (err) {
                console.log(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url, isMocked]);

    return { data, isLoading, error };
}
