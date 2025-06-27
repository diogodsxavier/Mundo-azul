import './index.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import GalleryPage from './pages/GalleryPage';
import QuizPage from './pages/QuizPage';
import Navbar from './components/shared/Navbar';
import { AnimatePresence } from 'framer-motion';
import { useUser } from './context/UserContext';
import WelcomeModal from './components/shared/WelcomeModal';
import AdaptiveDashboardPage from './pages/AdaptiveDashboardPage';

function App() {
  const userContext = useUser();
  const user = userContext?.user;
  const login = userContext?.login;

  if (!user) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#F8F9FA] z-50">
        {login && <WelcomeModal onSubmit={login} />}
      </div>
    );
  }

  return (
    <div className="bg-[#F8F9FA] min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<AdaptiveDashboardPage />} />
            <Route path="/animais" element={<GalleryPage />} />
            <Route path="/quiz" element={<QuizPage />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
