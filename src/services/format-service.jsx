// Définition d'un ensemble de performances avec des clés numériques associées à des noms
const performances = {
    1: 'Cardio',
    2: 'Energie',
    3: 'Endurance',
    4: 'Force',
    5: 'Vitesse',
    6: 'Intensité',
};

/**
 * Fonction formatPerformances
 * @description Une fonction pour formater les données de performances.
 * @param {object} data - Les données brutes à formater.
 * @returns {array} - Un tableau de données formatées avec des types de performances associés.
 */
export function formatPerformances(data) {
    // Copie profonde des données pour éviter de modifier l'objet d'origine
    let value = JSON.parse(JSON.stringify(data.data.data));
    // Attribuer des types de performances à chaque entrée en fonction de la clé numérique
    for (let i = 0; i < value.length; i++) {
        value[i].kind = performances[i + 1];
    }
    // Retourner les données formatées
    return value;
}

// Définition d'un ensemble de sessions avec des clés numériques associées à des jours de la semaine
const sessions = {
    1: 'L',
    2: 'M',
    3: 'M',
    4: 'J',
    5: 'V',
    6: 'S',
    7: 'D',
};

/**
 * Fonction formatSessions
 * @description Une fonction pour formater les données de sessions.
 * @param {object} data - Les données brutes à formater.
 * @returns {array} - Un tableau de données formatées avec des jours de la semaine associés.
 */
export function formatSessions(data) {
    // Copie profonde des données pour éviter de modifier l'objet d'origine
    let value = JSON.parse(JSON.stringify(data.data.sessions));
    // Attribuer des jours de la semaine à chaque entrée en fonction de la clé numérique
    for (let i = 0; i < value.length; i++) {
        value[i].day = sessions[i + 1];
    }
    // Retourner les données formatées
    return value;
}

/**
 * Fonction formatActivity
 * @description Une fonction pour formater les données d'activité avec des dates formatées.
 * @param {object} data - Les données brutes à formater.
 * @returns {array} - Un tableau de données formatées avec des dates formatées.
 */
export function formatActivity(data) {
    // Copie profonde des données pour éviter de modifier l'objet d'origine
    let value = JSON.parse(JSON.stringify(data.data.sessions));
    // Formater les dates de chaque entrée dans un format lisible
    for (let i = 0; i < value.length; i++) {
        let date = new Date(value[i].day);
        let formattedDate = date.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' });
        value[i].day = formattedDate;
    }
    // Retourner les données formatées
    return value;
}
