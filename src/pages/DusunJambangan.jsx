import React from 'react';
import JambanganImage from '../assets/jambangan.png'; // Pastikan path yang sesuai

const DusunJambangan = () => {
  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <div className="flex flex-wrap -mx-4">
        
        {/* Bagian Kiri */}
        <div className="w-full md:w-3/4 px-4">
          <img src={JambanganImage} alt="Dusun Jambangan" className="w-full h-auto mb-4" style={{ maxHeight: '400px' }} />
          <h1 className="text-3xl font-bold mb-4">Dusun Jambangan</h1>
          <p className="text-justify mb-4">
            Dusun Jambangan adalah dusun lain di Desa Latsari yang terkenal dengan keindahan alamnya dan
            tradisi lokal yang masih kental. Dusun ini sering menjadi lokasi acara-acara budaya dan festival
            tahunan. Masyarakat Dusun Jambangan sangat menjunjung tinggi nilai-nilai gotong royong, dan 
            ini tercermin dalam kehidupan sehari-hari mereka, termasuk dalam kegiatan bercocok tanam dan
            menjaga kebersihan lingkungan. Selain itu, dusun ini juga dikenal dengan keindahan sawah yang 
            hijau serta pepohonan yang rindang, membuatnya menjadi destinasi favorit bagi para wisatawan lokal 
            yang ingin menikmati suasana pedesaan yang tenang.
          </p>
          <p className="text-justify mb-4">
            Dalam beberapa tahun terakhir, Dusun Jambangan telah mengalami banyak perkembangan, terutama
            dalam bidang infrastruktur. Pembangunan jalan-jalan desa yang lebih baik dan akses yang lebih mudah 
            menuju dusun telah membantu meningkatkan kesejahteraan penduduk setempat. Selain itu, Dusun Jambangan
            juga aktif dalam berbagai kegiatan sosial dan budaya, seperti upacara adat dan pertunjukan seni tradisional, 
            yang rutin diadakan untuk mempererat hubungan antarwarga dan melestarikan warisan budaya mereka.
          </p>
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
                <td>7</td>
              </tr>
              {/* Tambahkan data lainnya sesuai kebutuhan */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DusunJambangan;
