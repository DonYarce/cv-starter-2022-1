import Engranajes from 'components/Engranajes';
import ImgTitutloIz from 'components/ImgTitutloIz';

const IdiomasC = () => (
  <div className='flex flex-col items-center w-full'>
    <ImgTitutloIz imagen='Idiomas.png' titulo='Idiomas' tamaño='80' />
    <div className='w-full pt-4'>
      <Engranajes
        idioma='Inglés'
        eng1='Eng1.png'
        eng2='Eng1.png'
        eng3='Eng1.png'
        eng4='Eng0.png'
        eng5='Eng0.png'
        eng6='Eng0.png'
      />
      <Engranajes
        idioma='Español'
        eng1='Eng1.png'
        eng2='Eng1.png'
        eng3='Eng1.png'
        eng4='Eng1.png'
        eng5='Eng1.png'
        eng6='Eng1.png'
      />
      <Engranajes
        idioma='Japonés'
        eng1='Eng1.png'
        eng2='Eng0.png'
        eng3='Eng0.png'
        eng4='Eng0.png'
        eng5='Eng0.png'
        eng6='Eng0.png'
      />
    </div>
  </div>
);

export default IdiomasC;
