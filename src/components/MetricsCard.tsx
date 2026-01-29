import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { MetricsCardProps } from '../types';

const MetricsCard: React.FC<MetricsCardProps> = ({ title, value, unit, icon, trend }) => {
  const getTrendIcon = () => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-red-500" />;
      default: return <Minus className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-gray-100 rounded-xl">{icon}</div>
        {getTrendIcon()}
      </div>
      <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-bold text-gray-800">{value}</span>
        <span className="text-gray-400 text-sm">{unit}</span>
      </div>
    </div>
  );
};

export default MetricsCard;
