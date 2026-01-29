import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { HealthChartsProps } from '../types';

const HealthCharts: React.FC<HealthChartsProps> = ({ data }) => {
  const mockChartData = [
    { time: '6:00', heartRate: 65, oxygen: 97 },
    { time: '9:00', heartRate: 72, oxygen: 98 },
    { time: '12:00', heartRate: 78, oxygen: 97 },
    { time: '15:00', heartRate: 75, oxygen: 98 },
    { time: '18:00', heartRate: 70, oxygen: 99 },
    { time: '21:00', heartRate: 68, oxygen: 98 },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-6">Health Trends</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={mockChartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="time" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip />
            <Line type="monotone" dataKey="heartRate" stroke="#ef4444" strokeWidth={2} dot={{ fill: '#ef4444' }} name="Heart Rate" />
            <Line type="monotone" dataKey="oxygen" stroke="#3b82f6" strokeWidth={2} dot={{ fill: '#3b82f6' }} name="Blood Oxygen" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HealthCharts;
