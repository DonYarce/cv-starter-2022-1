const Engranajes = ({ idioma, eng1, eng2, eng3, eng4, eng5, eng6 }) => (
  <div className='flex justify-evenly pt-6 w-full'>
    <p className='text-white text-2xl pt-2 font-bold w-24 '>{idioma}</p>
    <div className='flex'>
      <img width='40' src={eng1} alt='foto' />
      <img width='40' src={eng2} alt='foto' />
      <img width='40' src={eng3} alt='foto' />
      <img width='40' src={eng4} alt='foto' />
      <img width='40' src={eng5} alt='foto' />
      <img width='40' src={eng6} alt='foto' />
    </div>
  </div>
);

export default Engranajes;
