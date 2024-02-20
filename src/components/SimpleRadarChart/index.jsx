import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { useUserPerformance } from '../../services/dataService';
import { formatPerformances } from '../../services/format-service';

/**
 * Composant SimpleRadarChart
 * @description Un composant représentant un graphique radar affichant les performances d'un utilisateur.
 * @param {string} idUser - L'identifiant de l'utilisateur pour récupérer les données du service.
 */
function SimpleRadarChart({ idUser }) {
    // Utiliser le hook useUserPerformance pour récupérer les données de performance de l'utilisateur
    const { data: userData, isLoading, error } = useUserPerformance(idUser);

    // Formater les données de performance
    const dataFormated = isLoading ? [] : formatPerformances(userData);

    if (error) {
        console.log(error);
    }

    // Si les données sont en cours de chargement, afficher un message d'attente
    return isLoading ? (
        <h1 className="home-header-title">En attente...</h1>
    ) : (
        // Sinon afficher le graphique radar de l'utilisateur
        <div className="chart-container">
            <ResponsiveContainer width="100%" height={263}>
                {/* Graphique radar avec des paramètres spécifiques */}
                <RadarChart margin={{ top: 5, right: 10, bottom: 5, left: 20 }} className="radarchart" width={258} height={263} data={dataFormated}>
                    {/* Grille polaire avec des lignes radiales et un style spécifique */}
                    <PolarGrid gridType="polygon" radialLines={false} innerRadius={100} />
                    {/* Axe des angles polaires avec les types de performance comme étiquettes et un style spécifique */}
                    <PolarAngleAxis dataKey="kind" tick={{ fill: '#FFFFFF', fontSize: 8 }} tickLine={false} />
                    {/* Axe des rayons polaires avec une plage spécifique et sans étiquettes ni lignes d'axe */}
                    <PolarRadiusAxis domain={[0, 'auto']} tick={false} axisLine={false} />
                    {/* Zone radar représentant les valeurs de performance avec une couleur de remplissage spécifique */}
                    <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default SimpleRadarChart;
