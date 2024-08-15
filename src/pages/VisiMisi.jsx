import React from 'react';

const VisiMisi = () => {
  return (
    <div className="container mx-auto p-4 pt-24">
      <h1 className="text-3xl font-bold mb-4">Visi dan Misi</h1>
      
      {/* Penjelasan Umum Visi dan Misi */}
      <p className="mb-4 text-justify">
        Proses penyusunan RPJM Desa Latsari sebagai pedoman program kerja pemerintah Desa Latsari ini 
        dilakukan oleh lembaga-lembaga tingkat Desa dan seluruh warga masyarakat Latsari maupun para pihak 
        yang berkepentingan. RPJM Desa adalah pedoman program kerja untuk masa 6 (enam) tahun yang merupakan 
        turunan dari sebuah cita-cita yang ingin dicapai di masa depan oleh segenap warga masyarakat Desa Latsari. 
      </p>
      
      {/* Penjelasan Visi */}
      <p className="mb-4 text-justify">
        Visi adalah rumusan umum mengenai keadaan yang dinginkan pada akhir periode penyelenggaraan pemerintahan desa. 
        Visi merupakan gambaran tentang kondisi ideal yang dinginkan atau yang dicita- citakan oleh Pemerintah Desa masa 
        yang akan datang, visi juga merupakan alat bagi Pemerintah Desa dan pelaku pembangunan lainnya melihat, menilai 
        atau member predikat terhadap kondisi Desa yang dinginkan. Ada pun visi Desa Latsari adalah sebagai berikut:
        "Latsari MANDIRI SEJAHTERA ADIL DAN MAKMUR" 
      </p>
      
      {/* Daftar Visi */}
      <h2 className="text-2xl font-semibold mb-2">Visi:</h2>
      <ol className="list-decimal list-inside ml-4 mb-6 text-justify">
        <li>Mandiri: Suatu masyarakat dikatakan mandiri apabila masyarakat mampu berswadaya dalam mendukung pembangunan 
            desa serta mampu membuka lapangan kerja dengan kemampuan Sumber Daya Manusia yang ada.</li>
        <li>Sejahtera: Suatu masyarakat dikatakan sejahtera apabila keadaan kesehatan, pendidikan, perekonomian masyarakat
            dapat terpenuhi sesuai standar hidup yang layak.</li>
        <li>Adil dan Makmur: Suatu masyarakat dikatakan adil dan Makmur apabila masyarakat Sudah mendapatkan suatu kehidupan 
            yang mampu untuk hidup yang serba terpenuhi baik itu pendidikan kesehatan dan hidup layak dengan demikian masyarakat 
            desa Latsari dapat merasakan hidup yang makmur dan merata tanpa memandang strata kehidupan social untuk pembangunan 
            desa serta mampu membuka lapangan kerja dengan kemampuan Sumber Daya Manusia yang ada.</li>
      </ol>
      
      {/* Penjelasan Misi */}
      <p className="mb-4 text-justify">
        Keberadaan Visi ini merupakan cita-cita yang akan dituju di masa mendatang oleh segenap warga Desa Latsari
        Dengan visi ini diharapkan akan terwujud masyarakat Desa Latsari yang maju dalam bidang pertanian sehingga 
        bisa mengantarkan kehidupan yang rukun dan akan menunjang keberhasilan tercapainya sebuah visi. Dengan kata 
        lain Misi Desa Latsari merupakan penjabaran lebih operatif dari Visi. Penjabaran dari visi ini diharapkan 
        dapat mengikuti dan mengantisipasi setiap terjadinya perubahan situasi dan kondisi lingkungan di masa yang 
        akan datang dari usaha-usaha mencapai Visi Desa Latsari. Misi adalah merupakan pernyataan yang menetapkan 
        tujuan dan sasaran desa yang hendak dicapai, pernyataan misi membawa desa kepada suatu focus prioritas 
        program yang akan dilaksanakan. Misi ini lah yang harus diemban oleh pemerintah desa untuk mewujudkan Visi desa.
      </p>
      
      {/* Daftar Misi */}
      <h2 className="text-2xl font-semibold mb-2">Misi:</h2>
      <ol className="list-decimal list-inside ml-4 text-justify">
        <li>Mewujudkan tata pemerintahan desa yang baik dengan meningkatkan pelayanan bidang pemerintahan, kesehatan, dan pendidikan kepada seluruh warga,</li>
        <li>Mewujudkan pemerintahan desa yang bersih melalui transparansi dalam perencanaan pembangunan, akuntabilitas (pertanggung-jawaban) dalam pelaksanaan pembangunan,</li>
        <li>Meningkatkan hasil pertanian dengan mengembangkan penggunaan pupuk organik dan pemberantasan hama dan penyakit tanaman secara hayati,</li>
        <li>Meningkatkan pengolahan hasil pertanian, khususnya Kelompok tani bekerja sama dengan Dinas Pertanian,</li>
        <li>Meningkatkan volume perdagangan, khususnya hasil pertanian dengan menjalin kerjasama dengan Dinas Perindustrian dan Perdagangan serta para penyuluh lapangan.</li>
        <li>Meningkatkan kualitas pendidikan dengan menjalin kerjasama dengan Dinas Pendidikan,</li>
        <li>Memperbaiki dan menambah sarana dan prasarana dasar khususnya air bersh bagi seluruh warga,</li>
      </ol>
    </div>
  );
};

export default VisiMisi;
