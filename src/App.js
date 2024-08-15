import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import DusunGuwo from './pages/DusunGuwo';
import DusunJambangan from './pages/DusunJambangan';
import DusunKempreng from './pages/DusunKempreng';
import VisiMisi from './pages/VisiMisi';
import StrukturOrganisasi from './pages/StrukturOrganisasi';
import SejarahDesa from './pages/SejarahDesa';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dusun-guwo" element={<DusunGuwo />} />
            <Route path="/dusun-jambangan" element={<DusunJambangan />} />
            <Route path="/dusun-kempreng" element={<DusunKempreng />} />
            <Route path="/visi-misi" element={<VisiMisi />} />
            <Route path="/struktur-organisasi" element={<StrukturOrganisasi />} />
            <Route path="/sejarah-desa" element={<SejarahDesa />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
