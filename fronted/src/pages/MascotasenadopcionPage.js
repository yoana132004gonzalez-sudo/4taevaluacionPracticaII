import { Link } from "react-router-dom";
import "../styles/components/pages/MascotasenadopcionPage.css";

const MascotasenadopcionPage = () => {
  return (
    <main className="holder">
      {/* Sección Perros */}
      <section className="categoria">
        <h2>Perros en Adopción</h2>
        <div className="galeria">
          <div className="mascota active">
            <img src="img/Putin.jpg" alt="Putin" />
            <h4>Putin</h4>
            <p>Perro muy cariñoso. Tiene 7 meses y busca una familia.</p>
            <Link className="boton" to="/contacto">
              Adoptar
            </Link>
          </div>
          <div className="mascota">
            <img src="img/Chita.jpg" alt="Chita" />
            <h4>Chita</h4>
            <p>Perrita chiquita, muy juguetona y dormilona.</p>
            <Link className="boton" to="/contacto">
              Adoptar
            </Link>
          </div>
          <div className="mascota">
            <img src="/img/Biscochito.jpg" alt="Biscochito" />
            <h4>Biscochito</h4>
            <p>Perrito mediano, muy juguetón, aproximadamente 2 años.</p>
            <Link className="boton" to="/contacto">
              Adoptar
            </Link>
          </div>
          <div className="mascota">
            <img src="/img/Drako.jpg" alt="Drako" />
            <h4>Drako</h4>
            <p>Perrito de 2 meses, pequeño, esperando una familia.</p>
            <Link className="boton" to="/contacto">
              Adoptar
            </Link>
          </div>
        </div>
      </section>

      {/* Sección Gatos */}
      <section className="categoria">
        <h2>Gatos en Adopción</h2>
        <div className="galeria">
          <div className="mascota active">
            <img src="/img/Copito.jpg" alt="Copito" />
            <h4>Copito</h4>
            <p>Gatita tranquila y dormilona, de aproximadamente 2 años.</p>
            <Link className="boton" to="/contacto">
              Adoptar
            </Link>
          </div>
          <div className="mascota">
            <img src="/img/Michurri.jpg" alt="Michurri" />
            <h4>Michurri</h4>
            <p>Gatito muy juguetón, de 1 año.</p>
            <Link className="boton" to="/contacto">
              Adoptar
            </Link>
          </div>
          <div className="mascota">
            <img src="/img/Pichulo.jpg" alt="Pichulo" />
            <h4>Pichulo</h4>
            <p>Gatito muy cariñoso y juguetón, de 1 año y medio.</p>
            <Link className="boton" to="/contacto">
              Adoptar
            </Link>
          </div>
          <div className="mascota">
            <img src="/img/Kira.jpg" alt="Kira" />
            <h4>Kira</h4>
            <p>Gatita cariñosa y muy juguetona, de 7 meses.</p>
            <Link className="boton" to="/contacto">
              Adoptar
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MascotasenadopcionPage;
