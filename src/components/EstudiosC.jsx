import ImgTitutloIz from 'components/ImgTitutloIz';

const EstudiosC = () => (
  <div className='flex flex-col items-center w-full'>
    <ImgTitutloIz imagen='Libros.png' titulo='Estudios' tamaño='80' />
    <div className='flex flex-col p-4'>
      <p className='text-white pt-5 text-sm text-justify'>
        Educación Primaria, Institución Educativa María Auxiliadora (2005-2009)
      </p>
      <p className='text-white pt-3 text-sm text-justify'>
        Educación Secundaria, Institución Educativa María Auxiliadora
        (2010-2015)
      </p>
      <p className='text-white pt-3 text-sm text-justify'>
        Ingeniería de Sistemas, Universidad de Antioquia (2018-Presente)
      </p>
    </div>
  </div>
);

export default EstudiosC;
