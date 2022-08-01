import ImgTitulo from 'components/ImgTitulo';
import ImgText from 'components/ImgText';

const HobbiesC = () => (
  <div className='flex flex-col items-center p-4 w-full'>
    <ImgTitulo imagen='Etiqueta.png' titulo='Hobbies' />
    <ImgText
      texto1='Deporte'
      texto2='Videojuegos'
      imagen1='Gimnasio.png'
      imagen2='Consola.png'
      tamaño1='80'
      tamaño2='80'
    />
    <ImgText
      texto1='Cocina y comer'
      texto2='Compartir'
      imagen1='Cocina.png'
      imagen2='Compañia.png'
      tamaño1='80'
      tamaño2='80'
    />
  </div>
);

export default HobbiesC;
