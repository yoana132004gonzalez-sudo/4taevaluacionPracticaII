import '../styles/components/pages/NosotrosPage.css'

const NosotrosPage = (props) => {
    return(
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>La idea de crear Corazones Peludos nació del amor y la preocupación por los animales que buscan un hogar. Muchas veces veíamos a perros y gatos en situación de calle, esperando una oportunidad para ser parte de una familia. Fue entonces cuando decidimos unir fuerzas y crear un espacio donde cada persona pudiera conocer a estos amiguitos peludos y darles la posibilidad de una nueva vida.</p>
                <p>Nuestro portal no solo busca facilitar la adopción responsable, sino también generar conciencia sobre el cuidado y respeto hacia los animales. Creemos que cada mascota merece un hogar lleno de cariño, y cada familia merece la alegría que ellos traen consigo. Así nació este proyecto: un puente entre corazones humanos y corazones peludos.</p>
            </div>

            <div className="staff">
                <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                         <img src="img/nosotros/nosotros2.jpg" alt="Gonzalez Yoana" />
                         <h5>Gonzalez Yoana</h5>
                         <h6>Dueña</h6>
                         <p>Yoana es una de las fundadoras de "Corazones Peludos". Su amor por los animales la llevó a impulsar este proyecto con el objetivo de darles una segunda oportunidad a perros y gatos en situación de calle. Se caracteriza por su compromiso y dedicación en cada adopción, asegurándose de que cada mascota encuentre un hogar lleno de cariño.</p>
                    </div>


                    <div className="persona">
                        <img src="img/nosotros/nosotros1.jpg" alt="Figueroa Andrea" />
                        <h5>Figueroa Andrea</h5>
                        <h6>Dueña</h6>
                        <p>Andrea comparte la misma pasión por los animales y la convicción de que todos merecen una vida digna. Su energía y empatía han sido clave para que "Corazones Peludos" se convierta en un espacio de encuentro entre familias y mascotas. Siempre busca transmitir la importancia de la adopción responsable y el respeto hacia nuestros amigos peludos.</p>
                    </div>
          
                </div>
            </div>
        </main>
    )
}
export default NosotrosPage;