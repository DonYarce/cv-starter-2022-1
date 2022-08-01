import ImgText from 'components/ImgText';
import ImgTitulo from 'components/ImgTitulo';

const ContactoC = () => (
  <div className='flex flex-col items-center p-4 w-full'>
    <ImgTitulo imagen='Etiqueta.png' titulo='Contacto' />
    <div className='grid grid-cols-3 p-2 mt-6'>
      <img width='100' className='p-2' src='LinkedIn.png' alt='foto' />
      <img width='100' className='p-2' src='Instagram.png' alt='foto' />
      <img width='100' className='p-2' src='Git-Hub.png' alt='foto' />
    </div>
    <ImgText
      texto1='alejoyarce@hotmail.es'
      texto2='3117079795'
      imagen1='Correo.png'
      imagen2='Telefono.png'
      tamaño1='80'
      tamaño2='80'
    />
  </div>
);

export default ContactoC;
