import { useEffect, useState } from 'react';

/**
 * Hook useFetch
 * @description Un hook personnalisé pour effectuer des requêtes (fetch).
 * @param {string} url - L'URL à partir de laquelle charger les données.
 * @param {boolean} isMocked - Indique si l'API est mockée pour charger des données statiques.
 * @returns {object} - Un objet contenant les données, l'état de chargement, et une indication d'erreur.
 */
export function useFetch(url, isMocked) {
    // État local pour stocker les données, l'état de chargement, et l'indicateur d'erreur
    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // Utilisation de useEffect pour effectuer l'appel réseau dès que l'URL ou le statut mocked change
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

        // Appeler la fonction fetchData
        fetchData();
    }, [url, isMocked]); // Dépendances pour le rechargement du hook en fonction des changements d'URL ou de statut mock

    return { data, isLoading, error };
}
