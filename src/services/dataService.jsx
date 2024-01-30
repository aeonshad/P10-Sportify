import { useFetch } from '../utils/hooks/useFetch';

const urlApi = 'http://localhost:3000/user';

export function useUserData(idUser) {
    return useFetch(`${urlApi}/${idUser}`);
}

export function useUserAverageSession(idUser) {
    return useFetch(`${urlApi}/${idUser}/average-sessions`);
}

export function useUserActivity(idUser) {
    return useFetch(`${urlApi}/${idUser}/activity`);
}

export function useUserPerformance(idUser) {
    return useFetch(`${urlApi}/${idUser}/performance`);
}
