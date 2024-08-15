import React, { useEffect, useState } from 'react';
import bgImage from '../assets/bg.png'; // Ganti dengan path yang sesuai
import image1 from '../assets/logo.png'; // Ganti dengan path gambar yang sesuai
import image2 from '../assets/logo.png';
import image3 from '../assets/logo.png';
import image4 from '../assets/logo.png'; // Gambar tambahan
import image5 from '../assets/struktur2.JPG'; // Gambar tambahan
import image6 from '../assets/sejarah1.JPG'; // Gambar tambahan
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Home.css'; // Pastikan Anda mengimpor file CSS

// Komponen WelcomeSection  
const WelcomeSection = () => {
  return (
    <section className="welcome-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="overlay">
        <div className="text-center text-white p-10 fade-in">
          <h2 className="text-4xl font-bold mb-4">Selamat Datang di Desa Latsari</h2>
        </div>
      </div>
    </section>
  );
};

// Komponen Bagian Profil Desa
const ProfileSection = ({ title, images, extraClass = '' }) => (
  <div className={`text-center mt-12 ${extraClass}`}>
    <h3 className="text-2xl font-semibold mb-6">{title}</h3>
    <div className="flex justify-around">
      {images.map((image, index) => (
        <div className="image-item" key={index}>
          <a href={image.link}>
            <img src={image.src} alt={`Gambar ${index + 1}`} className="w-full" />
            <div className="caption">{image.caption}</div>
            <div className="arrow">
              <FontAwesomeIcon icon={faArrowRight} size="lg" />
            </div>
          </a>
        </div>
      ))}
    </div>
  </div>
);

// Komponen Bagian Deskripsi Desa dan Wilayah
const VillageDescription = () => {
  return (
    <div className="village-description-container">
      <div className="village-description-content">
        <h3>Deskripsi Desa</h3>
        <p>
          Desa Latsari adalah sebuah desa yang terletak di Kabupaten Jombang. Desa ini memiliki
          pemandangan alam yang indah serta masyarakat yang ramah dan bergotong royong. Mayoritas
          penduduk desa ini bekerja di bidang pertanian, namun ada juga yang bekerja di sektor
          kerajinan dan jasa. Desa Latsari dikenal dengan produk unggulan seperti kerajinan anyaman
          bambu dan hasil pertanian seperti padi dan jagung.
        </p>
        <div className="village-description-separator"></div> {/* Menambahkan jarak di sini */}
        <h3>Wilayah</h3>
        <p>
          Wilayah Desa Latsari terbagi menjadi tiga dusun, yaitu Dusun Guwo, Dusun Jambangan dan 
          Dusun Kempreng. Desa Latsari berbatasan dengan Dusun Sidoluwih di sebelah utara. Lalu 
          di sebelaah timur, Desa Latsari berbatasan dengan Dusun Kayen dan Desa Mojotengah dalam 
          wilayah Kecamatan Bareng. Kemudian di sebelah selatan, Desa Latsari berbatasan dengan 
          Desa Tebel dalam wilayah Kecamatan Bareng. Sedangkan di sebelah barat, Desa Latsari 
          berbatasan dengan Dusun Kedawung Ngoro dan Desa Karanglo dalam wilayah Kecamatan Mojowarno.
        </p>
      </div>
      <div className="village-description-right">
        <table className="info-table">
          <tbody>
            <tr>
              <td>Provinsi</td>
              <td>Jawa Timur</td>
            </tr>
            <tr>
              <td>Kabupaten</td>
              <td>Jombang</td>
            </tr>
            <tr>
              <td>Kecamatan</td>
              <td>Mojowarno</td>
            </tr>
            <tr>
              <td>Kode Pos</td>
              <td>61475</td>
            </tr>
            <tr>
              <td>Kode Kemendagri</td>
              <td>35.17.07.2003</td>
            </tr>
            <tr>
              <td>Luas Wilayah</td>
              <td>221,20 HA</td>
            </tr><tr>
              <td>Luas Pertanian</td>
              <td>156,7 HA</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Komponen Utama Home
const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const topImages = [
    { src: image4, link: '/visi-misi', caption: 'Visi Misi' },
    { src: image5, link: '/struktur-organisasi', caption: 'Struktur Organisasi' },
    { src: image6, link: '/sejarah-desa', caption: 'Sejarah Desa' },
  ];
  

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <div className="pt-20">
          <WelcomeSection />
          <div className="top-images-wrapper top-images-margin">
            <ProfileSection title="" images={topImages} />
          </div>
          <VillageDescription />
        </div>
      </div>
    </div>
  );
};

export default Home;
