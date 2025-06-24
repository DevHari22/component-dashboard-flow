
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const data = [
  { name: '<60', value: 60 },
  { name: '60-69', value: 80 },
  { name: '70-79', value: 40 },
  { name: '80-89', value: 90 },
  { name: '90-100', value: 30 },
];

const WeightedGraph: React.FC = () => {
  const [selectedParameter, setSelectedParameter] = useState('experience');

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border">
          <p className="font-semibold">{`Score Range: ${label}`}</p>
          <p className="text-blue-600">{`No. of Candidates: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Weighted Graph</h3>
        <Select value={selectedParameter} onValueChange={setSelectedParameter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select Parameter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="experience">Experience</SelectItem>
            <SelectItem value="skills">Skills</SelectItem>
            <SelectItem value="education">Education</SelectItem>
            <SelectItem value="location">Location</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
              label={{ value: 'No. of Candidates', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="value" 
              fill="#3B82F6" 
              radius={[4, 4, 0, 0]}
              className="hover:opacity-80 transition-opacity duration-200"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeightedGraph;
