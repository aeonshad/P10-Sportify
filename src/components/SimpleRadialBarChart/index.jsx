import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

/**
 * Composant SimpleRadialBarChart
 * @description Un composant représentant un graphique à barres radiales affichant le score d'un utilisateur.
 * @param {number} score - Le score de l'utilisateur à afficher dans le graphique.
 */
function SimpleRadialBarChart({ score }) {
    // Créer un tableau de données contenant le score de l'utilisateur
    const userSession = [{ score: score }];

    return (
        <div className="chart-container">
            <ResponsiveContainer width="100%" height={263}>
                {/* Graphique à barres radiales avec des paramètres spécifiques */}
                <RadialBarChart
                    className="radialchart"
                    width={258}
                    height={263}
                    innerRadius="70%"
                    outerRadius="60%"
                    data={userSession}
                    startAngle={-180}
                    endAngle={-180 + (userSession[0].score * 100 * -360) / 100}
                    margin={{
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    {/* Texte indiquant le titre du graphique */}
                    <text x="15%" y="15%" textAnchor="start" dominantBaseline="middle">
                        Score
                    </text>
                    {/* Barre radiale représentant le score avec une couleur spécifique et des coins arrondis */}
                    <RadialBar name="score" dataKey="score" stroke-linejoin="round" fill="red" cornerRadius={100} />
                </RadialBarChart>
            </ResponsiveContainer>
            {/* Cercle du graphique */}
            <div className="chart-circle"></div>
            {/* Contenu du cercle avec le pourcentage du score par rapport à l'objectif */}
            <div className="chart-circle-content">
                <p className="chart-circle-content-title">{`${userSession[0].score * 100}%`}</p>
                <p className="chart-circle-content-text">
                    de votre <br /> objectif
                </p>
            </div>
        </div>
    );
}
export default SimpleRadialBarChart;
