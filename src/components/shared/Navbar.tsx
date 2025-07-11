import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md relative">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/dashboard" className="text-[#0A2540]">
          <h1 className="text-xl md:text-2xl">
            <span className="font-bold">Mundo Azul</span>
            <span className="hidden sm:inline font-normal"> - Explorando os Oceanos</span>
          </h1>
        </Link>
        
        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? 'text-[#4A90E2] font-bold' : 'text-gray-600'
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/animais"
              className={({ isActive }) =>
                isActive ? 'text-[#4A90E2] font-bold' : 'text-gray-600'
              }
            >
              Animais
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/jogos"
              className={({ isActive }) =>
                isActive ? 'text-[#4A90E2] font-bold' : 'text-gray-600'
              }
            >
              Jogos
            </NavLink>
          </li>
        </ul>
        {/* Botão Hambúrguer Mobile */}
        <button
          className="md:hidden p-2 rounded focus:outline-none"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Abrir menu"
        >
          <Menu size={28} />
        </button>
      </div>
      {/* Menu Mobile Dropdown */}
      <div className={`md:hidden absolute top-16 left-0 w-full bg-white shadow-md z-50 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col gap-4 p-4">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? 'text-[#4A90E2] font-bold' : 'text-gray-600'
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/animais"
              className={({ isActive }) =>
                isActive ? 'text-[#4A90E2] font-bold' : 'text-gray-600'
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Animais
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/jogos"
              className={({ isActive }) =>
                isActive ? 'text-[#4A90E2] font-bold' : 'text-gray-600'
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Jogos
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
