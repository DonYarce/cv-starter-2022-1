const ImgTitulo = ({ imagen, titulo }) => (
  <div className='flex relative w-9/12 justify-center'>
    <p className='text-3xl text-white text-center mt-4 font-bold'>{titulo}</p>
    <img width='75' className='p-2 right-0' src={imagen} alt='foto' />
  </div>
);

export default ImgTitulo;
