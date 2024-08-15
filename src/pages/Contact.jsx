import React from 'react';
import Sawah1Image from '../assets/sawah1.png'; // Ganti dengan path yang sesuai
import Sawah2Image from '../assets/sawah2.png'; // Ganti dengan path yang sesuai

const Contact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row">
        
        {/* Informasi Tambahan di Kiri */}
        <div className="flex-1 p-4 lg:w-3/4 lg:mr-8">
          
          <h3 className="text-2xl font-semibold mb-4 text-center">Informasi Tambahan</h3>
          
          {/* Paragraf Pertama dengan Gambar di Kiri */}
          <div className="mb-4 flex flex-col lg:flex-row">
            <img src={Sawah1Image} alt="Sawah di Desa Latsari" className="w-full max-w-sm object-cover lg:w-1/3 lg:mr-4 mb-4 lg:mb-0" />
            <p className="text-justify flex-1 mb-14">
              Mayoritas mata pencarian penduduk Desa Latsari bergerak di bidang pertanian. Permasalahan yang sering muncul 
              berkaitan dengan mata pencaharian penduduk adalah tersedianya lapangan pekerjaan yang kurang memadai dengan 
              perkembangan penduduk sebagaimana tertuang dalam perencanaan pembangunan daerah Kabupaten Jombang. 
              Hal lain yang perlu diperhatikan dalam pembangunan desa adalah melakukan usaha perluasan kesempatan kerja dengan 
              melakukan penguatan usaha kecil pemberian kredit sebagai modal untuk pengembangan usaha khususnya di bidang perdagangan.
              Tingkat angka kemiskinan Desa Latsari yang masih tinggi menjadikan Desa Latsari harus bisa mencari peluang lain yang 
              bisa menunjang peningkatan taraf ekonomi bagi masyarakat. Banyaknya kegiatan Ormas di Desa Latsari, seperti Remaja Masjid, 
              Karang Taruna, Jamiyah Yasin, Tahlil, PKK, Dharmawanita, Posyandu, dan Kelompok Arisan merupakan aset desa yang bermanfaat 
              untuk dijadikan media penyampaian informasi dalam setiap proses pembangunan desa pada masyarakat.
            </p>
          </div>
          
          {/* Paragraf Kedua dengan Gambar di Kanan */}
          <div className="mb-4 flex flex-col lg:flex-row-reverse">
            <img src={Sawah2Image} alt="Sawah di Desa Latsari" className="w-full max-w-sm object-cover lg:w-1/3 lg:ml-4 mb-4 lg:mb-0" />
            <p className="text-justify flex-1 mb-4">
              Menurut catatan monografi Desa tahun 2019, 
              jumlah kepala keluarga yang bekerja di bidang pertanian sebanyak 467 orang, sedangkan yang tidak teridentifikasi sebanyak 21 orang, 
              sedangkan sisanya bekerja di bidang lain seperti pengusaha, buruh, pedagang, pengangkutan, dan sebagainya. Keberadaan Pertokoan dan 
              Keberadaan pasar tradisional ikut berperan di dalam roda perekonomian di Desa Latsari Berbagai lembaga keuangan perbankkan sebagai 
              wadah penambahan permodalan bagi masyarakat yang berakibat langsung dengan meningkatnya kesejahteraan masyarakat dengan harapan meningkatkan pendapatan.
            </p>
          </div>
        </div>

        {/* Daftar Prasarana di Kanan */}
        <div className="flex-none w-full lg:w-1/4 p-4 lg:ml-auto lg:mr-0">
          <h4 className="text-xl font-semibold mb-2 text-center">Prasarana Desa</h4>

          {/* Prasarana Kesehatan */}
          <h5 className="text-lg font-semibold mt-4 mb-2">Prasarana Kesehatan</h5>
          <ul className="list-disc list-inside text-left mb-4">
            <li>Posyandu (3 unit)</li>
            <li>Lansia (3 unit)</li>
            <li>Posbindu (2 unit)</li>
            <li>Polindes (1 unit)</li>
            <li>Bidan Desa (1 orang)</li>
          </ul>

          {/* Prasarana Pendidikan */}
          <h5 className="text-lg font-semibold mt-4 mb-2">Prasarana Pendidikan</h5>
          <ul className="list-disc list-inside text-left mb-4">
            <li>PAUD dan TK (2 unit)</li>
            <li>SD/MI (2 unit)</li>
            <li>TPA/TPQ (9 unit)</li>
          </ul>

          {/* Tempat Ibadah */}
          <h5 className="text-lg font-semibold mt-4 mb-2">Tempat Ibadah</h5>
          <ul className="list-disc list-inside text-left mb-6">
            <li>Masjid (3 unit)</li>
            <li>Musholla (14 unit)</li>
          </ul>

          {/* Luas dan Penggunaan Lahan */}
          <h5 className="text-lg font-semibold mt-4 mb-2">Luas dan Penggunaan Lahan</h5>
          
          {/* Tabel Prasarana */}
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">No</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Penggunaan Lahan</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Luas (Ha)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">Tanah Sawah</td>
                <td className="border border-gray-300 px-4 py-2">120 Ha</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">2</td>
                <td className="border border-gray-300 px-4 py-2">Tanah Kering</td>
                <td className="border border-gray-300 px-4 py-2">86 Ha</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">3</td>
                <td className="border border-gray-300 px-4 py-2">Tanah Pekarangan</td>
                <td className="border border-gray-300 px-4 py-2">15 Ha</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2">Jumlah</td>
                <td className="border border-gray-300 px-4 py-2">221 Ha</td>
              </tr>
              {/* Tambahkan data lainnya sesuai kebutuhan */}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Contact;
