import React from 'react';
import StrukturOrganisasiImage from '../assets/Susunan.png'; // Ganti dengan path yang sesuai

const StrukturOrganisasi = () => {
  return (
    <div className="container mx-auto p-4 pt-24">
      <h1 className="text-3xl font-bold mb-4">Struktur Organisasi</h1>
      <div className="flex justify-center">
        <img src={StrukturOrganisasiImage} alt="Struktur Organisasi Desa Latsari" className="w-full max-w-3xl"/>
      </div>
    </div>
  );
};

export default StrukturOrganisasi;
