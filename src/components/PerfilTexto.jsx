import ImgTitulo from 'components/ImgTitulo';

const PerfilTexto = () => (
  <div className='flex flex-col items-center p-4 w-full'>
    <ImgTitulo imagen='Etiqueta.png' titulo='Perfil' />
    <div className='pt-5'>
      <p className='text-white text-sm text-justify'>
        Soy un desarrollador radicado en Colombia, aunque tengo poco camino
        laboral, he tenido la oportunidad de trabajar con diferentes
        tecnologías, tanto en el back-end, como el front-end. Mi interés es
        aprender nuevas tecnologías, enfocadas en front-end, pero también
        aprender del back, para a futuro convertirme en un fullstack.
      </p>
    </div>
  </div>
);

export default PerfilTexto;
