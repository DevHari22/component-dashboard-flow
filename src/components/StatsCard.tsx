
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  color: 'blue' | 'green' | 'orange' | 'red';
  trend?: number;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon: Icon, color, trend }) => {
  const colorClasses = {
    blue: 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200',
    green: 'bg-gradient-to-br from-green-50 to-green-100 border-green-200',
    orange: 'bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200',
    red: 'bg-gradient-to-br from-red-50 to-red-100 border-red-200',
  };

  const iconClasses = {
    blue: 'bg-blue-500 text-white',
    green: 'bg-green-500 text-white',
    orange: 'bg-orange-500 text-white',
    red: 'bg-red-500 text-white',
  };

  return (
    <div className={`${colorClasses[color]} p-6 rounded-xl border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
      <div className="flex items-center justify-between mb-4">
        <div className={`${iconClasses[color]} p-3 rounded-lg`}>
          <Icon size={24} />
        </div>
        {trend && (
          <span className={`text-sm font-medium ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {trend > 0 ? '+' : ''}{trend}%
          </span>
        )}
      </div>
      <div className="space-y-1">
        <p className="text-gray-600 text-sm font-medium">{title}</p>
        <p className="text-3xl font-bold text-gray-900">{value.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default StatsCard;
