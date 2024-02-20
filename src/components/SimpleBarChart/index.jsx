import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useUserActivity } from '../../services/dataService';
import { formatActivity } from '../../services/format-service';

/**
 * Composant Chart
 * @description Un composant représentant un graphique à barres des activités quotidiennes d'un utilisateur.
 * @param {string} idUser - L'identifiant de l'utilisateur pour récupérer les données du service.
 */
function Chart({ idUser }) {
    // Utiliser le hook useUserActivity pour récupérer les données d'activité de l'utilisateur
    const { data: userData, isLoading, error } = useUserActivity(idUser);

    // Formater les données d'activité
    const dataFormated = isLoading ? [] : formatActivity(userData);

    // Composant personnalisé pour l'info-bulle du graphique
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip-barchart">
                    <p className="label-barchart">{`${payload[0].value}kg`}</p>
                    <p className="label-barchart">{`${payload[1].value}Kcal`}</p>
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
        // Sinon afficher le graphique à barres de l'utilisateur
        <ResponsiveContainer width="100%" height={320}>
            {/* Graphique à barres avec des paramètres spécifiques */}
            <BarChart
                className="barchart"
                width={835}
                height={320}
                data={dataFormated}
                margin={{
                    top: 23,
                    right: 30,
                    left: 43,
                    bottom: 20,
                }}
                barGap={8}
            >
                {/* Texte d'introduction en haut du graphique */}
                <text x={40} y={39} fill="black">
                    <tspan fontSize="15">Activité quotidienne</tspan>
                </text>
                {/* Grille cartésienne pour les lignes de grille avec style spécifique */}
                <CartesianGrid strokeDasharray="4 3" vertical={false} />
                {/* Axe X avec les jours et paramètres de style */}
                <XAxis dataKey="day" axisLine={{ stroke: '#DEDEDE' }} tickLine={false} tick={{ fill: '#9B9EAC', fontSize: 14 }} />
                {/* Axe Y à droite avec plage spécifique et paramètres de style */}
                <YAxis
                    orientation="right"
                    domain={[0, 'dataMax + 10']}
                    tickLine={false}
                    tick={{ fill: '#74798C', fontSize: 14 }}
                    dx={25}
                    axisLine={{ stroke: 'none' }}
                />
                {/* Info-bulle personnalisée pour le graphique */}
                <Tooltip content={CustomTooltip} />
                {/* Légende avec style spécifique */}
                <Legend
                    verticalAlign="top"
                    align="right"
                    iconType="circle"
                    iconSize={8}
                    height={47}
                    formatter={(value) => (
                        <span
                            style={{
                                fontSize: 14,
                            }}
                            className="chart-text"
                        >
                            {value}
                        </span>
                    )}
                />
                {/* Barres pour le poids et les calories brûlées avec style spécifique */}
                <Bar name="Poids (kg)" dataKey="kilogram" barSize={10} fill="#282D30" radius={[3, 3, 0, 0]} />
                <Bar name="Calories brûlées (kCal)" dataKey="calories" barSize={10} fill="#E60000" radius={[3, 3, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    );
}
export default Chart;
