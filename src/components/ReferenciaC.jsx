import ImgTitutloIz from 'components/ImgTitutloIz';

const ReferenciaC = () => (
  <div className='flex flex-col items-center w-full pt-3'>
    <ImgTitutloIz imagen='Referencia.png' titulo='Referencias' tamaño='80' />
    <div className='flex flex-col pt-4 w-9/12 items-center'>
      <p className='grid grid-col-1 text-white pt-5 text-sm text-justify'>
        <span>Maria Camila Yarce Puerta </span>
        <span>Contacto: 3014425536</span>
      </p>
      <p className='grid grid-col-1 text-white pt-3 text-sm text-justify'>
        <span>Santiago Puerta Yarce </span>
        <span>Contacto: 300 4480787</span>
      </p>
      <p className='grid grid-col-1 text-white pt-3 text-sm text-justify'>
        <span>Olga Elena Taborda Mesa </span>
        <span>Contacto: 3117079795</span>
      </p>
    </div>
  </div>
);

export default ReferenciaC;
