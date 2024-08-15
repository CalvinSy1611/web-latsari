import React from 'react';

const SejarahDesa = () => {
  return (
    <div className="container mx-auto p-4 pt-24">
      <h1 className="text-3xl font-bold mb-8">Sejarah Desa</h1>
      <div className="flex flex-wrap -mx-4">
        {/* Bagian Kiri - Teks */}
        <div className="w-full md:w-2/3 px-4">
          <p className="mb-4 text-justify">
            Desa Latsari berdiri pada tahun 1700. Berdasarkan cerita dari para sesepuh Desa Latsari, 
            bahwa konon nama Latsari berasal dari cerita rakyat dimana dikisahkan ada seorang sakti mandraguna 
            yang bernama mbah Singo Karso datang ke kampung tersebut yang dimana kampungnya waktu itu masih 
            banyak ditemukan hutan (semak belukar) dan angker (wingit) sedangkan kampung-kampung di sekitarnya 
            sudah ramai dihuni oleh penduduk yang melakukan aktivitas pembangunan dan perekonomian pada tahun itu.
            Sehingga mbah Singo Karso membersihkan kampung itu dari semak belukar dan terkesan wingit agar kampung 
            tersebut bisa dihuni oleh penduduk. Karena terlambatnya kampung itu dihuni oleh banyak penduduk dan 
            tertinggalnya dari kampung-kampung sekitar, maka mbah Singo Karso berucap bahwa ketika ramai nanti, 
            kampung (desa) itu diberi nama Latsari yang artinya telat sehari dalam hal pembangunan dan perekonomian 
            pada tahun itu. Pada tahun tersebut, masih belum terbentuk pemerintahan desa.
          </p>
          <p className="mb-4 text-justify">
            Sebagian besar wilayah desa persawahan yang (sekitar90%) merupakan persawahan yang kebanyak petani menanam 
            padi dimusim penghujan dan jagung, ketela dimusim kemarau dan juga tanaman Palawijo. Mayoritas penduduk desa 
            beragama Islam dan ada juga yang beragama Kristen
          </p>
        </div>
        
        {/* Bagian Kanan - Tabel */}
        <div className="w-full md:w-1/3 px-4">
          <table className="info-table w-full bg-gray-100 rounded-lg shadow-lg">
            <tbody>
              <tr>
                <td className="border px-4 py-2 font-bold">NO</td>
                <td className="border px-4 py-2 font-bold">NAMA</td>
                <td className="border px-4 py-2 font-bold">MASA JABATAN</td>
                <td className="border px-4 py-2 font-bold">KETERANGAN</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">RAKUS</td>
                <td className="border px-4 py-2">10 TAHUN</td>
                <td className="border px-4 py-2">KepalaDesa</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">2</td>
                <td className="border px-4 py-2">SAREMBO</td>
                <td className="border px-4 py-2">15 TAHUN</td>
                <td className="border px-4 py-2">KepalaDesa</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">3</td>
                <td className="border px-4 py-2">MARTO</td>
                <td className="border px-4 py-2">10 TAHUN</td>
                <td className="border px-4 py-2">KepalaDesa</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">4</td>
                <td className="border px-4 py-2">KARTEKER</td>
                <td className="border px-4 py-2">15 TAHUN</td>
                <td className="border px-4 py-2">KepalaDesa</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">5</td>
                <td className="border px-4 py-2">ISMANU</td>
                <td className="border px-4 py-2">15 TAHUN</td>
                <td className="border px-4 py-2">KepalaDesa</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">6</td>
                <td className="border px-4 py-2">NURA'I</td>
                <td className="border px-4 py-2">1962-2002</td>
                <td className="border px-4 py-2">KepalaDesa</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">7</td>
                <td className="border px-4 py-2">ABD CHOLIQ</td>
                <td className="border px-4 py-2">2002-2007</td>
                <td className="border px-4 py-2">KepalaDesa</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">8</td>
                <td className="border px-4 py-2">ABD WAHID</td>
                <td className="border px-4 py-2">2007-2013</td>
                <td className="border px-4 py-2">KepalaDesa</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">9</td>
                <td className="border px-4 py-2">MUSLIKAN</td>
                <td className="border px-4 py-2">2013-2019</td>
                <td className="border px-4 py-2">KepalaDesa</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">10</td>
                <td className="border px-4 py-2">MUSLIKAN</td>
                <td className="border px-4 py-2">2019-2025</td>
                <td className="border px-4 py-2">KepalaDesa</td>
              </tr>
              {/* Tambahkan data lain sesuai kebutuhan */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SejarahDesa;
