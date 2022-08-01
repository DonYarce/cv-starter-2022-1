import ImgTitutloIz from 'components/ImgTitutloIz';

const LaboralC = () => (
  <div className='flex flex-col items-center p-4 w-full'>
    <ImgTitutloIz imagen='Corbata.png' titulo='Laboral' tamaño='80' />
    <div className='flex flex-col pt-5'>
      <p className='text-white pt-5 text-sm text-justify'>
        Profesor de desarrollo de Videojuegos, Ubicua (septiembre 2021-
        diciembre 2021)
      </p>
    </div>
  </div>
);

export default LaboralC;
