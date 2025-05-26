import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface CryptoChartProps {
  data: [number, number][];
}

export default function CryptoChart({ data }: CryptoChartProps) {
  // ממיר את הנתונים לפורמט שמתאים ל-Recharts
  const chartData = data.map(([timestamp, price]) => ({
    time: new Date(timestamp).toLocaleDateString(),
    price: Number(price.toFixed(2)),
  }));

  return (
    <div style={{ width: '100%', height: 300, marginTop: '2rem' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <XAxis dataKey="time" />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
