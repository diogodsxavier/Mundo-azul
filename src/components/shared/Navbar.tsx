import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/dashboard" className="text-2xl font-bold text-[#0A2540]">
          Mundo Azul
        </Link>
        <ul className="flex gap-6">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? 'text-[#4A90E2] font-bold'
                  : 'text-gray-600'
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/animais"
              className={({ isActive }) =>
                isActive
                  ? 'text-[#4A90E2] font-bold'
                  : 'text-gray-600'
              }
            >
              Animais
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/quiz"
              className={({ isActive }) =>
                isActive
                  ? 'text-[#4A90E2] font-bold'
                  : 'text-gray-600'
              }
            >
              Quiz
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
