import React, { useState } from 'react';
import { Activity, Heart, Thermometer, Droplets, User, Stethoscope } from 'lucide-react';
import MetricsCard from './components/MetricsCard';
import HealthCharts from './components/HealthCharts';
import { HealthData, ViewMode } from './types';

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('patient');
  const [activeTab, setActiveTab] = useState<'overview' | 'aligner' | 'healthkit'>('overview');
  const [isConnected, setIsConnected] = useState(false);

  const mockHealthData: HealthData = {
    heartRate: 72,
    bloodOxygen: 98,
    temperature: 36.6,
    hydration: 85,
    alignerWearTime: 22,
    alignerStatus: 'active'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100">
      <header className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-4 shadow-lg">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center gap-3">
            <Activity className="w-8 h-8" />
            <h1 className="text-2xl font-bold">WITO Health</h1>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('patient')}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
                viewMode === 'patient' ? 'bg-white text-cyan-600' : 'bg-cyan-500 hover:bg-cyan-400'
              }`}
            >
              <User className="w-4 h-4" /> Patient View
            </button>
            <button
              onClick={() => setViewMode('provider')}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
                viewMode === 'provider' ? 'bg-white text-cyan-600' : 'bg-cyan-500 hover:bg-cyan-400'
              }`}
            >
              <Stethoscope className="w-4 h-4" /> Provider View
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">My Dashboard</h2>
          <p className="text-gray-600">Live monitoring of your intraoral and biometric sensors.</p>
        </section>

        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setIsConnected(!isConnected)}
            className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-cyan-500 text-cyan-600 rounded-xl hover:bg-cyan-50 transition-all"
          >
            <Heart className="w-5 h-5" /> Connect Apple Health
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-cyan-600 text-white rounded-xl hover:bg-cyan-700 transition-all">
            <Activity className="w-5 h-5" /> Pair Aligner
          </button>
        </div>

        <div className="flex gap-2 mb-6 border-b border-gray-200">
          {(['overview', 'aligner', 'healthkit'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium transition-all ${
                activeTab === tab
                  ? 'text-cyan-600 border-b-2 border-cyan-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <MetricsCard
            title="Heart Rate"
            value={mockHealthData.heartRate}
            unit="BPM"
            icon={<Heart className="w-6 h-6 text-red-500" />}
            trend="stable"
          />
          <MetricsCard
            title="Blood Oxygen"
            value={mockHealthData.bloodOxygen}
            unit="%"
            icon={<Droplets className="w-6 h-6 text-blue-500" />}
            trend="up"
          />
          <MetricsCard
            title="Temperature"
            value={mockHealthData.temperature}
            unit="°C"
            icon={<Thermometer className="w-6 h-6 text-orange-500" />}
            trend="stable"
          />
          <MetricsCard
            title="Aligner Time"
            value={mockHealthData.alignerWearTime}
            unit="hrs"
            icon={<Activity className="w-6 h-6 text-green-500" />}
            trend="up"
          />
        </div>

        <HealthCharts data={mockHealthData} />
      </main>
    </div>
  );
};

export default App;
