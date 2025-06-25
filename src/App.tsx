import './index.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import GalleryPage from './pages/GalleryPage';
import QuizPage from './pages/QuizPage';
import Navbar from './components/shared/Navbar';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen">
      <Navbar />
      <main className="p-6">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/animais" element={<GalleryPage />} />
            <Route path="/quiz" element={<QuizPage />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
