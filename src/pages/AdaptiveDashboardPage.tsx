import React from 'react';
import { useUser } from '../context/UserContext';
import AgentsDashboard from '../components/dashboard/AgentsDashboard';

const AdaptiveDashboardPage: React.FC = () => {
  const { user } = useUser();
  if (!user) return null;
  return <AgentsDashboard />;
};

export default AdaptiveDashboardPage; 