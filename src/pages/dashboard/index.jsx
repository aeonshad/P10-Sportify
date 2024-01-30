import Chart from '../../components/SimpleBarChart';
import LineChart from '../../components/LineChart';
import SimpleRadarChart from '../../components/SimpleRadarChart';
import SimpleRadialBarChart from '../../components/SimpleRadialBarChart';
import KeyData from '../../components/keyData';
import { useUserData } from '../../services/dataService';
import { useParams } from 'react-router-dom';

function Dashboard() {
    const { idUser } = useParams();
    const { data: userData, isLoading, error } = useUserData(idUser);

    if (error) {
        console.log(error);
    }

    return isLoading ? (
        <h1 className="dashboard-header-title">En attente...</h1>
    ) : (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1 className="dashboard-header-title">
                    Bonjour <span>{userData.data.userInfos.firstName}</span>
                </h1>
                <p className="dashboard-header-text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className="dashboard-wrapper">
                <div className="dashboard-chart">
                    <Chart idUser={userData.data.id} />
                    <div className="dashboard-chart-row">
                        <LineChart idUser={userData.data.id} />
                        <SimpleRadarChart idUser={userData.data.id} />
                        <SimpleRadialBarChart score={userData.data.score || userData.data.todayScore} />
                    </div>
                </div>
                <div className="dashboard-keydata">
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
