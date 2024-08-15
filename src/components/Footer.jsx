import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start px-4">
        {/* Alamat Desa */}
        <div className="mb-8 md:mb-0 md:w-1/3 lg:w-auto md:ml-8"> {/* Mengatur lebar dengan md:w-1/3 */}
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Alamat Desa</h3>
          <p className="text-gray-300 mb-2 text-sm md:text-base"> {/* Mengubah ukuran font untuk responsif */}
            Jl. Raya Desa Latsari No. 123, <br />
            Latsari, Mojowarno, Jombang Regency, <br />
            East Java, Indonesia
          </p>
        </div>

        {/* Kontak Kami */}
        <div className="mb-8 md:mb-0 md:w-1/3 lg:w-auto"> {/* Mengatur lebar dengan md:w-1/3 */}
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Kontak Kami</h3>
          <p className="mb-2 text-sm md:text-base">
            <a href="mailto:info@desakami.com" className="text-blue-400 hover:underline">info@desakami.com</a>
          </p>
          <p className="mb-4 text-sm md:text-base">+62 812 3456 7890</p>
        </div>

        {/* Sosial Media */}
        <div className="mb-8 md:mb-0 md:w-1/3 lg:w-auto md:mr-8"> {/* Mengatur lebar dengan md:w-1/3 */}
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Sosial Media</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://instagram.com/kkn2_kelompok6_desaLatsari" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-700 pt-4 mt-8">
        <p className="text-gray-400 text-center text-sm md:text-base">&copy; 2024 Profil Desa. Semua hak cipta dilindungi.</p>
      </div>
    </footer>
  );
};

export default Footer;
