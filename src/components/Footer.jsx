import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start">
        {/* Alamat Desa */}
        <div className="mb-8 lg:mb-0 lg:ml-8"> {/* Menambahkan margin kiri (ml-8) */}
          <h3 className="text-2xl font-semibold mb-4">Alamat Desa</h3>
          <p className="text-gray-300 mb-2">
            Jl. Raya Desa Latsari No. 123, <br />
            Latsari, Mojowarno, Jombang Regency, <br />
            East Java, Indonesia
          </p>
        </div>

        {/* Kontak Kami */}
        <div className="mb-8 lg:mb-0">
          <h3 className="text-2xl font-semibold mb-4">Kontak Kami</h3>
          <p className="mb-2">
            <a href="mailto:info@desakami.com" className="text-blue-400 hover:underline">info@desakami.com</a>
          </p>
          <p className="mb-4">+62 812 3456 7890</p>
        </div>

        {/* Sosial Media */}
        <div className="mb-8 lg:mb-0 lg:mr-8"> {/* Menambahkan margin kanan (mr-8) */}
          <h3 className="text-2xl font-semibold mb-4">Sosial Media</h3>
          <div className="flex justify-center space-x-4">
            <a href="https://facebook.com/desakami" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://twitter.com/desakami" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://instagram.com/kkn2_kelompok6_desaLatsari" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-700 pt-4">
        <p className="text-gray-400">&copy; 2024 Profil Desa. Semua hak cipta dilindungi.</p>
      </div>
    </footer>
  );
};

export default Footer;
