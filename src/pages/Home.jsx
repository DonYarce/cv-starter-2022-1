import React from 'react';
import FotoPerfil from 'components/FotoPerfil';
import PerfilTexto from 'components/PerfilTexto';
import SobreMi from 'components/SobreMi';
import EstudiosC from 'components/EstudiosC';
import LaboralC from 'components/LaboralC';
import CertificadoC from 'components/CertificadoC';
import IdiomasC from 'components/IdiomasC';
import HobbiesC from 'components/HobbiesC';
import ContactoC from 'components/ContactoC';
import ReferenciaC from 'components/ReferenciaC';

const Home = () => (
  <div className='bg-gradient-to-tr from-stone-800 to-blue-900 min-h-screen md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-1 lg:divide-x-4 lg:divide-black'>
    <div className='md:grid md:grid-cols-3 md:col-span-2 lg:col-span-1 lg:block'>
      <FotoPerfil />
      <PerfilTexto />
      <SobreMi />
    </div>
    <div>
      <HobbiesC />
      <EstudiosC />
      <CertificadoC />
      <LaboralC />
    </div>
    <div>
      <IdiomasC />
      <ReferenciaC />
      <ContactoC />
    </div>
  </div>
);

export default Home;
