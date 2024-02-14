import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { useUserPerformance } from '../../services/dataService';
import { formatPerformances } from '../../services/format-service';

function SimpleRadarChart({ idUser }) {
    const { data: userData, isLoading, error } = useUserPerformance(idUser);
    const dataFormated = isLoading ? [] : formatPerformances(userData);

    if (error) {
        console.log(error);
    }

    return isLoading ? (
        <h1 className="home-header-title">En attente...</h1>
    ) : (
        <div className="chart-container">
            <ResponsiveContainer width="100%" height={263}>
                <RadarChart margin={{ top: 5, right: 10, bottom: 5, left: 20 }} className="radarchart" width={258} height={263} data={dataFormated}>
                    <PolarGrid gridType="polygon" radialLines={false} innerRadius={100} />
                    <PolarAngleAxis dataKey="kind" tick={{ fill: '#FFFFFF', fontSize: 8 }} tickLine={false} />
                    <PolarRadiusAxis domain={[0, 'auto']} tick={false} axisLine={false} />
                    <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default SimpleRadarChart;
