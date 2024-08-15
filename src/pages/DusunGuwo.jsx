import React from 'react';
import GuwoImage from '../assets/guwo.png'; // Ganti dengan path yang sesuai
import SDNImage from '../assets/SD.png'; // Ganti dengan path yang sesuai

const DusunGuwo = () => {
  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <div className="flex flex-wrap -mx-4">
        {/* Bagian Kiri */}
        <div className="w-full md:w-3/4 px-4">
          <img src={GuwoImage} alt="Dusun Guwo" className="w-full h-auto mb-4" style={{ maxHeight: '400px' }} />
          <h1 className="text-3xl font-bold mb-4">Dusun Guwo</h1>
          <p className="text-justify mb-4">
            Dusun Guwo dinamai dan ditandai dengan keberadaan sembilan gua di dalam wilayahnya. 
            Gua-gua ini terletak di sekitar Jalan Raya Latsari. Keberadaan gua-gua saling terhubung 
            satu sama lain melalui sebuah jalan buatan berukuran sempit di bawah tanah. Jalan-jalan 
            sempit ini menurut tradisi lisan penduduk Desa Latsari dibangun oleh Maling Cluring ketika 
            menculik seorang putri dari Kerajaan Bajang yang pernah didirikan di bagian barat Desa Latsari. 
            Pembangunan jalan sempit merupakan usaha dari Maling Cluring selama menculik putri dari Kerajaan 
            Bajang dan menghindari kejaran dari pasukan Kerajaan Bajang.
          </p>
          
          {/* Paragraf tentang SDN Latsari dengan Gambar di Kiri */}
          <div className="mb-4 flex flex-col lg:flex-row">
            <img src={SDNImage} alt="SDN Latsari" className="w-full max-w-sm object-cover lg:w-1/3 lg:mr-4 mb-4 lg:mb-0" />
            <p className="text-justify flex-1">
              SDN Latsari yang berada di Dusun Guwo merupakan salah satu lembaga pendidikan yang penting di wilayah ini. 
              Sekolah ini memiliki fasilitas yang memadai untuk mendukung kegiatan belajar mengajar. 
              SDN Latsari juga dikenal dengan berbagai kegiatan ekstrakurikuler yang melibatkan siswa dalam berbagai bidang, 
              mulai dari olahraga hingga kesenian. Letaknya yang strategis di pusat dusun membuat SDN Latsari mudah dijangkau 
              oleh warga sekitar, menjadikannya sebagai salah satu sekolah favorit di wilayah Desa Latsari.
            </p>
          </div>
        </div>

        {/* Bagian Kanan */}
        <div className="w-full md:w-1/4 px-4 flex flex-col justify-center">
          <table className="info-table w-full">
            <tbody>
              <tr>
                <td>RW</td>
                <td>RT</td>
              </tr>
              <tr>
                <td>2</td>
                <td>8</td>
              </tr>
              {/* Tambahkan data lainnya sesuai kebutuhan */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DusunGuwo;
