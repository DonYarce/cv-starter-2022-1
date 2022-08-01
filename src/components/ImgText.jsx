const ImgText = ({ texto1, texto2, imagen1, imagen2, tamaño1, tamaño2 }) => (
  <div className='grid grid-cols-2 w-full mt-6'>
    <div>
      <img width={tamaño1} className='mx-auto' src={imagen1} alt='foto' />
      <p className='text-white text-sm text-center w-full font-bold'>
        {texto1}
      </p>
    </div>
    <div>
      <img width={tamaño2} className='mx-auto' src={imagen2} alt='foto' />
      <p className='text-white text-sm text-center w-full font-bold'>
        {texto2}
      </p>
    </div>
  </div>
);

export default ImgText;
