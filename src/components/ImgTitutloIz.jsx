const ImgTitutloIz = ({ imagen, titulo, tamaño }) => (
  <div className='flex relative w-9/12 justify-center pt-2'>
    <img width={tamaño} className='absolute left-0' src={imagen} alt='foto' />
    <p className='text-3xl text-white text-center mt-4 font-bold pt-1'>
      {titulo}
    </p>
  </div>
);

export default ImgTitutloIz;
