import ImgText from 'components/ImgText';
import ImgTitulo from 'components/ImgTitulo';
import ContactoLinks from 'components/ContacosLinks';

const ContactoC = () => (
  <div className='flex flex-col items-center p-4 w-full'>
    <ImgTitulo imagen='Etiqueta.png' titulo='Contacto' />
    <ContactoLinks />
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
