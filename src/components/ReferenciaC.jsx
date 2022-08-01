import ImgTitutloIz from 'components/ImgTitutloIz';

const ReferenciaC = () => (
  <div className='flex flex-col items-center w-full pt-3'>
    <ImgTitutloIz imagen='Referencia.png' titulo='Referencias' tamaño='80' />
    <div className='flex flex-col pt-4 w-9/12 items-center'>
      <span className='text-white pt-5 text-sm text-justify'>
        Maria Camila Yarce Puerta
      </span>
      <span className='text-white text-sm text-justify'>
        Contacto: 3014425536
      </span>
      <span className='text-white pt-5 text-sm text-justify'>
        Santiago Puerta Yarce
      </span>
      <span className='text-white text-sm text-justify'>
        Contacto: 300 4480787
      </span>
      <span className='text-white pt-5 text-sm text-justify'>
        Olga Elena Taborda Mesa
      </span>
      <span className='text-white text-sm text-justify'>
        Contacto: 3117079795
      </span>
    </div>
  </div>
);

export default ReferenciaC;
