import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Pastikan path sesuai dengan lokasi logo Anda

const Header = () => {
  const [isDusunOpen, setIsDusunOpen] = useState(false);

  const toggleDusunMenu = () => {
    setIsDusunOpen(!isDusunOpen);
  };

  return (
    <header className="fixed w-full z-10 bg-green-600 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between p-4">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Latsari Logo" className="h-11 w-18" />
          <h1 className="text-3xl font-semibold ml-2 text-white">Desa Latsari</h1>
        </Link>
        <nav className="relative">
          <ul className="flex items-center space-x-4">
            <li><Link to="/" className="hover:underline px-4 py-2 text-white">Beranda</Link></li>
            {/* Menu Dusun */}
            <li className="relative">
              <button
                onClick={toggleDusunMenu}
                className="flex items-center hover:underline px-4 py-2 text-white"
              >
                Dusun
                <svg
                  className={`w-4 h-4 ml-1 transform ${isDusunOpen ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 9.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                    className="text-white"
                  />
                </svg>
              </button>
              {isDusunOpen && (
                <ul className="absolute top-full left-0 mt-2 bg-green-800 text-white border border-green-600 rounded-lg shadow-lg">
                  <li><Link to="/dusun-guwo" className="block px-4 py-2 hover:bg-green-500">Dusun Guwo</Link></li>
                  <li><Link to="/dusun-jambangan" className="block px-4 py-2 hover:bg-green-500">Dusun Jambangan</Link></li>
                  <li><Link to="/dusun-kempreng" className="block px-4 py-2 hover:bg-green-500">Dusun Kempreng</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/contact" className="hover:underline px-4 py-2 text-white">Informasi</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
