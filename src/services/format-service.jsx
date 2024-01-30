const performances = {
    1: 'Cardio',
    2: 'Energie',
    3: 'Endurance',
    4: 'Force',
    5: 'Vitesse',
    6: 'Intensité',
};

export function formatPerformances(data) {
    let value = data.data.data;
    for (let i = 0; i < value.length; i++) {
        value[i].kind = performances[i + 1];
    }
    return value;
}

const sessions = {
    1: 'L',
    2: 'M',
    3: 'M',
    4: 'J',
    5: 'V',
    6: 'S',
    7: 'D',
};

export function formatSessions(data) {
    //let value = JSON.parse(JSON.stringify(data.data.sessions));
    let value = data.data.sessions;
    for (let i = 0; i < value.length; i++) {
        value[i].day = sessions[i + 1];
    }
    return value;
}

export function formatActivity(data) {
    //let value = [...data.data.sessions];
    let value = JSON.parse(JSON.stringify(data.data.sessions));
    for (let i = 0; i < value.length; i++) {
        let date = new Date(value[i].day);
        let formattedDate = date.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' });
        value[i].day = formattedDate;
    }
    console.log(value);
    return value;
}
