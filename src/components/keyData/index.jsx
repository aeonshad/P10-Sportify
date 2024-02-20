import calories from '../../assets/calories-icon.png';
import proteines from '../../assets/protein-icon.png';
import glucides from '../../assets/carbs-icon.png';
import lipides from '../../assets/fat-icon.png';

/**
 * Composant KeyData
 * @description Un composant représentant une unité de données clé avec une icône, une valeur et un nom.
 * @param {string} type - Le type de données clé (Calories, Protéines, Glucides, Lipides).
 * @param {number} value - La valeur numérique associée aux données clé.
 */
function KeyData({ type, value }) {
    // Variables pour stocker l'icône et l'unité par défaut
    let icon;
    let unit = 'g';

    // Switch pour définir l'icône et l'unité en fonction du type de données clé
    switch (type) {
        case 'Calories':
            icon = calories;
            unit = 'kCal';
            break;
        case 'Protéines':
            icon = proteines;
            break;
        case 'Glucides':
            icon = glucides;
            break;
        case 'Lipides':
            icon = lipides;
            break;
        default:
            break;
    }

    // Rendu du composant avec l'icône, la valeur et le nom
    return (
        <div className="keydata-container">
            <img className="keydata-img" src={icon} alt="" />
            <div className="keydata-content">
                <h2 className="keydata-value">
                    {value}
                    {unit}
                </h2>
                <p className="keydata-name">{type}</p>
            </div>
        </div>
    );
}

export default KeyData;
