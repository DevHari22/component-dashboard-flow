
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: '90-100', value: 15, color: '#10B981' },
  { name: '80-89', value: 30, color: '#3B82F6' },
  { name: '70-79', value: 20, color: '#F59E0B' },
  { name: '60-69', value: 30, color: '#EF4444' },
  { name: '<60', value: 5, color: '#DC2626' },
];

const ResumeScoreChart: React.FC = () => {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border">
          <p className="font-semibold">{`Score Range: ${payload[0].name}`}</p>
          <p className="text-blue-600">{`Candidates: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Resume Score Distribution</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={120}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              verticalAlign="bottom" 
              height={36}
              formatter={(value, entry) => (
                <span style={{ color: entry.color, fontWeight: 500 }}>{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="text-center mt-4">
        <div className="text-2xl font-bold text-gray-900">100</div>
        <div className="text-sm text-gray-600">Total No. of candidates</div>
      </div>
    </div>
  );
};

export default ResumeScoreChart;
