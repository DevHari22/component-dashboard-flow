
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, Users, TrendingUp } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-8">
          {/* Hero Section */}
          <div className="space-y-6">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              <BarChart3 className="w-4 h-4 mr-2" />
              Recruitment Analytics Platform
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Welcome to Your
              <span className="text-blue-600 block">HR Dashboard</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamline your recruitment process with powerful analytics, candidate tracking, 
              and data-driven insights to make better hiring decisions.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics Dashboard</h3>
              <p className="text-gray-600">
                Comprehensive overview of your recruitment metrics with interactive charts and graphs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Candidate Management</h3>
              <p className="text-gray-600">
                Efficiently manage and track all candidates throughout your recruitment process.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Insights</h3>
              <p className="text-gray-600">
                Get detailed insights into resume scores and weighted parameters for better decisions.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              onClick={() => navigate('/dashboard')}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Access Dashboard
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            Start analyzing your recruitment data in seconds
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
