import ImgTitutloIz from 'components/ImgTitutloIz';

const CertificadoC = () => (
  <div className='flex flex-col items-center pt-6 w-full'>
    <ImgTitutloIz imagen='Certificado.png' titulo='Certificados' tamaño='60' />
    <div className='flex flex-col pt-4 w-9/12'>
      <p className='text-white pt-5 text-sm text-justify'>
        Certificado de desarrollo con nodeJS, express y mongoDB, Universidad
        Austral (2021)
      </p>
      <p className='text-white pt-3 text-sm text-justify'>
        Certificado en desarrollo de videojuegos, Universidad de Antioquia
        (2020)
      </p>
      <p className='text-white pt-3 text-sm text-justify'>
        Certificado JavaScipt Moderno, Udemy (2021)
      </p>
    </div>
  </div>
);

export default CertificadoC;
