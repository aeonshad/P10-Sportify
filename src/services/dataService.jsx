import { useFetch } from '../utils/hooks/useFetch';

const isMocked = true;

let urlApi = '';
if (isMocked) {
    urlApi = '/data';
} else {
    urlApi = 'http://localhost:3000';
}

/**
 * Hook useUserData
 * @description Un hook pour récupérer les données d'un utilisateur.
 * @param {string} idUser - L'identifiant de l'utilisateur.
 * @returns {object} - Un objet contenant les données, l'état de chargement, et une indication d'erreur.
 */
export function useUserData(idUser) {
    return useFetch(`${urlApi}/user/${idUser}`, isMocked);
}

/**
 * Hook useUserAverageSession
 * @description Un hook pour récupérer les données de session moyenne d'un utilisateur.
 * @param {string} idUser - L'identifiant de l'utilisateur.
 * @returns {object} - Un objet contenant les données, l'état de chargement, et une indication d'erreur.
 */
export function useUserAverageSession(idUser) {
    return useFetch(`${urlApi}/user/${idUser}/average-sessions`, isMocked);
}

/**
 * Hook useUserActivity
 * @description Un hook pour récupérer les données d'activité d'un utilisateur.
 * @param {string} idUser - L'identifiant de l'utilisateur.
 * @returns {object} - Un objet contenant les données, l'état de chargement, et une indication d'erreur.
 */
export function useUserActivity(idUser) {
    return useFetch(`${urlApi}/user/${idUser}/activity`, isMocked);
}

/**
 * Hook useUserPerformance
 * @description Un hook pour récupérer les données de performance d'un utilisateur.
 * @param {string} idUser - L'identifiant de l'utilisateur.
 * @returns {object} - Un objet contenant les données, l'état de chargement, et une indication d'erreur.
 */
export function useUserPerformance(idUser) {
    return useFetch(`${urlApi}/user/${idUser}/performance`, isMocked);
}
