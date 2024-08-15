import React from 'react';
import KemprengImage from '../assets/kempreng.png'; // Ganti dengan path yang sesuai
import WalisongoImage from '../assets/MI.png'; // Ganti dengan path yang sesuai

const DusunKempreng = () => {
  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <div className="flex flex-wrap -mx-4">
        {/* Bagian Kiri */}
        <div className="w-full md:w-3/4 px-4">
          <img src={KemprengImage} alt="Dusun Kempreng" className="w-full h-auto mb-4" style={{ maxHeight: '400px' }} />
          <h1 className="text-3xl font-bold mb-4">Dusun Kempreng</h1>
          <p className="text-justify mb-4">
            Dusun Kempreng adalah salah satu dusun yang terletak di Desa Latsari, dan dikenal dengan kekayaan alamnya,
            terutama dalam bidang pertanian dan perkebunan buah-buahan. Masyarakat Dusun Kempreng sebagian besar
            bekerja sebagai petani, dan hasil panen dari pertanian mereka tidak hanya memenuhi kebutuhan lokal
            tetapi juga dipasarkan ke wilayah lain di Kabupaten Jombang. Setiap tahun, Dusun Kempreng mengadakan
            pameran hasil pertanian, yang menjadi ajang untuk mempromosikan produk-produk lokal kepada para pembeli
            dari luar daerah. Selain itu, dusun ini juga memiliki potensi wisata agro yang menarik pengunjung
            untuk merasakan pengalaman petik buah langsung dari kebunnya. Kehidupan di Dusun Kempreng sangat erat
            dengan budaya gotong royong, di mana masyarakat selalu bekerja sama dalam setiap kegiatan desa.
          </p>

          {/* Paragraf tentang MI Walisongo */}
          <div className="mb-4 flex flex-col lg:flex-row">
            <img src={WalisongoImage} alt="MI Walisongo" className="w-full max-w-sm object-cover lg:w-1/3 lg:mr-4 mb-4 lg:mb-0" />
            <p className="text-justify flex-1">
              Di Dusun Kempreng juga terdapat sebuah lembaga pendidikan yang cukup dikenal, yaitu MI Walisongo.
              MI Walisongo adalah madrasah ibtidaiyah yang telah beroperasi selama puluhan tahun dan telah melahirkan
              banyak alumni yang berkontribusi di berbagai bidang. Sekolah ini tidak hanya fokus pada pendidikan
              akademis, tetapi juga mengajarkan nilai-nilai moral dan agama yang kuat kepada para siswanya.
              Dengan fasilitas yang memadai dan tenaga pengajar yang kompeten, MI Walisongo terus berusaha untuk
              meningkatkan mutu pendidikan di Dusun Kempreng. Selain itu, sekolah ini juga sering mengadakan kegiatan
              sosial dan keagamaan yang melibatkan seluruh warga dusun, sehingga menjadi pusat kegiatan masyarakat
              di bidang pendidikan dan keagamaan.
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
                <td>1</td>
                <td>4</td>
              </tr>
              {/* Tambahkan data lainnya sesuai kebutuhan */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DusunKempreng;
