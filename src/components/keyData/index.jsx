import { useEffect, useState } from 'react';
import calories from '../../assets/calories-icon.png';
import proteines from '../../assets/protein-icon.png';
import glucides from '../../assets/carbs-icon.png';
import lipides from '../../assets/fat-icon.png';
function KeyData({ type, value }) {
    let icon;
    let unit = 'g';
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
