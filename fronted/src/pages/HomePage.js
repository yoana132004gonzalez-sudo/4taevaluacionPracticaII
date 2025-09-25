import '../styles/components/pages/HomePage.css';

const HomePage = (Props) => {
    return (
        <main className='holder'>
             <div className='homeimg'>
            <img src='img/GatosPerros.jpg' width="600px" style={{ margin: "auto", display: "block", height: "auto" }} alt='Gatos y Perros'/>
            </div>
            <div className='columnas'>
                <div className='bienvenidos left'>
                    <h2>Bienvenidos a nuestra pagina de Corazones Peludos </h2>
                </div>  
                <div className='testimonios right'>
                    <h2>Testimonios</h2>
                    <div className='cita'>Simplemente excelente 

                        <span className='autor'> Diseñado por Figueroa Verónica y Gonzalez Yoana -&copy; 2do año </span>    
                    </div>
                </div>
            </div>      
        </main>    
    );
}
export default HomePage;
