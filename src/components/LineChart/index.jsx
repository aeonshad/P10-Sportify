import { LineChart, XAxis, Tooltip, Line, ResponsiveContainer } from 'recharts';
import { useUserAverageSession } from '../../services/dataService';
import { formatSessions } from '../../services/format-service';

function LineChartGraph({ idUser }) {
    const { data: userData, isLoading, error } = useUserAverageSession(idUser);
    const dataFormated = isLoading ? [] : formatSessions(userData);

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

    return isLoading ? (
        <h1 className="home-header-title">En attente...</h1>
    ) : (
        <div className="chart-container">
            <ResponsiveContainer width="100%" height={263}>
                <LineChart className="linechart" width={258} height={263} data={userData.data.sessions} margin={{ top: 60, right: 30, left: 20, bottom: 10 }}>
                    <text x="0%" y="20%" textAnchor="start" dominantBaseline="middle">
                        <tspan fontSize={15} fill="#FFFFFF90" x="12%" dy="-1em">
                            Durées moyennes
                        </tspan>
                        <tspan fontSize={15} fill="#FFFFFF90" x="12%" dy="1.5em">
                            des sessions
                        </tspan>
                    </text>
                    <XAxis dataKey="day" axisLine={{ stroke: 'none' }} tickLine={false} tick={{ fill: '#FFFFFF90', fontSize: 12 }} />
                    <Tooltip content={CustomTooltip} />
                    <Line type="bumpX" dataKey="sessionLength" stroke="#FFFFFF90" strokeWidth={2} dot={false} activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
export default LineChartGraph;
