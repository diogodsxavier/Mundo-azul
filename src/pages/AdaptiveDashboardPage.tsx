import React from 'react';
import { useUser } from '../context/UserContext';
import AgentsDashboard from '../components/dashboard/AgentsDashboard';

const AdaptiveDashboardPage: React.FC = () => {
  const userContext = useUser();
  const user = userContext?.user;
  if (!user) return null;
  return <AgentsDashboard />;
};

export default AdaptiveDashboardPage; 