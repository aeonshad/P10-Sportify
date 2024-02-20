import Chart from '../../components/SimpleBarChart';
import LineChart from '../../components/LineChart';
import SimpleRadarChart from '../../components/SimpleRadarChart';
import SimpleRadialBarChart from '../../components/SimpleRadialBarChart';
import KeyData from '../../components/keyData';
import { useUserData } from '../../services/dataService';
import { useParams } from 'react-router-dom';

/**
 * Composant Dashboard
 * @description Un composant représentant le tableau de bord utilisateur avec des graphiques et des données clés.
 */
function Dashboard() {
    // Récupérer l'identifiant de l'utilisateur à partir des paramètres d'URL
    const { idUser } = useParams();

    // Utiliser le hook useUserData pour récupérer les données de l'utilisateur
    const { data: userData, isLoading, error } = useUserData(idUser);

    if (error) {
        console.log(error);
    }

    // Si les données sont en cours de chargement, afficher un message d'attente
    return isLoading ? (
        <h1 className="dashboard-header-title">En attente...</h1>
    ) : (
        // Sinon afficher le tableau de bord avec les graphiques et les données clés de l'utilisateur
        <div className="dashboard-container">
            {/* En-tête du tableau de bord avec le nom de l'utilisateur */}
            <div className="dashboard-header">
                <h1 className="dashboard-header-title">
                    Bonjour <span>{userData.data.userInfos.firstName}</span>
                </h1>
                <p className="dashboard-header-text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className="dashboard-wrapper">
                {/* Section des graphiques */}
                <div className="dashboard-chart">
                    {/* Graphique à barres simple */}
                    <Chart idUser={userData.data.id} />
                    {/* Ligne, radar, et graphiques à barres radiales */}
                    <div className="dashboard-chart-row">
                        <LineChart idUser={userData.data.id} />
                        <SimpleRadarChart idUser={userData.data.id} />
                        <SimpleRadialBarChart score={userData.data.score || userData.data.todayScore} />
                    </div>
                </div>
                {/* Section des données clés */}
                <div className="dashboard-keydata">
                    {/* Composants KeyData pour afficher les données clés */}
                    <KeyData type="Calories" value={userData.data.keyData.calorieCount} />
                    <KeyData type="Protéines" value={userData.data.keyData.proteinCount} />
                    <KeyData type="Glucides" value={userData.data.keyData.carbohydrateCount} />
                    <KeyData type="Lipides" value={userData.data.keyData.lipidCount} />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
