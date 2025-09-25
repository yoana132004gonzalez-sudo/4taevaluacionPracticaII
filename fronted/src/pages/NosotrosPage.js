import '../styles/components/pages/NosotrosPage.css';

const NosotrosPage = () => {
  return (
    <main className='holder'>
      <div className='historia'>
        <h2>Historia</h2>
        <p>
          Nuestro proyecto nació con el objetivo de fomentar la adopción responsable 
          y dar una segunda oportunidad a los animales en situación de calle. 
          Con mucho esfuerzo y dedicación, trabajamos para conectar a las mascotas 
          con familias amorosas que les brinden un hogar definitivo.
        </p>
      </div>

      <div className='staff'>
        <h2>Staff</h2>
        <div className='personas'>
          <div className='persona'>
            <img src='img/nosotros/nosotros1.jpg' alt='Andrea Figueroa' />
            <h5>Andrea Figueroa</h5>
            <h6>Co-Fundadora</h6>
            <p>
              Andrea se encarga de coordinar las campañas de adopción y 
              asegurar que cada mascota reciba el cuidado necesario 
              mientras espera su nuevo hogar.
            </p>
          </div>

          <div className='persona'>
            <img src='img/nosotros/nosotros2.jpg' alt='Yasmin Gonzalez' />
            <h5>Yasmin Gonzalez</h5>
            <h6>Co-Fundadora</h6>
            <p>
              Yasmin se ocupa de la comunicación con adoptantes y de 
              generar conciencia sobre la importancia de la adopción responsable. 
              Su objetivo es construir una comunidad comprometida con el bienestar animal.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NosotrosPage;
