import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/components/pages/MascotasPage.css";

const MascotasCard = () => {
  const { tipo } = useParams();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const mascotas = {
    perros: [
      { nombre:"Putin", desc:"Cachorro de 7 meses muy cariñoso.", img:"/img/Putin.jpg" },
      { nombre:"Chita", desc:"Perrita dócil y juguetona.", img:"/img/Chita.jpg" },
      { nombre:"Drako", desc:"Tranquilo y observador, disfruta de paseos relajados.", img:"/img/Drako.jpg"},
      { nombre:"Biscochito", desc:"Fuerte y protector, muy leal.", img:"/img/Biscochito.jpg"},
    ],
    gatos: [
      { nombre:"Copito", desc:"Gato muy cariñoso y dócil, 2 años.", img:"/img/Copito.jpg" },
      { nombre:"Michurri", desc:"Muy juguetón, 1 año.", img:"/img/Michurri.jpg" },
      { nombre:"Pichulor", desc:"Cariñoso y tranquilo, disfruta de la compañía humana.", img:"/img/Pichulo.jpg"},
      { nombre:"Kira", desc:"Dormilona y muy cariñosa", img:"/img/Kira.jpg"},
    ],
  };

  if (!mascotas[tipo]) {
    return <p>No hay mascotas disponibles en esta categoría.</p>;
  }

  const prevMascota = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? mascotas[tipo].length - 1 : prev - 1
    );
  };

  const nextMascota = () => {
    setCurrentIndex((prev) =>
      prev === mascotas[tipo].length - 1 ? 0 : prev + 1
    );
  };

  const mascota = mascotas[tipo][currentIndex];

  return (
    <main className="holder">
      <div className="carousel">
        <button onClick={prevMascota} className="arrow left">◀</button>

        <div className="mascota">
          <img src={mascota.img} alt={mascota.nombre} />
          <h5>{mascota.nombre}</h5>
          <p>{mascota.desc}</p>
          <Link to="/formulario-adopcion" className="btn-adoptar">
            Adoptar
          </Link>
        </div>

        <button onClick={nextMascota} className="arrow right">▶</button>
      </div>

      {/* Botón volver */}
      <div className="volver">
        <button onClick={() => navigate("/mascotas")} className="btn-volver">
          ⬅ Volver
        </button>
      </div>
    </main>
  );
};

export default MascotasCard;
