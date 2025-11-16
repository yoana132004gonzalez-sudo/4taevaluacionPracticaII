import { Link } from "react-router-dom";
import '../styles/components/pages/MascotasPage.css';

const MascotasenadopcionPage = () => {
  return (
    <main className="holder">
      
      <div className="categorias">
        {/*Perros */}
        <Link to="/mascotas/perros" className="categoria">
          <div className="card">
            <img src="img/Perrito.jpg" alt="Perro" />
            <h5>Perros</h5>
          </div>
        </Link>

        {/*Gatos */}
        <Link to="/mascotas/gatos" className="categoria">
          <div className="card">
            <img src="img/Gatito.jpg" alt="Gato" />
            <h5>Gatos</h5>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default MascotasenadopcionPage;
