import ImgTitulo from 'components/ImgTitulo';

const PerfilTexto = () => (
  <div className='flex flex-col items-center p-4 w-full'>
    <ImgTitulo imagen='Etiqueta.png' titulo='Sobre mí' />
    <div className='pt-5'>
      <p className='text-white text-sm text-justify'>
        Soy una persona con capacidad para tomar decisiones, soy alguien
        proactivo, listo para afrontar cualquier tarea que se me ponga, siendo
        responsable con las mismas, con buenas habilidades blandas, tengo
        facilidad para trabajar en equipo, con buena comunicación, y siendo
        activo con propuestas, también aprendo rápidamente, con disposición de
        actualizar mis conocimientos, y también aportar desde mi conocimiento a
        otras personas.
      </p>
    </div>
  </div>
);

export default PerfilTexto;
