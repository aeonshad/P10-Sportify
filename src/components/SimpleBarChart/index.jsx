import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useUserActivity } from '../../services/dataService';
import { formatActivity } from '../../services/format-service';

function Chart({ idUser }) {
    const { data: userData, isLoading, error } = useUserActivity(idUser);

    const dataFormated = isLoading ? [] : formatActivity(userData);

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

    return isLoading ? (
        <h1 className="home-header-title">En attente...</h1>
    ) : (
        <ResponsiveContainer width="100%" height={320}>
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
                <text x={40} y={39} fill="black">
                    <tspan fontSize="15">Activité quotidienne</tspan>
                </text>
                <CartesianGrid strokeDasharray="4 3" vertical={false} />
                <XAxis dataKey="day" axisLine={{ stroke: '#DEDEDE' }} tickLine={false} tick={{ fill: '#9B9EAC', fontSize: 14 }} />
                <YAxis
                    orientation="right"
                    domain={[0, 'dataMax + 10']}
                    tickLine={false}
                    tick={{ fill: '#74798C', fontSize: 14 }}
                    dx={25}
                    axisLine={{ stroke: 'none' }}
                />
                <Tooltip content={CustomTooltip} />
                <Legend
                    verticalAlign="top"
                    align="right"
                    iconType="circle"
                    iconSize={8}
                    height={47}
                    formatter={(value, entry, index) => (
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
                <Bar name="Poids (kg)" dataKey="kilogram" barSize={10} fill="#282D30" radius={[3, 3, 0, 0]} />
                <Bar name="Calories brûlées (kCal)" dataKey="calories" barSize={10} fill="#E60000" radius={[3, 3, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    );
}
export default Chart;
