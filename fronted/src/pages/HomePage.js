import '../styles/components/pages/HomePage.css'

const HomePage = () => {
    return (
        <main className="home-page">
            <div className="imagen-principal">
                <img src="/img/GatosPerros.jpg" alt="Mascotas en Adopción" />
            </div>

            <div className="bienvenida">
                <h2>Bienvenidos a nuestro portal de amiguitos peludos</h2>
                <p>Acá podes ver a todos nuestros amiguitos que están buscando un hogar y un fiel compañero/a.</p>
            </div>

        </main>
    )
}

export default HomePage;
