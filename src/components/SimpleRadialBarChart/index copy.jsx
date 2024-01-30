import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

function SimpleRadialBarChart({ score }) {
    const userSession = [{ score: score }];
    return (
        <div className="chart-container">
            <ResponsiveContainer width="100%" height={263}>
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
                    <text x="15%" y="15%" textAnchor="start" dominantBaseline="middle">
                        Score
                    </text>
                    <RadialBar name="score" dataKey="score" stroke-linejoin="round" fill="red" cornerRadius={100} />
                </RadialBarChart>
                <div className="radialchart-circle" />
                <div className="radialchart-circle-content">
                    <p className="radialchart-circle-content-title">{`${userSession[0].score * 100}%`}</p>
                    <p className="radialchart-circle-content-text">de votre objectif</p>
                </div>
            </ResponsiveContainer>
        </div>
    );
}
export default SimpleRadialBarChart;
