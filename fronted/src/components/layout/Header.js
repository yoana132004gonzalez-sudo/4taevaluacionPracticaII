import '../../styles/components/layout/Header.css'

const Header = () => {
    return (
        <header>
            <div className="holder">
                 <img src="/img/logo.jpg" alt="Mascotas en Adopción" className="img-header"/>
                 <h1 className="title">Corazones peludos <span className="paw">🐾</span></h1>
            </div>
        </header>
    )
}

export default Header;

