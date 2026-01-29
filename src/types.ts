export type ViewMode = 'patient' | 'provider';

export interface HealthData {
  heartRate: number;
  bloodOxygen: number;
  temperature: number;
  hydration: number;
  alignerWearTime: number;
  alignerStatus: 'active' | 'inactive' | 'offline';
}

export interface MetricsCardProps {
  title: string;
  value: number;
  unit: string;
  icon: React.ReactNode;
  trend: 'up' | 'down' | 'stable';
}

export interface HealthChartsProps {
  data: HealthData;
}
