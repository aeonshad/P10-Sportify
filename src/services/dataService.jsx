import { useFetch } from '../utils/hooks/useFetch';

const isMocked = true;
let urlApi = '';
if (isMocked) {
    urlApi = '/data';
} else {
    urlApi = 'http://localhost:3000';
}

export function useUserData(idUser) {
    return useFetch(`${urlApi}/user/${idUser}`, isMocked);
}

export function useUserAverageSession(idUser) {
    return useFetch(`${urlApi}/user/${idUser}/average-sessions`, isMocked);
}

export function useUserActivity(idUser) {
    return useFetch(`${urlApi}/user/${idUser}/activity`, isMocked);
}

export function useUserPerformance(idUser) {
    return useFetch(`${urlApi}/user/${idUser}/performance`, isMocked);
}
