import { LineChart, XAxis, Tooltip, Line, ResponsiveContainer, Rectangle } from 'recharts';
import { useUserAverageSession } from '../../services/dataService';
import { formatSessions } from '../../services/format-service';

/**
 * Composant LineChartGraph
 * @description Un composant représentant un graphique linéaire des durées moyennes des sessions d'un utilisateur.
 * @param {string} idUser - L'identifiant de l'utilisateur pour récupérer les données du service.
 */
function LineChartGraph({ idUser }) {
    // Utiliser le hook useUserAverageSession pour récupérer les données des sessions moyennes de l'utilisateur
    const { data: userData, isLoading, error } = useUserAverageSession(idUser);

    // Formater les données des sessions
    const dataFormated = isLoading ? [] : formatSessions(userData);

    // Composant personnalisé pour le curseur du graphique
    const CustomCursor = ({ points }) => {
        return <Rectangle fill="#00000020" stroke="none" x={points[0].x} width={283 - points[0].x} height={263} radius={[0, 10, 10, 0]} />;
    };

    // Composant personnalisé pour l'info-bulle du graphique
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip-linechart">
                    <p className="label-linechart">{`${payload[0].value} min`}</p>
                </div>
            );
        }
    };

    if (error) {
        console.log(error);
    }

    // Si les données sont en cours de chargement, afficher un message d'attente
    return isLoading ? (
        <h1 className="home-header-title">En attente...</h1>
    ) : (
        // Sinon afficher le graphique linéaire de l'utilisateur
        <div className="chart-container">
            <ResponsiveContainer width="100%" height={263}>
                {/* Graphique linéaire avec des paramètres spécifique */}
                <LineChart className="linechart" width={258} height={263} data={dataFormated} margin={{ top: 60, right: 30, left: 20, bottom: 10 }}>
                    {/* Texte d'introduction en haut du graphique */}
                    <text x="0%" y="20%" textAnchor="start" dominantBaseline="middle">
                        <tspan fontSize={15} fill="#FFFFFF90" x="12%" dy="-1em">
                            Durées moyennes
                        </tspan>
                        <tspan fontSize={15} fill="#FFFFFF90" x="12%" dy="1.5em">
                            des sessions
                        </tspan>
                    </text>
                    {/* Axe X avec les jours et paramètres de style */}
                    <XAxis dataKey="day" axisLine={{ stroke: 'none' }} tickLine={false} tick={{ fill: '#FFFFFF90', fontSize: 12 }} />
                    {/* Info-bulle personnalisée et curseur pour le graphique */}
                    <Tooltip content={CustomTooltip} cursor={<CustomCursor />} />
                    {/* Ligne du graphique avec style spécifique */}
                    <Line type="bumpX" dataKey="sessionLength" stroke="#FFFFFF90" strokeWidth={2} dot={false} activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
export default LineChartGraph;
