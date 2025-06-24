
import React, { useState } from 'react';
import { Users, UserCheck, Clock, UserX } from 'lucide-react';
import StatsCard from '@/components/StatsCard';
import ResumeScoreChart from '@/components/ResumeScoreChart';
import WeightedGraph from '@/components/WeightedGraph';
import CandidateList from '@/components/CandidateList';
import { Button } from '@/components/ui/button';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'candidates'>('dashboard');

  const statsData = [
    {
      title: 'Total Resumes Submitted',
      value: 100,
      icon: Users,
      color: 'blue' as const,
      trend: 12,
    },
    {
      title: 'No. of Resumes Shortlisted',
      value: 100,
      icon: UserCheck,
      color: 'green' as const,
      trend: 8,
    },
    {
      title: 'No. of Resumes in Hold',
      value: 100,
      icon: Clock,
      color: 'orange' as const,
      trend: -3,
    },
    {
      title: 'No. of Resumes Rejected',
      value: 100,
      icon: UserX,
      color: 'red' as const,
      trend: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 text-white px-3 py-1 rounded-lg font-semibold">
                envtec
              </div>
              <div className="text-gray-400">|</div>
              <h1 className="text-xl font-semibold text-gray-900">Job Summary - JD001</h1>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                1440 × 71
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Search By Job ID</option>
              </select>
              <div className="flex items-center space-x-2 text-gray-600">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <Button
              variant={activeTab === 'dashboard' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('dashboard')}
              className={`border-b-2 rounded-none ${
                activeTab === 'dashboard' 
                  ? 'border-blue-600 text-blue-600 bg-blue-50' 
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              📊 Dashboard
            </Button>
            <Button
              variant={activeTab === 'candidates' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('candidates')}
              className={`border-b-2 rounded-none ${
                activeTab === 'candidates' 
                  ? 'border-blue-600 text-blue-600 bg-blue-50' 
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              📋 Candidate List
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' ? (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statsData.map((stat, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <StatsCard {...stat} />
                </div>
              ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
                <ResumeScoreChart />
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '500ms' }}>
                <WeightedGraph />
              </div>
            </div>
          </div>
        ) : (
          <div className="animate-fade-in">
            <CandidateList />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
